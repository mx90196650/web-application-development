DELETE FROM book;
ALTER TABLE book AUTO_INCREMENT = 1001;

DELETE FROM category;
ALTER TABLE category AUTO_INCREMENT = 1001;

INSERT INTO `category` (`name`) VALUES ('Adventure'),('Science Fiction'),('Crime'),('Horror'),('Romance'),('Fantasy'),('Drama'),('Mystery');

INSERT INTO `book` (title, author, price, is_public, category_id, description, rating, is_featured) VALUES ('The Three Musketeers', 'Alexandre Dumas', 699, TRUE, 1001, '', 0, FALSE);
INSERT INTO `book` (title, author, price, is_public, category_id, description, rating, is_featured) VALUES ('Treasure Island', 'Robert Louis Stevenson', 495, FALSE, 1001, '', 0, FALSE);
INSERT INTO `book` (title, author, price, is_public, category_id, description, rating, is_featured) VALUES ('Journey to the Center of the Earth', 'Jules Verne', 499, FALSE, 1001, '', 0, FALSE);
INSERT INTO `book` (title, author, price, is_public, category_id, description, rating, is_featured) VALUES ('The Count of Monte Cristo', 'Alexandre Dumas', 1600, TRUE, 1001, '', 0, FALSE);

INSERT INTO `book` (title, author, price, is_public, category_id, description, rating, is_featured) VALUES ('The Hunger Games', 'Suzanne Collins', 1299, TRUE, 1002, '', 0, FALSE);
INSERT INTO `book` (title, author, price, is_public, category_id, description, rating, is_featured) VALUES ('Gideon the Ninth', 'Tamsyn Muir', 1799, FALSE, 1002, '', 0, FALSE);
INSERT INTO `book` (title, author, price, is_public, category_id, description, rating, is_featured) VALUES ('The Space Between Worlds', 'Micaiah Johnson', 1699, FALSE, 1002, '', 0, FALSE);
INSERT INTO `book` (title, author, price, is_public, category_id, description, rating, is_featured) VALUES ('Every Heart a Doorway', 'Seanan McGuire', 1799, FALSE, 1002, '', 0, FALSE);

INSERT INTO `book` (title, author, price, is_public, category_id, description, rating, is_featured) VALUES ('The Rising Tide', 'Ann Cleeves', 1999, TRUE, 1003, '', 0, FALSE);
INSERT INTO `book` (title, author, price, is_public, category_id, description, rating, is_featured) VALUES ('Dirt Town', 'Hayley Scrivenor', 1499, FALSE, 1003, '', 0, FALSE);
INSERT INTO `book` (title, author, price, is_public, category_id, description, rating, is_featured) VALUES ('The Sleeping and the Dead', 'Ann Cleeves', 899, TRUE, 1003, '', 0, FALSE);
INSERT INTO `book` (title, author, price, is_public, category_id, description, rating, is_featured) VALUES ('The Murders at Fleat House', 'Lucinda Riley', 1999, FALSE, 1003, '', 0, FALSE);

INSERT INTO `book` (title, author, price, is_public, category_id, description, rating, is_featured) VALUES ('RING', 'Koji Suzuki', 1699, TRUE, 1004, '', 0, FALSE);
INSERT INTO `book` (title, author, price, is_public, category_id, description, rating, is_featured) VALUES ('THE SHINNING', 'Stephen King', 1899, TRUE, 1004, '', 0, FALSE);
INSERT INTO `book` (title, author, price, is_public, category_id, description, rating, is_featured) VALUES ('THE MIST', 'Stephen King', 1599, FALSE, 1004, '', 0, FALSE);
INSERT INTO `book` (title, author, price, is_public, category_id, description, rating, is_featured) VALUES ('BATTLE ROYALE', 'Koshun Takimi', 1799, FALSE, 1004, '', 0, FALSE);
INSERT INTO `book` (title, author, price, is_public, category_id, description, rating, is_featured) VALUES ('IT', 'Stephen King', 1999, FALSE, 1004, '', 0, FALSE);
INSERT INTO `book` (title, author, price, is_public, category_id, description, rating, is_featured) VALUES ('DETENTION: THE NIGHTMARE RETURNS', 'Ling Jing', 1599, TRUE, 1004, '', 0, FALSE);

INSERT INTO `book` (title, author, price, is_public, category_id, description, rating, is_featured) VALUES ('Vision In White', 'Nora Roberts', 799, FALSE, 1005, '', 0, FALSE);
INSERT INTO `book` (title, author, price, is_public, category_id, description, rating, is_featured) VALUES ('The Hating Game', 'Sally Thorne', 1599, FALSE, 1005, '', 0, FALSE);
INSERT INTO `book` (title, author, price, is_public, category_id, description, rating, is_featured) VALUES ('Violeta', 'Isabel Allende', 2799, FALSE, 1005, '', 0, FALSE);
INSERT INTO `book` (title, author, price, is_public, category_id, description, rating, is_featured) VALUES ('I Kissed Shara Wheeler', 'Casey McQuiston', 1999, TRUE, 1005, '', 0, FALSE);

INSERT INTO `book` (title, author, price, is_public, category_id, description, rating, is_featured) VALUES ('The Lies of Locke Lamora', 'Scott Lynch', 899, FALSE, 1006, '', 0, FALSE);
INSERT INTO `book` (title, author, price, is_public, category_id, description, rating, is_featured) VALUES ('Gardens of the Moon', 'Steven Erikson', 999, FALSE, 1006, '', 0, FALSE);
INSERT INTO `book` (title, author, price, is_public, category_id, description, rating, is_featured) VALUES ('The Lion, the Witch and the Wardrobe', 'C.S. Lewis', 899, FALSE, 1006, '', 0, FALSE);
INSERT INTO `book` (title, author, price, is_public, category_id, description, rating, is_featured) VALUES ('Percy Jackson & the Olympians: The Lightning Thief', 'Rick Riordan', 799, TRUE, 1006, '', 0, FALSE);

INSERT INTO `book` (title, author, price, is_public, category_id, description, rating, is_featured) VALUES ('The layover', 'Lacie Waldon', 1199, TRUE, 1007, '', 0, FALSE);
INSERT INTO `book` (title, author, price, is_public, category_id, description, rating, is_featured) VALUES ('Shadow Storm (A Shadow Riders Novel)', 'Christine Feehan', 899, FALSE, 1007, '', 0, FALSE);
INSERT INTO `book` (title, author, price, is_public, category_id, description, rating, is_featured) VALUES ('The Road Trip', 'Beth O''Leary', 899, TRUE, 1007, '', 0, FALSE);
INSERT INTO `book` (title, author, price, is_public, category_id, description, rating, is_featured) VALUES ('Lizzie & Dante: A Novel', 'Mary Bly', 1699, FALSE, 1007, '', 0, FALSE);

INSERT INTO `book` (title, author, price, is_public, category_id, description, rating, is_featured) VALUES ('Good Rich People', 'Eliza Jane Brazier', 2699, FALSE, 1008, '', 0, FALSE);
INSERT INTO `book` (title, author, price, is_public, category_id, description, rating, is_featured) VALUES ('Verity', 'Colleen Hoover', 1699, TRUE, 1008, '', 0, FALSE);
INSERT INTO `book` (title, author, price, is_public, category_id, description, rating, is_featured) VALUES ('The Silent Patient', 'Alex Michaelides', 1799, FALSE, 1008, '', 0, FALSE);
INSERT INTO `book` (title, author, price, is_public, category_id, description, rating, is_featured) VALUES ('The Maid: A Novel', 'Nita Prose', 2699, TRUE, 1008, '', 0, FALSE);