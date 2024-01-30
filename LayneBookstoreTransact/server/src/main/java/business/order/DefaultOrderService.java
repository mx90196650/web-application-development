package business.order;

import api.ApiException;
import business.BookstoreDbException;
import business.JdbcUtils;
import business.book.Book;
import business.book.BookDao;
import business.cart.ShoppingCart;
import business.cart.ShoppingCartItem;
import business.customer.Customer;
import business.customer.CustomerDao;
import business.customer.CustomerForm;

import java.sql.Connection;
import java.sql.SQLException;
import java.time.YearMonth;
import java.util.Date;
import java.util.List;
import java.util.Random;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.stream.Collectors;

public class DefaultOrderService implements OrderService {

	private BookDao bookDao;

	private OrderDao orderDao;

	private CustomerDao customerDao;

	private LineItemDao lineItemDao;

	public void setBookDao(BookDao bookDao) {
		this.bookDao = bookDao;
	}

	public void setOrderDao(OrderDao orderDao) {
		this.orderDao = orderDao;
	}

	public void setCustomerDao(CustomerDao customerDao) {
		this.customerDao = customerDao;
	}

	public void setLineItemDao(LineItemDao lineItemDao) {
		this.lineItemDao = lineItemDao;
	}

	@Override
	public OrderDetails getOrderDetails(long orderId) {
		Order order = orderDao.findByOrderId(orderId);
		Customer customer = customerDao.findByCustomerId(order.getCustomerId());
		List<LineItem> lineItems = lineItemDao.findByOrderId(orderId);
		List<Book> books = lineItems
				.stream()
				.map(lineItem -> bookDao.findByBookId(lineItem.getBookId()))
				.collect(Collectors.toList());
		return new OrderDetails(order, customer, lineItems, books);
	}

	@Override
    public long placeOrder(CustomerForm customerForm, ShoppingCart cart) {

		validateCustomer(customerForm);
		validateCart(cart);

		try (Connection connection = JdbcUtils.getConnection()) {
			Date date = getDate(
					customerForm.getCcExpiryMonth(),
					customerForm.getCcExpiryYear());
			return performPlaceOrderTransaction(
					customerForm.getName(),
					customerForm.getAddress(),
					customerForm.getPhone(),
					customerForm.getEmail(),
					customerForm.getCcNumber(),
					date, cart, connection);
		} catch (SQLException e) {
			throw new BookstoreDbException("Error during close connection for customer order", e);
		}
	}

	private Date getDate(String monthString, String yearString) {
		return new Date(); // TODO Implement this correctly
	}

	private long performPlaceOrderTransaction(
			String name, String address, String phone,
			String email, String ccNumber, Date date,
			ShoppingCart cart, Connection connection) {
		try {
			connection.setAutoCommit(false);
			long customerId = customerDao.create(
					connection, name, address, phone, email,
					ccNumber, date);
			long customerOrderId = orderDao.create(
					connection,
					cart.getComputedSubtotal() + cart.getSurcharge(),
					generateConfirmationNumber(), customerId);
			for (ShoppingCartItem item : cart.getItems()) {
				lineItemDao.create(connection, customerOrderId, item.getBookId(),
						item.getQuantity());
			}
			connection.commit();
			return customerOrderId;
		} catch (Exception e) {
			try {
				connection.rollback();
			} catch (SQLException e1) {
				throw new BookstoreDbException("Failed to roll back transaction", e1);
			}
			return 0;
		}
	}

	private int generateConfirmationNumber() {
		Random ran = new Random();
		return ran.nextInt(999999999);
	}

	private void validateCustomer(CustomerForm customerForm) {

    	String name = customerForm.getName();

		if (name == null || name.equals("") || name.length() > 45 || name.length() < 4) {
			throw new ApiException.InvalidParameter("Invalid name field");
		}

		String address = customerForm.getAddress();

		if (address == null || address.equals("") || address.length() > 45 || address.length() < 4) {
			throw new ApiException.InvalidParameter("Invalid address field");
		}

		String phone = customerForm.getPhone();

		String PHONE_PATTERN = "^((\\(\\d{3}\\))|\\d{3})[- .]?\\d{3}[- .]?\\d{4}$";

		if (phone == null || phone.equals("") || !matchPattern(phone, PHONE_PATTERN))
			throw new ApiException.InvalidParameter("Invalid phone number");

		String email = customerForm.getEmail();

		String EMAIL_PATTERN = "^(?=.{1,64}@)[A-Za-z0-9_-]+(\\.[A-Za-z0-9_-]+)*@"
				+ "[^-][A-Za-z0-9-]+(\\.[A-Za-z0-9-]+)*(\\.[A-Za-z]{2,})$";

		if (email == null || email.equals("") || !matchPattern(email, EMAIL_PATTERN))
			throw new ApiException.InvalidParameter("Invalid email address");

		String ccNumber = customerForm.getCcNumber();
		if (ccNumber == null || ccNumber.equals(""))
			throw new ApiException.InvalidParameter("Invalid credit card number");

		ccNumber = ccNumber.replaceAll("[\\s\\-]", "");

		if (ccNumber.length() < 14 || ccNumber.length() > 16)
			throw new ApiException.InvalidParameter("Invalid credit card number");

		String ccExpiryMonth = customerForm.getCcExpiryMonth();
		String ccExpiryYear = customerForm.getCcExpiryYear();

		if (ccExpiryMonth == null || ccExpiryMonth.equals("") || ccExpiryYear == null || ccExpiryYear.equals("") || expiryDateIsInvalid(ccExpiryMonth, ccExpiryYear)) {
			throw new ApiException.InvalidParameter("Invalid expiry date");
		}
	}

	private boolean expiryDateIsInvalid(String ccExpiryMonth, String ccExpiryYear) {
		int expiryYear = Integer.parseInt(ccExpiryYear);
		int expiryMonth = Integer.parseInt(ccExpiryMonth);
		if (expiryMonth < 0 || expiryMonth > 12)
			return true;
		YearMonth thisMonth = YearMonth.now();
		YearMonth expiryDate = YearMonth.of(expiryYear, expiryMonth);
		if (expiryDate.isBefore(thisMonth))
			return true;
		return false;
	}

	private void validateCart(ShoppingCart cart) {

		if (cart.getItems().size() <= 0) {
			throw new ApiException.InvalidParameter("Cart is empty.");
		}

		cart.getItems().forEach(item-> {
			if (item.getQuantity() < 0 || item.getQuantity() > 99) {
				throw new ApiException.InvalidParameter("Invalid quantity.");
			}
			Book databaseBook = bookDao.findByBookId(item.getBookId());
			if (databaseBook.getPrice() != item.getBookForm().getPrice())
				throw new ApiException.InvalidParameter("Unmatched prices for book \"" + databaseBook.getTitle() + "\".");
			if (databaseBook.getCategoryId() != item.getBookForm().getCategoryId())
				throw new ApiException.InvalidParameter("Unmatched categories for book \"" + databaseBook.getTitle() + "\".");
		});
	}

	private boolean matchPattern(String field, String pattern) {
		Pattern pat = Pattern.compile(pattern);
		Matcher mat = pat.matcher(field);
		if (mat.matches())
			return true;
		else
			return false;
	}

}
