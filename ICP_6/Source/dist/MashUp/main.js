(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _search_recipe_search_recipe_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search-recipe/search-recipe.component */ "./src/app/search-recipe/search-recipe.component.ts");

// @ts-ignore

// @ts-ignore




var appRoutes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'search-recipe', component: _search_recipe_search_recipe_component__WEBPACK_IMPORTED_MODULE_5__["SearchRecipeComponent"] },
    { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_4__["ContactComponent"] }
];
// @ts-ignore
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".image {\r\n  height: 100vh;\r\n  background-size: cover;\r\n  width: 100%;\r\n  background-image: url('Img.jpg');\r\n  background-position: 50% 50%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixpQ0FBc0M7RUFDdEMsNkJBQTZCO0NBQzlCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1hZ2Uge1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJob21lL0ltZy5qcGdcIik7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"image\">\r\n<app-header></app-header>\r\n\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n  </div>\r\n</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Recipe Finder';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _search_recipe_search_recipe_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./search-recipe/search-recipe.component */ "./src/app/search-recipe/search-recipe.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _search_recipe_search_recipe_component__WEBPACK_IMPORTED_MODULE_7__["SearchRecipeComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_9__["ContactComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/*!***********************************************!*\
  !*** ./src/app/contact/contact.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-control {\r\n  border-radius: 5px;\r\n  border-color: blue;\r\n  align-items: center;\r\n  padding: 5px;\r\n  margin-top: 5px;\r\n  margin: 5px;\r\n}\r\n.form-group h2 {\r\n  text-align: center;\r\n}\r\n.form-button {\r\n  border-radius: 5px;\r\n  border-color: blue;\r\n  width: 18%;\r\n  padding: 10px 20px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-color: #4caf50;\r\n  color: white;\r\n  font-size: 16px;\r\n  margin: 5px 2px;\r\n  cursor: pointer;\r\n  margin-left: 40%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLFlBQVk7Q0FDYjtBQUNEO0VBQ0UsbUJBQW1CO0NBQ3BCO0FBRUQ7RUFDRSxtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsY0FBYztFQUNkLHdCQUF3QjtFQUN4QixvQkFBb0I7RUFDcEIsMEJBQTBCO0VBQzFCLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixpQkFBaUI7Q0FDbEIiLCJmaWxlIjoic3JjL2FwcC9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWNvbnRyb2wge1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBib3JkZXItY29sb3I6IGJsdWU7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIG1hcmdpbjogNXB4O1xyXG59XHJcbi5mb3JtLWdyb3VwIGgyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5mb3JtLWJ1dHRvbiB7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJvcmRlci1jb2xvcjogYmx1ZTtcclxuICB3aWR0aDogMTglO1xyXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRjYWY1MDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIG1hcmdpbjogNXB4IDJweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgbWFyZ2luLWxlZnQ6IDQwJTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<form>\r\n  <div class=\"form-group\">\r\n    <h2><b>Contact Here!!....</b></h2>\r\n    <div class=\"form-group col-lg-6 col-lg-offset-3 input-group\">\r\n      <input #recipe class=\"form-control\" placeholder=\"Enter your name\" type=\"text\">\r\n      <br>\r\n      <input #place class=\"form-control\" placeholder=\"Enter your email\" type=\"text\">\r\n      <br>\r\n      <input #place class=\"form-control\" placeholder=\"Type you question here\" type=\"textarea\">\r\n    </div>\r\n    \r\n    <button class=\"form-button \" type=\"button\">Go</button>\r\n  </div>\r\n</form>"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

// @ts-ignore

// @ts-ignore
var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/contact/contact.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\r\n<nav class=\"navbar navbar-default background\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"navbar-header\">\r\n      <a routerLink=\"/\" class=\"navbar-brand background\">Find your Recipe!!!</a>\r\n    </div>\r\n\r\n    <div class=\"collapse navbar-collapse tx\">\r\n      <ul class=\"nav navbar-nav\">\r\n        <li><a routerLink=\"/home\">Home</a></li>\r\n        <li><a routerLink=\"/search-recipe\">Search Recipe</a></li>\r\n        <li><a routerLink=\"/contact\">Contact Us</a></li>\r\n      </ul>\r\n\r\n    </div>\r\n  </div>\r\n</nav>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [".background {background: crimson; color: black;font-size:20px}", "li a { color: black;font-size:17px}", "ul.nav a:hover { color: #fffccc ;font-size:17px }"]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".parent-container {\r\n  position: relative;\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n.child-container {\r\n  color: rgb(200, 255, 0);\r\n  text-align: center;\r\n  position: center;\r\n}\r\n.desc {\r\n  font-family: Georgia;\r\n  font-size: 20px;\r\n}\r\n.form-group label {\r\n  color: antiquewhite;\r\n  font-size: 15px;\r\n}\r\n.form-control {\r\n  border: 1px solid rgb(200, 255, 0);\r\n}\r\n.btn {\r\n  border-radius: 2px;\r\n  border-color: #c8ff00;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLFlBQVk7Q0FDYjtBQUNEO0VBQ0Usd0JBQXdCO0VBQ3hCLG1CQUFtQjtFQUNuQixpQkFBaUI7Q0FDbEI7QUFFRDtFQUNFLHFCQUFxQjtFQUNyQixnQkFBZ0I7Q0FDakI7QUFDRDtFQUNFLG9CQUFvQjtFQUNwQixnQkFBZ0I7Q0FDakI7QUFDRDtFQUNFLG1DQUFtQztDQUNwQztBQUNEO0VBQ0UsbUJBQW1CO0VBQ25CLHNCQUFzQjtDQUN2QiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhcmVudC1jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmNoaWxkLWNvbnRhaW5lciB7XHJcbiAgY29sb3I6IHJnYigyMDAsIDI1NSwgMCk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5kZXNjIHtcclxuICBmb250LWZhbWlseTogR2VvcmdpYTtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuLmZvcm0tZ3JvdXAgbGFiZWwge1xyXG4gIGNvbG9yOiBhbnRpcXVld2hpdGU7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcbi5mb3JtLWNvbnRyb2wge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMDAsIDI1NSwgMCk7XHJcbn1cclxuLmJ0biB7XHJcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIGJvcmRlci1jb2xvcjogI2M4ZmYwMDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"parent-container\">\r\n  <div class=\"child-container\">\r\n    <h2>Hello, Welcome to <b>Find Your Recipe!!!\r\n    </b></h2>\r\n    <span class=\"desc\">Find Your Recipe is a Mashup Web Application which is built using <i> Foursquare & Edamam's Recipe Search API </i> . This application find Recipe and Place to find that Food.</span><br><br><br>\r\n    <form>\r\n      <div class=\"form-group\">\r\n        <label>Subscribe to our news letter:</label><br><br>\r\n        <div class=\"form-group col-lg-4 col-lg-offset-4\">\r\n          <input type=\"text\" class=\"form-control\" placeholder=\"name@example.com\"/>\r\n        </div>\r\n        <br>\r\n        <button class=\"btn btn primary col-lg-2 col-lg-offset-5\">Submit</button>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/search-recipe/search-recipe.component.css":
/*!***********************************************************!*\
  !*** ./src/app/search-recipe/search-recipe.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".parent-container {\r\n  position: relative;\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n.child-container {\r\n  color: #c8ff00;\r\n  text-align: center;\r\n  position: center;\r\n  font-size: 10px;\r\n  font-weight: bold;\r\n}\r\n.form-control {\r\n  border-radius: 5px;\r\n  border-color: blue;\r\n  align-items: center;\r\n  padding: 5px;\r\n  margin-top: 5px;\r\n  margin: 5px;\r\n}\r\n.form-button {\r\n  border-radius: 5px;\r\n  border-color: blue;\r\n  width: 20%;\r\n  border: none;\r\n  padding: 10px 20px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  background-color: #4caf50;\r\n  color: whitesmoke;\r\n  font-size: 16px;\r\n  margin: 4px 2px;\r\n  cursor: pointer;\r\n}\r\n.desc {\r\n  font-family: Georgia;\r\n  font-size: 17px;\r\n}\r\n.thumbnail {\r\n  box-shadow: 0 4px 8px 0 rgb(0, 140, 255);\r\n  transition: 0.3s;\r\n  min-width: 40%;\r\n  border-radius: 5px;\r\n}\r\n.thumbnail-description {\r\n  min-height: 40px;\r\n}\r\n.thumbnail:hover {\r\n  cursor: pointer;\r\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 1);\r\n}\r\n.panel {\r\n  border-color: darkblue;\r\n  border-radius: 5px;\r\n  margin: 10px blue;\r\n}\r\n.panel-body {\r\n  height: 55vh;\r\n  overflow-x: hidden;\r\n  overflow-y: scroll;\r\n}\r\n.recipe-details,\r\n.venue-details {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  padding-bottom: 20px;\r\n\r\n  border-bottom: 1px solid #ccc;\r\n}\r\n.venue-details {\r\n  border: none;\r\n  justify-content: space-between;\r\n}\r\n.recipe-info,\r\n.venue-info {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n.recipe-details .image {\r\n  margin-right: 10px;\r\n  border-radius: 10px;\r\n  width: 70px;\r\n  height: 70px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoLXJlY2lwZS9zZWFyY2gtcmVjaXBlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLFlBQVk7Q0FDYjtBQUNEO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtDQUNuQjtBQUNEO0VBQ0UsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixZQUFZO0NBQ2I7QUFDRDtFQUNFLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixzQkFBc0I7RUFDdEIsMEJBQTBCO0VBQzFCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtDQUNqQjtBQUNEO0VBQ0UscUJBQXFCO0VBQ3JCLGdCQUFnQjtDQUNqQjtBQUVEO0VBQ0UseUNBQXlDO0VBQ3pDLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsbUJBQW1CO0NBQ3BCO0FBRUQ7RUFDRSxpQkFBaUI7Q0FDbEI7QUFFRDtFQUNFLGdCQUFnQjtFQUNoQiwwQ0FBMEM7Q0FDM0M7QUFFRDtFQUNFLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsa0JBQWtCO0NBQ25CO0FBRUQ7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1CQUFtQjtDQUNwQjtBQUVEOztFQUVFLGNBQWM7RUFDZCxvQkFBb0I7RUFDcEIsb0JBQW9CO0VBQ3BCLHFCQUFxQjs7RUFFckIsOEJBQThCO0NBQy9CO0FBRUQ7RUFDRSxhQUFhO0VBQ2IsK0JBQStCO0NBQ2hDO0FBRUQ7O0VBRUUsY0FBYztFQUNkLHVCQUF1QjtDQUN4QjtBQUVEO0VBQ0UsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQixZQUFZO0VBQ1osYUFBYTtDQUNkIiwiZmlsZSI6InNyYy9hcHAvc2VhcmNoLXJlY2lwZS9zZWFyY2gtcmVjaXBlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFyZW50LWNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4uY2hpbGQtY29udGFpbmVyIHtcclxuICBjb2xvcjogI2M4ZmYwMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLmZvcm0tY29udHJvbCB7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJvcmRlci1jb2xvcjogYmx1ZTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbn1cclxuLmZvcm0tYnV0dG9uIHtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYm9yZGVyLWNvbG9yOiBibHVlO1xyXG4gIHdpZHRoOiAyMCU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGNhZjUwO1xyXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBtYXJnaW46IDRweCAycHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5kZXNjIHtcclxuICBmb250LWZhbWlseTogR2VvcmdpYTtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbn1cclxuXHJcbi50aHVtYm5haWwge1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYigwLCAxNDAsIDI1NSk7XHJcbiAgdHJhbnNpdGlvbjogMC4zcztcclxuICBtaW4td2lkdGg6IDQwJTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi50aHVtYm5haWwtZGVzY3JpcHRpb24ge1xyXG4gIG1pbi1oZWlnaHQ6IDQwcHg7XHJcbn1cclxuXHJcbi50aHVtYm5haWw6aG92ZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3gtc2hhZG93OiAwIDhweCAxNnB4IDAgcmdiYSgwLCAwLCAwLCAxKTtcclxufVxyXG5cclxuLnBhbmVsIHtcclxuICBib3JkZXItY29sb3I6IGRhcmtibHVlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBtYXJnaW46IDEwcHggYmx1ZTtcclxufVxyXG5cclxuLnBhbmVsLWJvZHkge1xyXG4gIGhlaWdodDogNTV2aDtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG59XHJcblxyXG4ucmVjaXBlLWRldGFpbHMsXHJcbi52ZW51ZS1kZXRhaWxzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuXHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XHJcbn1cclxuXHJcbi52ZW51ZS1kZXRhaWxzIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4ucmVjaXBlLWluZm8sXHJcbi52ZW51ZS1pbmZvIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5yZWNpcGUtZGV0YWlscyAuaW1hZ2Uge1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIHdpZHRoOiA3MHB4O1xyXG4gIGhlaWdodDogNzBweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/search-recipe/search-recipe.component.html":
/*!************************************************************!*\
  !*** ./src/app/search-recipe/search-recipe.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"parent-container\">\r\n  <div class=\"child-container\">\r\n    <h2><b>Recipe-Search and Restaurant-Finder!!\r\n    </b></h2>\r\n    <form>\r\n      <div class=\"form-group\">\r\n        <div class=\"form-group col-lg-6 col-lg-offset-3 input-group\">\r\n          <input #recipe class=\"form-control\" placeholder=\"Enter name of the recipe\" type=\"text\">\r\n          <br>\r\n          <input #place class=\"form-control\" placeholder=\"Enter the location to find\" type=\"text\">\r\n\r\n        </div>\r\n        <br>\r\n        <button (click)=\"getVenues()\" class=\"form-button \" type=\"button\">Go</button>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div><br><br>\r\n<!--checking the list length and showing panels based on that-->\r\n<div class=\"container\"  *ngIf=\"venueList.length >0 && recipeList.length > 0\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-6\">\r\n      <div class=\"panel panel-default col-6\">\r\n        <div class=\"panel-heading\"><b>Recipe-Procedure</b></div>\r\n        <div class=\"panel-body\">\r\n          <div *ngFor=\"let recipe of recipeList\" class=\"list-group-item recipe-info clearfix\">\r\n            <div class=\"recipe-details\">\r\n              <img src=\"{{recipe.image}}\" class=\"image\"/>\r\n              <!--viewing recipe label, recipe url and number of calories-->\r\n              <div class=\"header\">\r\n                <h4 class=\"list-group-item-heading\">{{ recipe.label }}</h4>\r\n                <a href=\"{{recipe.url}}\" class=\"list-group-item-text\">{{ recipe.url }}</a>\r\n                <p class=\"list-group-item-heading\"><strong> Calories: </strong> {{ recipe.calories }}</p>\r\n              </div>\r\n            </div>\r\n            <ul class=\"ingredients-list\">\r\n              <h4>Ingredients:</h4>\r\n              <li *ngFor=\"let ingredientLine of recipe.ingredientLines\">{{ingredientLine}}</li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-lg-6\">\r\n      <div class=\"panel panel-default col-6\">\r\n        <div class=\"panel-heading\"><b>NearBy Locations</b></div>\r\n        <div class=\"panel-body\">\r\n\r\n          <div *ngFor=\"let venue of venueList\" class=\"list-group-item venue-info clearfix\">\r\n            <div class=\"venue-details\">\r\n              <div class=\"header\">\r\n                <h4 class=\"list-group-item-heading\"><strong>{{ venue.name }}</strong></h4>\r\n              </div>\r\n              <div class=\"map-icon\">\r\n                <a href=\"http://maps.google.com/maps?saddr={{currentLat}},{{currentLong}}&daddr={{venue.location.formattedAddress[0]}},{{venue.location.formattedAddress[1]}},{{venue.location.formattedAddress[2]}}\">\r\n                  <img src=\"../../assets/google.png\" style=\"width: 30px; height: 30px;\"></a>\r\n              </div>\r\n            </div>\r\n            <!--viewing street, city , country from address-->\r\n            <div class=\"address\">\r\n              <p><strong>Street : </strong> {{venue.location.formattedAddress[0]}}</p>\r\n              <p><strong>City : </strong>{{venue.location.formattedAddress[1]}}</p>\r\n              <p><strong>Country : </strong>{{venue.location.formattedAddress[2]}}</p>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/search-recipe/search-recipe.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/search-recipe/search-recipe.component.ts ***!
  \**********************************************************/
/*! exports provided: SearchRecipeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchRecipeComponent", function() { return SearchRecipeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _search_recipe_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search-recipe.service */ "./src/app/search-recipe/search-recipe.service.ts");



