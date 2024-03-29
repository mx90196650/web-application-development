(function(){var t={577:function(t,e,n){"use strict";var o=n(963),r=n(252),i=n(35),a=n(262),u=n.p+"img/pepe-store-logo.f7d8726b.gif",c=n(655),s=n(876);console.log(location.port);var p="8081"===location.port?"8080":location.port,l=location.protocol+"//"+location.hostname+":"+p+"/LayneBookstoreState/api/";console.log(l);var f=(0,s.Q_)("CategoryStore",{state:function(){return{categoryList:[]}},actions:{fetchCategories:function(){return(0,c.mG)(this,void 0,void 0,(function(){var t,e;return(0,c.Jh)(this,(function(n){switch(n.label){case 0:return t=l+"categories/",e=this,[4,fetch(t).then((function(t){return t.json()}))];case 1:return e.categoryList=n.sent(),[2]}}))}))}}}),g=function(t){return(0,r.dD)("data-v-750b3412"),t=t(),(0,r.Cn)(),t},d={id:"header-category-section"},h={id:"header-dropdown",ref:"root"},m=g((function(){return(0,r._)("button",{class:"button categories-button"},[(0,r._)("span",null,"Categories"),(0,r._)("i",{id:"dropdown-icon",class:"fa-solid fa-angle-down"})],-1)})),b=(0,r.aZ)({__name:"HeaderDropdown",setup:function(t){var e=f();return function(t,n){var o=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("section",d,[(0,r._)("div",h,[m,(0,r._)("ul",null,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)((0,a.SU)(e).categoryList,(function(t){return(0,r.wg)(),(0,r.iD)("li",{key:t.categoryId},[(0,r.Wm)(o,{to:"../category/"+t.name},{default:(0,r.w5)((function(){return[(0,r.Uk)((0,i.zw)(t.name),1)]})),_:2},1032,["to"])])})),128))])],512)])}}}),v=n(744);const y=(0,v.Z)(b,[["__scopeId","data-v-750b3412"]]);var j=y,w=n(201),k=n.p+"img/hero-img.f8715f77.png";const _=t=>((0,r.dD)("data-v-312d0c7b"),t=t(),(0,r.Cn)(),t),x={id:"hero-section"},O=_((()=>(0,r._)("img",{id:"hero-img",src:k,alt:"hero-img"},null,-1)));function C(t,e){const n=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("section",x,[O,(0,r.Wm)(n,{to:{name:"category-view",params:{name:"Adventure"}},id:"call-to-action-btn",class:"button"},{default:(0,r.w5)((()=>[(0,r.Uk)("SHOP FOR BOOKS")])),_:1})])}const D={},P=(0,v.Z)(D,[["render",C],["__scopeId","data-v-312d0c7b"]]);var W=P,A={id:"main-content"},I=(0,r.aZ)({__name:"HomeView",setup:function(t){return function(t,e){return(0,r.wg)(),(0,r.iD)("div",A,[(0,r.Wm)((0,a.SU)(W))])}}});const L=I;var S=L,U={id:"category-nav"},B={id:"category-buttons"},Z=(0,r.aZ)({__name:"CategoryNav",setup:function(t){var e=(0,w.yj)(),n=f();return function(t,o){var u=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("nav",U,[(0,r._)("ul",B,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)((0,a.SU)(n).categoryList,(function(t){return(0,r.wg)(),(0,r.iD)("li",{key:t.categoryId},[(0,r.Wm)(u,{to:{name:"category-view",params:{name:t.name}},class:(0,i.C_)(["button",t.name===(0,a.SU)(e).params.name?"selected-category-button":"unselected-category-button"])},{default:(0,r.w5)((function(){return[(0,r.Uk)((0,i.zw)(t.name),1)]})),_:2},1032,["to","class"])])})),128))])])}}});const z=(0,v.Z)(Z,[["__scopeId","data-v-10f96c76"]]);var q=z,H=(0,s.Q_)("BookStore",{state:function(){return{bookList:[]}},actions:{fetchBooks:function(t){var e;return(0,c.mG)(this,void 0,void 0,(function(){var n,o,r,i;return(0,c.Jh)(this,(function(a){switch(a.label){case 0:return n=f(),o=(null===(e=n.categoryList)||void 0===e?void 0:e.find((function(e){return e.name===t})))||n.categoryList[0],r=l+"categories/name/"+o.name+"/books/",i=this,[4,fetch(r).then((function(t){return t.json()}))];case 1:return i.bookList=a.sent(),[2]}}))}))}}}),T=function(){function t(t){Object.defineProperty(this,"book",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"quantity",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.book=t,this.quantity=1}return t}(),F=function(){function t(){Object.defineProperty(this,"itemArray",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.itemArray=[]}return Object.defineProperty(t.prototype,"numberOfItems",{get:function(){return this.itemArray.reduce((function(t,e){return t+e.quantity}),0)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"empty",{get:function(){return this.itemArray.length<=0},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"subtotal",{get:function(){return this.itemArray.reduce((function(t,e){return t+e.book.price*e.quantity}),0)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"total",{get:function(){return this.subtotal+this.surcharge},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"surcharge",{get:function(){return 500},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"clear",{enumerable:!1,configurable:!0,writable:!0,value:function(){this.itemArray=[]}}),Object.defineProperty(t.prototype,"addBook",{enumerable:!1,configurable:!0,writable:!0,value:function(t){var e=this.itemArray.find((function(e){return e.book.bookId==t.bookId}));if(e)e.quantity++;else{var n=new T(t);n.quantity=1,this.itemArray.push(n)}}}),Object.defineProperty(t.prototype,"update",{enumerable:!1,configurable:!0,writable:!0,value:function(t,e){if(!(e<0||e>99)){var n=this.itemArray.findIndex((function(e){return e.book.bookId==t.bookId}));-1!==n&&(0!==e?this.itemArray[n].quantity=e:this.itemArray.splice(n,1))}}}),Object.defineProperty(t.prototype,"toJSON",{enumerable:!1,configurable:!0,writable:!0,value:function(){return this.itemArray}}),t}(),K=(0,s.Q_)("CartStore",{state:function(){return{cart:new F}},getters:{count:function(){return this.cart.numberOfItems}},actions:{clearCart:function(){this.cart.clear()},addToCart:function(t){this.cart.addBook(t)},updateBookQuantity:function(t,e){this.cart.update(t,e)}}}),N={class:"book-box"},Q=["src","alt"],Y={class:"book-info"},E={class:"title-author"},J={class:"book-title"},G={class:"book-author"},M={class:"price-addToCart-button"},R={class:"book-price"},V=(0,r.aZ)({__name:"CategoryBookListItem",props:{book:null},setup:function(t){var e=K(),o=function(t){var e=t.title.toLowerCase();return e=e.replace(/:/g," "),e=e.replace(/\s+/g,"-"),e=e.replace(/'/g,""),"".concat(e,".jpeg")};return function(u,c){var s=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("li",N,[(0,r._)("div",{class:(0,i.C_)(["book-img",t.book.isPublic?"read-now-available":null])},[(0,r._)("img",{src:n(281)("./"+o(t.book)),alt:t.book.title},null,8,Q),t.book.isPublic?((0,r.wg)(),(0,r.j4)(s,{key:0,to:"#"},{default:(0,r.w5)((function(){return[(0,r.Uk)("Read now")]})),_:1})):(0,r.kq)("",!0)],2),(0,r._)("div",Y,[(0,r._)("div",E,[(0,r._)("div",J,(0,i.zw)(t.book.title),1),(0,r._)("div",G,(0,i.zw)(t.book.author),1)]),(0,r._)("div",M,[(0,r._)("div",R,"$"+(0,i.zw)((t.book.price/100).toFixed(2)),1),(0,r._)("button",{class:"button add-to-cart-button",onClick:c[0]||(c[0]=function(n){return(0,a.SU)(e).addToCart(t.book)})}," Add to Cart ")])])])}}});const $=(0,v.Z)(V,[["__scopeId","data-v-3b55ba84"]]);var X=$,tt={id:"category-book-list"},et={id:"book-boxes"},nt=(0,r.aZ)({__name:"CategoryBookList",setup:function(t){var e=H();return function(t,n){return(0,r.wg)(),(0,r.iD)("section",tt,[(0,r._)("ul",et,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)((0,a.SU)(e).bookList,(function(t){return(0,r.wg)(),(0,r.j4)(X,{key:t.bookId,book:t},null,8,["book"])})),128))])])}}});const ot=(0,v.Z)(nt,[["__scopeId","data-v-664ecd40"]]);var rt=ot,it=(0,r.aZ)({__name:"CategoryView",setup:function(t){var e=(0,w.yj)(),n=H();return(0,r.YP)((function(){return e.params.name}),(function(t){n.fetchBooks(t)}),{immediate:!0}),function(t,e){return(0,r.wg)(),(0,r.iD)("div",null,[(0,r.Wm)(q),(0,r.Wm)(rt)])}}});const at=it;var ut=at,ct=[{path:"/",name:"home-view",component:S},{path:"/category/:name",name:"category-view",component:ut,props:!0}],st=(0,w.p7)({history:(0,w.PO)("/LayneBookstoreState/"),routes:ct}),pt=st,lt=function(t){return(0,r.dD)("data-v-25a9b556"),t=t(),(0,r.Cn)(),t},ft={class:"container"},gt={id:"bookstore-logo-section"},dt=lt((function(){return(0,r._)("img",{src:u,alt:"Pepe's Bookstore Logo"},null,-1)})),ht=lt((function(){return(0,r._)("h1",{id:"header-text-logo"},"Pepe's Bookstore",-1)})),mt={id:"search-bar-section"},bt=["onSubmit"],vt=lt((function(){return(0,r._)("input",{type:"text",placeholder:"Find a book"},null,-1)})),yt=lt((function(){return(0,r._)("input",{type:"submit",value:" "},null,-1)})),jt=[vt,yt],wt={id:"header-category-section"},kt={id:"header-cart-section"},_t=lt((function(){return(0,r._)("i",{id:"cart-icon",class:"fa-solid fa-cart-shopping"},null,-1)})),xt=(0,r.aZ)({__name:"AppHeader",setup:function(t){var e=K(),n=function(){pt.push("/category/Adventure")};return function(t,u){var c=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("header",ft,[(0,r._)("section",gt,[(0,r.Wm)(c,{to:"/",id:"header-logo-link"},{default:(0,r.w5)((function(){return[dt]})),_:1}),(0,r.Wm)(c,{to:"/",id:"header-logo-text-link"},{default:(0,r.w5)((function(){return[ht]})),_:1})]),(0,r._)("section",mt,[(0,r._)("form",{onSubmit:(0,o.iM)(n,["prevent"])},jt,40,bt)]),(0,r._)("section",wt,[(0,r.Wm)(j)]),(0,r._)("section",kt,[(0,r.Wm)(c,{to:"#",class:"button cart-link"},{default:(0,r.w5)((function(){return[_t,(0,r._)("p",null,(0,i.zw)((0,a.SU)(e).count),1)]})),_:1})]),(0,r.Wm)(c,{to:"#",class:"button sign-in-link"},{default:(0,r.w5)((function(){return[(0,r.Uk)("Login")]})),_:1})])}}});const Ot=(0,v.Z)(xt,[["__scopeId","data-v-25a9b556"]]);var Ct=Ot;const Dt=t=>((0,r.dD)("data-v-91e96ed0"),t=t(),(0,r.Cn)(),t),Pt={class:"container"},Wt={id:"links"},At=Dt((()=>(0,r._)("span",null,"|",-1))),It=Dt((()=>(0,r._)("span",null,"|",-1))),Lt={id:"social-media-icons"},St=Dt((()=>(0,r._)("i",{class:"fa-brands fa-facebook"},null,-1))),Ut=Dt((()=>(0,r._)("i",{class:"fa-brands fa-instagram"},null,-1))),Bt=Dt((()=>(0,r._)("i",{class:"fa-brands fa-twitter"},null,-1))),Zt=Dt((()=>(0,r._)("span",null,"Copyright © 2022 Pepe's Bookstore",-1)));function zt(t,e){const n=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("footer",Pt,[(0,r._)("section",Wt,[(0,r.Wm)(n,{to:"/"},{default:(0,r.w5)((()=>[(0,r.Uk)("About")])),_:1}),At,(0,r.Wm)(n,{to:"/"},{default:(0,r.w5)((()=>[(0,r.Uk)("Contact")])),_:1}),It,(0,r.Wm)(n,{to:"/"},{default:(0,r.w5)((()=>[(0,r.Uk)("Directions")])),_:1})]),(0,r._)("section",Lt,[(0,r.Wm)(n,{to:"/",class:"button"},{default:(0,r.w5)((()=>[St])),_:1}),(0,r.Wm)(n,{to:"/",class:"button"},{default:(0,r.w5)((()=>[Ut])),_:1}),(0,r.Wm)(n,{to:"/",class:"button"},{default:(0,r.w5)((()=>[Bt])),_:1})]),Zt])}const qt={},Ht=(0,v.Z)(qt,[["render",zt],["__scopeId","data-v-91e96ed0"]]);var Tt=Ht,Ft={id:"app"},Kt=(0,r.aZ)({__name:"App",setup:function(t){var e=f();return e.fetchCategories(),function(t,e){var n=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)("div",Ft,[(0,r.Wm)(Ct),(0,r.Wm)(n),(0,r.Wm)(Tt)])}}});const Nt=Kt;var Qt=Nt,Yt=(0,s.WB)(),Et=(0,o.ri)(Qt);Et.use(pt),Et.use(Yt),Et.mount("#app")},281:function(t,e,n){var o={"./battle-royale.jpeg":544,"./detention-the-nightmare-returns.jpeg":170,"./dirt-town.jpeg":435,"./every-heart-a-doorway.jpeg":815,"./gardens-of-the-moon.jpeg":111,"./gideon-the-ninth.jpeg":16,"./good-rich-people.jpeg":630,"./i-kissed-shara-wheeler.jpeg":350,"./it.jpeg":445,"./journey-to-the-center-of-the-earth.jpeg":338,"./lizzie-&-dante-a-novel.jpeg":214,"./one-missed-call.jpg":105,"./percy-jackson-&-the-olympians-the-lightning-thief.jpeg":582,"./ring.jpeg":447,"./shadow-storm-(a-shadow-riders-novel).jpeg":218,"./the-count-of-monte-cristo.jpeg":765,"./the-hating-game.jpeg":629,"./the-hunger-games.jpeg":760,"./the-layover.jpeg":785,"./the-lies-of-locke-lamora.jpeg":949,"./the-lion,-the-witch-and-the-wardrobe.jpeg":165,"./the-maid-a-novel.jpeg":343,"./the-mist.jpeg":178,"./the-murders-at-fleat-house.jpeg":131,"./the-rising-tide.jpeg":612,"./the-road-trip.jpeg":906,"./the-shinning.jpeg":60,"./the-silent-patient.jpeg":154,"./the-sleeping-and-the-dead.jpeg":850,"./the-space-between-worlds.jpeg":365,"./the-three-musketeers.jpeg":996,"./treasure-island.jpeg":535,"./verity.jpeg":375,"./violeta.jpeg":403,"./vision-in-white.jpeg":280};function r(t){var e=i(t);return n(e)}function i(t){if(!n.o(o,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return o[t]}r.keys=function(){return Object.keys(o)},r.resolve=i,t.exports=r,r.id=281},544:function(t,e,n){"use strict";t.exports=n.p+"img/battle-royale.4b556b3f.jpeg"},170:function(t,e,n){"use strict";t.exports=n.p+"img/detention-the-nightmare-returns.197c16a0.jpeg"},435:function(t,e,n){"use strict";t.exports=n.p+"img/dirt-town.24c5ecf2.jpeg"},815:function(t,e,n){"use strict";t.exports=n.p+"img/every-heart-a-doorway.82120d78.jpeg"},111:function(t,e,n){"use strict";t.exports=n.p+"img/gardens-of-the-moon.2d67d16a.jpeg"},16:function(t,e,n){"use strict";t.exports=n.p+"img/gideon-the-ninth.c2a4ed77.jpeg"},630:function(t,e,n){"use strict";t.exports=n.p+"img/good-rich-people.6e76537b.jpeg"},350:function(t,e,n){"use strict";t.exports=n.p+"img/i-kissed-shara-wheeler.7d969e01.jpeg"},445:function(t,e,n){"use strict";t.exports=n.p+"img/it.98640529.jpeg"},338:function(t,e,n){"use strict";t.exports=n.p+"img/journey-to-the-center-of-the-earth.e5f9b4c4.jpeg"},214:function(t,e,n){"use strict";t.exports=n.p+"img/lizzie-&-dante-a-novel.efde5698.jpeg"},105:function(t,e,n){"use strict";t.exports=n.p+"img/one-missed-call.8f23ab0b.jpg"},582:function(t,e,n){"use strict";t.exports=n.p+"img/percy-jackson-&-the-olympians-the-lightning-thief.7fbe0991.jpeg"},447:function(t,e,n){"use strict";t.exports=n.p+"img/ring.3f8e9b39.jpeg"},218:function(t,e,n){"use strict";t.exports=n.p+"img/shadow-storm-(a-shadow-riders-novel).d316b078.jpeg"},765:function(t,e,n){"use strict";t.exports=n.p+"img/the-count-of-monte-cristo.00305277.jpeg"},629:function(t,e,n){"use strict";t.exports=n.p+"img/the-hating-game.ab31ede3.jpeg"},760:function(t,e,n){"use strict";t.exports=n.p+"img/the-hunger-games.7a154ac4.jpeg"},785:function(t,e,n){"use strict";t.exports=n.p+"img/the-layover.466e3238.jpeg"},949:function(t,e,n){"use strict";t.exports=n.p+"img/the-lies-of-locke-lamora.341e51c9.jpeg"},165:function(t,e,n){"use strict";t.exports=n.p+"img/the-lion,-the-witch-and-the-wardrobe.23715387.jpeg"},343:function(t,e,n){"use strict";t.exports=n.p+"img/the-maid-a-novel.1049bd28.jpeg"},178:function(t,e,n){"use strict";t.exports=n.p+"img/the-mist.7ce17b6c.jpeg"},131:function(t,e,n){"use strict";t.exports=n.p+"img/the-murders-at-fleat-house.eb4ccc55.jpeg"},612:function(t,e,n){"use strict";t.exports=n.p+"img/the-rising-tide.dace2900.jpeg"},906:function(t,e,n){"use strict";t.exports=n.p+"img/the-road-trip.2f2a0edb.jpeg"},60:function(t,e,n){"use strict";t.exports=n.p+"img/the-shinning.252012e5.jpeg"},154:function(t,e,n){"use strict";t.exports=n.p+"img/the-silent-patient.92767164.jpeg"},850:function(t,e,n){"use strict";t.exports=n.p+"img/the-sleeping-and-the-dead.724580fb.jpeg"},365:function(t,e,n){"use strict";t.exports=n.p+"img/the-space-between-worlds.a83a94dd.jpeg"},996:function(t,e,n){"use strict";t.exports=n.p+"img/the-three-musketeers.4c3c60b8.jpeg"},535:function(t,e,n){"use strict";t.exports=n.p+"img/treasure-island.b6c5ff40.jpeg"},375:function(t,e,n){"use strict";t.exports=n.p+"img/verity.80ece1ba.jpeg"},403:function(t,e,n){"use strict";t.exports=n.p+"img/violeta.65483f63.jpeg"},280:function(t,e,n){"use strict";t.exports=n.p+"img/vision-in-white.4bbc04df.jpeg"}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={exports:{}};return t[o](i,i.exports,n),i.exports}n.m=t,function(){var t=[];n.O=function(e,o,r,i){if(!o){var a=1/0;for(p=0;p<t.length;p++){o=t[p][0],r=t[p][1],i=t[p][2];for(var u=!0,c=0;c<o.length;c++)(!1&i||a>=i)&&Object.keys(n.O).every((function(t){return n.O[t](o[c])}))?o.splice(c--,1):(u=!1,i<a&&(a=i));if(u){t.splice(p--,1);var s=r();void 0!==s&&(e=s)}}return e}i=i||0;for(var p=t.length;p>0&&t[p-1][2]>i;p--)t[p]=t[p-1];t[p]=[o,r,i]}}(),function(){n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.p="/LayneBookstoreState/"}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,o){var r,i,a=o[0],u=o[1],c=o[2],s=0;if(a.some((function(e){return 0!==t[e]}))){for(r in u)n.o(u,r)&&(n.m[r]=u[r]);if(c)var p=c(n)}for(e&&e(o);s<a.length;s++)i=a[s],n.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return n.O(p)},o=self["webpackChunkclient"]=self["webpackChunkclient"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(577)}));o=n.O(o)})();
//# sourceMappingURL=app.333e0e02.js.map