var SearchRecipeComponent = /** @class */ (function () {
    function SearchRecipeComponent(searchService) {
        this.searchService = searchService;
        this.venueList = [];
        this.recipeList = [];
    }
    SearchRecipeComponent.prototype.ngOnInit = function () {
        var _this = this;
        window.navigator.geolocation.getCurrentPosition(function (position) {
            _this.geolocationPosition = position;
            _this.currentLat = position.coords.latitude;
            _this.currentLong = position.coords.longitude;
        });
    };
    SearchRecipeComponent.prototype.getVenues = function () {
        var _this = this;
        this.recipeValue = this.recipes.nativeElement.value;
        this.placeValue = this.places.nativeElement.value;
        if (this.recipeValue !== null) {
            /**
             * Write code to get recipe
             */
            this.searchService.getRecipes(this.recipeValue).subscribe(function (data) {
                _this.recipeList = data.map(function (e) { return e.recipe; });
            });
        }
        if (this.placeValue !== null && this.placeValue !== '' && this.recipeValue !== null && this.recipeValue !== '') {
            /**
             * Write code to get place
             */
            //using map storing data by paasing place and recipe to function and obtained results are stored in venuelist
            this.searchService.getVenueByItem(this.placeValue, this.recipeValue).subscribe(function (data) {
                _this.venueList = data.map(function (e) { return e.venue; });
            });
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('recipe'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], SearchRecipeComponent.prototype, "recipes", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('place'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], SearchRecipeComponent.prototype, "places", void 0);
    SearchRecipeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search-recipe',
            template: __webpack_require__(/*! ./search-recipe.component.html */ "./src/app/search-recipe/search-recipe.component.html"),
            styles: [__webpack_require__(/*! ./search-recipe.component.css */ "./src/app/search-recipe/search-recipe.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_search_recipe_service__WEBPACK_IMPORTED_MODULE_2__["SearchRecipeService"]])
    ], SearchRecipeComponent);
    return SearchRecipeComponent;
}());



/***/ }),

/***/ "./src/app/search-recipe/search-recipe.service.ts":
/*!********************************************************!*\
  !*** ./src/app/search-recipe/search-recipe.service.ts ***!
  \********************************************************/
/*! exports provided: SearchRecipeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchRecipeService", function() { return SearchRecipeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");

// @ts-ignore


// @ts-ignore

// @ts-ignore

var SearchRecipeService = /** @class */ (function () {
    function SearchRecipeService(http) {
        this.http = http;
        //giving api url with our cliend id and client secret keys and adding endpoints
        this.FOURSQUARE_API_URL = "https://api.foursquare.com/v2/venues/explore?client_id=" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].CLIENT_ID + "&client_secret=" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].CLIENT_SECRET + "&v=20180323&near=";
    }
    SearchRecipeService.prototype.getVenueByItem = function (placeName, recipeName) {
        var url = this.FOURSQUARE_API_URL + placeName + ("&query=" + recipeName);
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (venues) {
            return venues['response'].groups[0].items;
        }));
    };
    SearchRecipeService.prototype.getRecipes = function (recipeName) {
        //giving api url with our app id and app key along with giving recipe name and adding endpoints and getting data from that
        var EDAMAM_API_URL = "https://api.edamam.com/search?q=" + recipeName + "&app_id=" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].APP_ID + "&app_key=" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].APP_KEY;
        return this.http.get(EDAMAM_API_URL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (e) { return e['hits']; }));
    };
    SearchRecipeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], SearchRecipeService);
    return SearchRecipeService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    CLIENT_ID: 'UXOGRHPHHGTYOODTSGRX5BGGZTEWXV1XAB3YYK1WE1TUELMS',
    CLIENT_SECRET: 'WLW2PYZZMXYOU4XIJ5VD0KVUJ3NMHNDH3JHHG0O32STMW4QU',
    APP_ID: "d6d6ca24",
    APP_KEY: "20b99cc81e59008c76ce08876d9b7270"
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\thota\WebstormProjects\ICP6-mounikathotakura\Source\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map