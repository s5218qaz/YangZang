(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/contact/contact.component */ "./src/app/pages/contact/contact.component.ts");
/* harmony import */ var _pages_Portfolio_Portfolio_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/Portfolio/Portfolio.component */ "./src/app/pages/Portfolio/Portfolio.component.ts");
/* harmony import */ var _pages_product_product_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/product/product.component */ "./src/app/pages/product/product.component.ts");









const routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    { path: 'home', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'contact', component: _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_4__["ContactComponent"] },
    { path: 'product', component: _pages_product_product_component__WEBPACK_IMPORTED_MODULE_6__["ProductComponent"] },
    { path: 'portfolio', component: _pages_Portfolio_Portfolio_component__WEBPACK_IMPORTED_MODULE_5__["PortfolioComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
        ], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
                ],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _layout_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout/nav-bar/nav-bar.component */ "./src/app/layout/nav-bar/nav-bar.component.ts");
/* harmony import */ var _components_go_to_top_btn_go_to_top_btn_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/go-to-top-btn/go-to-top-btn.component */ "./src/app/components/go-to-top-btn/go-to-top-btn.component.ts");
/* harmony import */ var _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout/footer/footer.component */ "./src/app/layout/footer/footer.component.ts");






class AppComponent {
    constructor(router) {
        this.router = router;
        this.title = 'YangZang';
    }
    ngOnInit() {
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-go-to-top-btn");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-footer");
    } }, directives: [_layout_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_2__["NavBarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _components_go_to_top_btn_go_to_top_btn_component__WEBPACK_IMPORTED_MODULE_3__["GoToTopBtnComponent"], _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout/footer/footer.component */ "./src/app/layout/footer/footer.component.ts");
/* harmony import */ var _blocks_product_section_product_section_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blocks/product-section/product-section.component */ "./src/app/blocks/product-section/product-section.component.ts");
/* harmony import */ var _blocks_Portfolio_section_Portfolio_section_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./blocks/Portfolio-section/Portfolio-section.component */ "./src/app/blocks/Portfolio-section/Portfolio-section.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _layout_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layout/nav-bar/nav-bar.component */ "./src/app/layout/nav-bar/nav-bar.component.ts");
/* harmony import */ var _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/contact/contact.component */ "./src/app/pages/contact/contact.component.ts");
/* harmony import */ var _pages_product_product_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/product/product.component */ "./src/app/pages/product/product.component.ts");
/* harmony import */ var _pages_Portfolio_Portfolio_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/Portfolio/Portfolio.component */ "./src/app/pages/Portfolio/Portfolio.component.ts");
/* harmony import */ var _blocks_introduce_section_introduce_section_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./blocks/introduce-section/introduce-section.component */ "./src/app/blocks/introduce-section/introduce-section.component.ts");
/* harmony import */ var _components_go_to_top_btn_go_to_top_btn_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/go-to-top-btn/go-to-top-btn.component */ "./src/app/components/go-to-top-btn/go-to-top-btn.component.ts");
/* harmony import */ var _layout_home_page_header_home_page_header_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./layout/home-page-header/home-page-header.component */ "./src/app/layout/home-page-header/home-page-header.component.ts");
















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"],
        _blocks_product_section_product_section_component__WEBPACK_IMPORTED_MODULE_4__["ProductSectionComponent"],
        _blocks_Portfolio_section_Portfolio_section_component__WEBPACK_IMPORTED_MODULE_5__["PortfolioSectionComponent"],
        _pages_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
        _layout_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_8__["NavBarComponent"],
        _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_9__["ContactComponent"],
        _pages_product_product_component__WEBPACK_IMPORTED_MODULE_10__["ProductComponent"],
        _pages_Portfolio_Portfolio_component__WEBPACK_IMPORTED_MODULE_11__["PortfolioComponent"],
        _blocks_introduce_section_introduce_section_component__WEBPACK_IMPORTED_MODULE_12__["IntroduceSectionComponent"],
        _components_go_to_top_btn_go_to_top_btn_component__WEBPACK_IMPORTED_MODULE_13__["GoToTopBtnComponent"],
        _layout_home_page_header_home_page_header_component__WEBPACK_IMPORTED_MODULE_14__["HomePageHeaderComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                    _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"],
                    _blocks_product_section_product_section_component__WEBPACK_IMPORTED_MODULE_4__["ProductSectionComponent"],
                    _blocks_Portfolio_section_Portfolio_section_component__WEBPACK_IMPORTED_MODULE_5__["PortfolioSectionComponent"],
                    _pages_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                    _layout_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_8__["NavBarComponent"],
                    _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_9__["ContactComponent"],
                    _pages_product_product_component__WEBPACK_IMPORTED_MODULE_10__["ProductComponent"],
                    _pages_Portfolio_Portfolio_component__WEBPACK_IMPORTED_MODULE_11__["PortfolioComponent"],
                    _blocks_introduce_section_introduce_section_component__WEBPACK_IMPORTED_MODULE_12__["IntroduceSectionComponent"],
                    _components_go_to_top_btn_go_to_top_btn_component__WEBPACK_IMPORTED_MODULE_13__["GoToTopBtnComponent"],
                    _layout_home_page_header_home_page_header_component__WEBPACK_IMPORTED_MODULE_14__["HomePageHeaderComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/blocks/Portfolio-section/Portfolio-section.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/blocks/Portfolio-section/Portfolio-section.component.ts ***!
  \*************************************************************************/
/*! exports provided: PortfolioSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioSectionComponent", function() { return PortfolioSectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class PortfolioSectionComponent {
    constructor() { }
    ngOnInit() {
    }
}
PortfolioSectionComponent.ɵfac = function PortfolioSectionComponent_Factory(t) { return new (t || PortfolioSectionComponent)(); };
PortfolioSectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PortfolioSectionComponent, selectors: [["app-Portfolio-section"]], decls: 32, vars: 0, consts: [[1, "container", "Portfolio-block", "position-relative"], [1, "section-title"], [1, "row", "m-xl"], [1, "col-sm-6"], [1, "card"], ["src", "./assets/images/demo_banner.jpg", "alt", "", 1, "card-img-top"], [1, "card-body"], [1, "card-text"], [1, "d-flex", "justify-content-end", "position-relative"], ["routerLink", "/portfolio", 1, "default-link-style", "read-more", "font-weight-bold"]], template: function PortfolioSectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \u6848\u4F8B\u4ECB\u7D39 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Some quick example text to build on the card title and make up the bulk of the card's content.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Some quick example text to build on the card title and make up the bulk of the card's content.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Some quick example text to build on the card title and make up the bulk of the card's content.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Some quick example text to build on the card title and make up the bulk of the card's content.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "read more");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".Portfolio-block[_ngcontent-%COMP%]::after {\n  display: block;\n  content: \"\";\n  position: absolute;\n  z-index: -1;\n}\n\n.Portfolio-block[_ngcontent-%COMP%]::after {\n  width: 80px;\n  background-color: #e2dbd3;\n  bottom: 0;\n  left: -35px;\n  height: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb250ZW50L3Njc3MvYmFzZS9fZXh0ZW5kLnNjc3MiLCJzcmMvYXBwL2Jsb2Nrcy9Qb3J0Zm9saW8tc2VjdGlvbi9Qb3J0Zm9saW8tc2VjdGlvbi5jb21wb25lbnQuc2NzcyIsInNyYy9jb250ZW50L3Njc3MvYmFzZS9fY29sb3Iuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDQ0o7O0FBRkE7RUFFSSxXQUFBO0VBQ0EseUJDQ29CO0VEQXBCLFNBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQUlKIiwiZmlsZSI6InNyYy9hcHAvYmxvY2tzL1BvcnRmb2xpby1zZWN0aW9uL1BvcnRmb2xpby1zZWN0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJXBzZXVkby1zZXR0aW5ne1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6IC0xO1xufSIsIkBpbXBvcnQgJy4uLy4uLy4uL2NvbnRlbnQvc2Nzcy9iYXNlL19leHRlbmQnO1xuQGltcG9ydCAnLi4vLi4vLi4vY29udGVudC9zY3NzL2Jhc2UvY29sb3InO1xuXG4uUG9ydGZvbGlvLWJsb2NrOjphZnRlciB7XG4gICAgQGV4dGVuZCAlcHNldWRvLXNldHRpbmc7XG4gICAgd2lkdGg6IDgwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJG1haW5fd2FybV9saWdodF9jb2xvciA7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IC0zNXB4O1xuICAgIGhlaWdodDogMjAwcHg7XG59IiwiJG1haW5fY29sb3I6ICM5NTg3NzU7XG4kbWFpbl9kYXJrX2NvbG9yOiAjNjI1QTREO1xuJG1haW5fbGlnaHRfY29sb3I6ICNlY2Q2YmQ7XG4kbWFpbl9saWdodF9tX2NvbG9yOiAjZTBjMTlkO1xuXG4kbWFpbl93YXJtX2NvbG9yOiAjYmI4YzRmO1xuJG1haW5fd2FybV9kYXJrX2NvbG9yOiAjYzc5OTUzO1xuJG1haW5fd2FybV9saWdodF9jb2xvcjogI2UyZGJkMztcblxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PortfolioSectionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-Portfolio-section',
                templateUrl: './Portfolio-section.component.html',
                styleUrls: ['./Portfolio-section.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/blocks/introduce-section/introduce-section.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/blocks/introduce-section/introduce-section.component.ts ***!
  \*************************************************************************/
/*! exports provided: IntroduceSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroduceSectionComponent", function() { return IntroduceSectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class IntroduceSectionComponent {
    constructor() { }
    ngOnInit() {
    }
}
IntroduceSectionComponent.ɵfac = function IntroduceSectionComponent_Factory(t) { return new (t || IntroduceSectionComponent)(); };
IntroduceSectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IntroduceSectionComponent, selectors: [["app-introduce-section"]], decls: 14, vars: 0, consts: [[1, "position-relative", "mt-100", "about-block"], [1, "position-absolute", "wording", "pad-d-none"], [1, "container"], [1, "about-title", "font-weight-bold", "m-auto"], [1, "m-auto", "about-content"], [1, "position-absolute", "wording", "position-setting", "pad-d-none"]], template: function IntroduceSectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "YANG");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "ABOUT YANG ZANG");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u63D0\u4F9B\u696D\u4E3B\u5C08\u696D\u8A2D\u8A08\u53CA\u5DE5\u7A0B\u7BA1\u7406\uFF0C\u670D\u52D9\u7BC4\u570D\u5305\u542B\u4F4F\u5B85\u3001\u5546\u696D\u7A7A\u9593\u3001\u5EFA\u6848\u5BE6\u54C1\u5C4B/\u6A23\u54C1\u5C4B\u3001\u516C\u8A2D\u3001\u63A5\u5F85\u4E2D\u5FC3\u898F\u5283\u3002 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u4E3B\u6301\u8A2D\u8A08\u7E3D\u76E3 \u76E7\u570B\u8F1D\u4EE520\u5E74\u7684\u8A2D\u8A08\u8207\u5DE5\u7A0B\u8C50\u5BCC\u7D93\u6B77\uFF0C\u5E36\u9818\u8457\u5718\u968A\u627F\u7E8C\u5C0D\u8A2D\u8A08\u7684\u71B1\u60C5\u8207\u5DE5\u7A0B\u7CBE\u7DFB\u5EA6\u7684\u8981\u6C42\uFF0C ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u63D0\u4F9B\u696D\u4E3B\u5B8C\u6574\u4E14\u7D30\u81A9\u7684\u670D\u52D9\uFF0C\u5448\u73FE\u5275\u65B0\u98A8\u683C\u8207\u8CEA\u611F\u517C\u5177\u7684\u751F\u6D3B\u7A7A\u9593\u3002 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "ZANG");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".about-block[_ngcontent-%COMP%]::after, .about-block[_ngcontent-%COMP%]::before {\n  display: block;\n  content: \"\";\n  position: absolute;\n  z-index: -1;\n}\n\n.about-block[_ngcontent-%COMP%] {\n  padding-top: 200px;\n  padding-bottom: 200px;\n}\n\n@media (max-width: 576px) {\n  .about-block[_ngcontent-%COMP%] {\n    padding-bottom: 50px;\n    padding-top: 50px;\n  }\n}\n\n.about-block[_ngcontent-%COMP%]::before {\n  height: 80px;\n  width: 310px;\n  background-color: #ecd6bd;\n  top: 375px;\n  left: 25%;\n}\n\n@media (max-width: 576px) {\n  .about-block[_ngcontent-%COMP%]::before {\n    display: none;\n  }\n}\n\n.about-block[_ngcontent-%COMP%]::after {\n  height: 50px;\n  background-color: #e0c19d;\n  top: 83px;\n  right: 20%;\n  animation-name: deco-about;\n  animation-iteration-count: infinite;\n  animation-duration: 3s;\n}\n\n@keyframes deco-about {\n  0% {\n    width: 250px;\n  }\n  50% {\n    width: 150px;\n  }\n  100% {\n    width: 250px;\n  }\n}\n\n.about-title[_ngcontent-%COMP%] {\n  width: 50%;\n  font-size: 30px;\n  margin-bottom: 50px !important;\n  color: #bb8c4f;\n  letter-spacing: 3px;\n  line-height: 28px;\n  padding-left: 20px;\n  border-left: 5px solid #958775;\n}\n\n@media (max-width: 768px) {\n  .about-title[_ngcontent-%COMP%] {\n    font-size: 25px;\n    width: 70%;\n  }\n}\n\n@media (max-width: 576px) {\n  .about-title[_ngcontent-%COMP%] {\n    width: 100%;\n    font-size: 20px;\n  }\n}\n\n.wording[_ngcontent-%COMP%] {\n  font-size: 150px;\n  font-weight: bold;\n  color: transparent;\n  -webkit-text-stroke: 2px #e2dbd3;\n  border-bottom: solid 3px #e2dbd3;\n  top: -50px;\n}\n\n.position-setting[_ngcontent-%COMP%] {\n  bottom: 0;\n  right: 0;\n  top: auto;\n  bottom: -50px;\n}\n\n.about-content[_ngcontent-%COMP%] {\n  line-height: 30px;\n  font-weight: bolder;\n  width: 50%;\n}\n\n@media (max-width: 768px) {\n  .about-content[_ngcontent-%COMP%] {\n    width: 70%;\n  }\n}\n\n@media (max-width: 576px) {\n  .about-content[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb250ZW50L3Njc3MvYmFzZS9fZXh0ZW5kLnNjc3MiLCJzcmMvYXBwL2Jsb2Nrcy9pbnRyb2R1Y2Utc2VjdGlvbi9pbnRyb2R1Y2Utc2VjdGlvbi5jb21wb25lbnQuc2NzcyIsInNyYy9jb250ZW50L3Njc3MvYmFzZS9fY29sb3Iuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDQ0o7O0FBREE7RUFDSSxrQkFBQTtFQUNBLHFCQUFBO0FBSUo7O0FBRkk7RUFKSjtJQUtPLG9CQUFBO0lBQ0MsaUJBQUE7RUFLTjtBQUNGOztBQUZBO0VBRUksWUFBQTtFQUNBLFlBQUE7RUFDQSx5QkNoQmU7RURpQmYsVUFBQTtFQUNBLFNBQUE7QUFJSjs7QUFGSTtFQVJKO0lBU1EsYUFBQTtFQUtOO0FBQ0Y7O0FBREE7RUFFSSxZQUFBO0VBQ0EseUJDNUJpQjtFRDZCakIsU0FBQTtFQUNBLFVBQUE7RUFDQSwwQkFBQTtFQUNBLG1DQUFBO0VBQ0Esc0JBQUE7QUFHSjs7QUFBQTtFQUNJO0lBQUksWUFBQTtFQUlOO0VBSEU7SUFBSyxZQUFBO0VBTVA7RUFMRTtJQUFNLFlBQUE7RUFRUjtBQUNGOztBQUxBO0VBQ0ksVUFBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtFQUNBLGNDN0NjO0VEOENkLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0FBT0o7O0FBTEk7RUFWSjtJQVdRLGVBQUE7SUFDQSxVQUFBO0VBUU47QUFDRjs7QUFOSTtFQWZKO0lBZ0JRLFdBQUE7SUFDQSxlQUFBO0VBU047QUFDRjs7QUFMQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsZ0NBQUE7RUFDQSxVQUFBO0FBUUo7O0FBTEE7RUFDSSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0FBUUo7O0FBTEE7RUFDSSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtBQVFKOztBQU5JO0VBTEo7SUFNUSxVQUFBO0VBU047QUFDRjs7QUFQSTtFQVRKO0lBVVEsV0FBQTtFQVVOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9ibG9ja3MvaW50cm9kdWNlLXNlY3Rpb24vaW50cm9kdWNlLXNlY3Rpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIlcHNldWRvLXNldHRpbmd7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogLTE7XG59IiwiQGltcG9ydCAnLi4vLi4vLi4vY29udGVudC9zY3NzL2Jhc2UvX2NvbG9yJztcbkBpbXBvcnQgJy4uLy4uLy4uL2NvbnRlbnQvc2Nzcy9iYXNlL19leHRlbmQnO1xuQGltcG9ydCAnLi4vLi4vLi4vY29udGVudC9zY3NzL2Jhc2UvX3ZhcmlhYmxlJztcblxuLmFib3V0LWJsb2Nre1xuICAgIHBhZGRpbmctdG9wOiAyMDBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjAwcHg7XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogJHBob25lKSB7XG4gICAgICAgcGFkZGluZy1ib3R0b206IDUwcHg7XG4gICAgICAgIHBhZGRpbmctdG9wOiA1MHB4O1xuICAgIH1cbn1cblxuLmFib3V0LWJsb2NrOjpiZWZvcmUge1xuICAgIEBleHRlbmQgJXBzZXVkby1zZXR0aW5nO1xuICAgIGhlaWdodDogODBweDtcbiAgICB3aWR0aDogMzEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJG1haW5fbGlnaHRfY29sb3IgO1xuICAgIHRvcDogMzc1cHg7XG4gICAgbGVmdDogMjUlO1xuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICRwaG9uZSkge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbn1cblxuXG4uYWJvdXQtYmxvY2s6OmFmdGVyIHtcbiAgICBAZXh0ZW5kICVwc2V1ZG8tc2V0dGluZztcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJG1haW5fbGlnaHRfbV9jb2xvciA7XG4gICAgdG9wOiA4M3B4O1xuICAgIHJpZ2h0OiAyMCU7XG4gICAgYW5pbWF0aW9uLW5hbWU6IGRlY28tYWJvdXQ7XG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAzcztcbn1cblxuQGtleWZyYW1lcyBkZWNvLWFib3V0IHtcbiAgICAwJSB7d2lkdGg6IDI1MHB4O31cbiAgICA1MCUge3dpZHRoOiAxNTBweDt9XG4gICAgMTAwJSB7d2lkdGg6IDI1MHB4O31cbn1cblxuXG4uYWJvdXQtdGl0bGUge1xuICAgIHdpZHRoOiA1MCU7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDUwcHghaW1wb3J0YW50O1xuICAgIGNvbG9yOiAkbWFpbl93YXJtX2NvbG9yO1xuICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XG4gICAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgJG1haW5fY29sb3I7XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogJHBhZCkge1xuICAgICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgICAgIHdpZHRoOiA3MCU7XG4gICAgfVxuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICRwaG9uZSkge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgIH1cblxufVxuXG4ud29yZGluZyB7XG4gICAgZm9udC1zaXplOiAxNTBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjp0cmFuc3BhcmVudDtcbiAgICAtd2Via2l0LXRleHQtc3Ryb2tlOiAycHggJG1haW5fd2FybV9saWdodF9jb2xvcjtcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAzcHggJG1haW5fd2FybV9saWdodF9jb2xvcjtcbiAgICB0b3A6IC01MHB4O1xufVxuXG4ucG9zaXRpb24tc2V0dGluZ3tcbiAgICBib3R0b206IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiBhdXRvO1xuICAgIGJvdHRvbTogLTUwcHg7XG59XG5cbi5hYm91dC1jb250ZW50e1xuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgd2lkdGg6IDUwJTtcblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkcGFkKSB7XG4gICAgICAgIHdpZHRoOiA3MCU7XG4gICAgfVxuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICRwaG9uZSkge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG59IiwiJG1haW5fY29sb3I6ICM5NTg3NzU7XG4kbWFpbl9kYXJrX2NvbG9yOiAjNjI1QTREO1xuJG1haW5fbGlnaHRfY29sb3I6ICNlY2Q2YmQ7XG4kbWFpbl9saWdodF9tX2NvbG9yOiAjZTBjMTlkO1xuXG4kbWFpbl93YXJtX2NvbG9yOiAjYmI4YzRmO1xuJG1haW5fd2FybV9kYXJrX2NvbG9yOiAjYzc5OTUzO1xuJG1haW5fd2FybV9saWdodF9jb2xvcjogI2UyZGJkMztcblxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IntroduceSectionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-introduce-section',
                templateUrl: './introduce-section.component.html',
                styleUrls: ['./introduce-section.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/blocks/product-section/product-section.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/blocks/product-section/product-section.component.ts ***!
  \*********************************************************************/
/*! exports provided: ProductSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductSectionComponent", function() { return ProductSectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class ProductSectionComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProductSectionComponent.ɵfac = function ProductSectionComponent_Factory(t) { return new (t || ProductSectionComponent)(); };
ProductSectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductSectionComponent, selectors: [["app-product-section"]], decls: 44, vars: 0, consts: [[1, "container", "position-relative", "product-deco"], [1, "section-title", "deco-title"], [1, "row", "m-xl"], [1, "col-sm-4"], [1, "card"], ["src", "./assets/images/demo_banner.jpg", "alt", "", 1, "card-img-top"], [1, "card-body"], [1, "card-text"], [1, "d-flex", "justify-content-end", "position-relative"], ["routerLink", "/product", 1, "default-link-style", "read-more", "font-weight-bold"]], template: function ProductSectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \u7522\u54C1\u4ECB\u7D39 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Some quick example text to build on the card title and make up the bulk of the card's content.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Some quick example text to build on the card title and make up the bulk of the card's content.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Some quick example text to build on the card title and make up the bulk of the card's content.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Some quick example text to build on the card title and make up the bulk of the card's content.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Some quick example text to build on the card title and make up the bulk of the card's content.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Some quick example text to build on the card title and make up the bulk of the card's content.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "read more");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".product-deco[_ngcontent-%COMP%]::after, .product-deco[_ngcontent-%COMP%]::before {\n  display: block;\n  content: \"\";\n  position: absolute;\n  z-index: -1;\n}\n\n.product-deco[_ngcontent-%COMP%]::before {\n  width: 80px;\n  height: 80px;\n  background-color: #e2dbd3;\n  top: 50%;\n  right: -12px;\n}\n\n.product-deco[_ngcontent-%COMP%]::after {\n  width: 50px;\n  background-color: #e2dbd3;\n  top: 75px;\n  left: -100px;\n  animation-name: deco;\n  animation-iteration-count: infinite;\n  animation-duration: 2s;\n}\n\n@keyframes deco {\n  0% {\n    height: 250px;\n  }\n  50% {\n    height: 150px;\n  }\n  100% {\n    height: 250px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb250ZW50L3Njc3MvYmFzZS9fZXh0ZW5kLnNjc3MiLCJzcmMvYXBwL2Jsb2Nrcy9wcm9kdWN0LXNlY3Rpb24vcHJvZHVjdC1zZWN0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2NvbnRlbnQvc2Nzcy9iYXNlL19jb2xvci5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNDSjs7QUFEQTtFQUVJLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJDRG9CO0VERXBCLFFBQUE7RUFDQSxZQUFBO0FBR0o7O0FBQUE7RUFFSSxXQUFBO0VBQ0EseUJDVG9CO0VEVXBCLFNBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQ0FBQTtFQUNBLHNCQUFBO0FBRUo7O0FBQUE7RUFDSTtJQUFJLGFBQUE7RUFJTjtFQUhFO0lBQUssYUFBQTtFQU1QO0VBTEU7SUFBTSxhQUFBO0VBUVI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2Jsb2Nrcy9wcm9kdWN0LXNlY3Rpb24vcHJvZHVjdC1zZWN0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJXBzZXVkby1zZXR0aW5ne1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6IC0xO1xufSIsIkBpbXBvcnQgJy4uLy4uLy4uL2NvbnRlbnQvc2Nzcy9iYXNlL19jb2xvcic7XG5AaW1wb3J0ICcuLi8uLi8uLi9jb250ZW50L3Njc3MvYmFzZS9fZXh0ZW5kJztcblxuXG4ucHJvZHVjdC1kZWNvOjpiZWZvcmUge1xuICAgIEBleHRlbmQgJXBzZXVkby1zZXR0aW5nO1xuICAgIHdpZHRoOiA4MHB4O1xuICAgIGhlaWdodDogODBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWFpbl93YXJtX2xpZ2h0X2NvbG9yIDtcbiAgICB0b3A6IDUwJTtcbiAgICByaWdodDogLTEycHg7XG59XG5cbi5wcm9kdWN0LWRlY286OmFmdGVyIHtcbiAgICBAZXh0ZW5kICVwc2V1ZG8tc2V0dGluZztcbiAgICB3aWR0aDogNTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWFpbl93YXJtX2xpZ2h0X2NvbG9yIDtcbiAgICB0b3A6IDc1cHg7XG4gICAgbGVmdDogLTEwMHB4O1xuICAgIGFuaW1hdGlvbi1uYW1lOiBkZWNvO1xuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMnM7XG59XG5Aa2V5ZnJhbWVzIGRlY28ge1xuICAgIDAlIHtoZWlnaHQ6IDI1MHB4O31cbiAgICA1MCUge2hlaWdodDogMTUwcHg7fVxuICAgIDEwMCUge2hlaWdodDogMjUwcHg7fVxufVxuIiwiJG1haW5fY29sb3I6ICM5NTg3NzU7XG4kbWFpbl9kYXJrX2NvbG9yOiAjNjI1QTREO1xuJG1haW5fbGlnaHRfY29sb3I6ICNlY2Q2YmQ7XG4kbWFpbl9saWdodF9tX2NvbG9yOiAjZTBjMTlkO1xuXG4kbWFpbl93YXJtX2NvbG9yOiAjYmI4YzRmO1xuJG1haW5fd2FybV9kYXJrX2NvbG9yOiAjYzc5OTUzO1xuJG1haW5fd2FybV9saWdodF9jb2xvcjogI2UyZGJkMztcblxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductSectionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-product-section',
                templateUrl: './product-section.component.html',
                styleUrls: ['./product-section.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/go-to-top-btn/go-to-top-btn.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/go-to-top-btn/go-to-top-btn.component.ts ***!
  \*********************************************************************/
/*! exports provided: GoToTopBtnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoToTopBtnComponent", function() { return GoToTopBtnComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



const _c0 = function (a0) { return { "set-opacity": a0 }; };
class GoToTopBtnComponent {
    constructor() {
        this.isBtnHidden = true;
    }
    ngOnInit() {
        this.scroll();
    }
    ngOnDestroy() {
        this.scroll();
    }
    scrollTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    scroll() {
        window.addEventListener('scroll', () => {
            this.isBtnHidden = window.pageYOffset > 150 ? false : true;
        });
    }
}
GoToTopBtnComponent.ɵfac = function GoToTopBtnComponent_Factory(t) { return new (t || GoToTopBtnComponent)(); };
GoToTopBtnComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GoToTopBtnComponent, selectors: [["app-go-to-top-btn"]], decls: 2, vars: 3, consts: [[1, "go-to-top-btn", "text-center", "position-fixed", 3, "ngClass", "click"]], template: function GoToTopBtnComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GoToTopBtnComponent_Template_button_click_0_listener() { return ctx.scrollTop(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "TOP\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx.isBtnHidden));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], styles: [".go-to-top-btn[_ngcontent-%COMP%] {\n  background-color: #bb8c4f;\n  z-index: 5;\n  color: #fff;\n  width: 50px;\n  height: 50px;\n  right: 15px;\n  bottom: 30px;\n  border: solid 1px #bb8c4f;\n  border-radius: 10px;\n  transition: 1.5s;\n}\n\n.set-opacity[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9nby10by10b3AtYnRuL2dvLXRvLXRvcC1idG4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDSSx5QkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUhKOztBQU1BO0VBQ0ksVUFBQTtBQUhKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9nby10by10b3AtYnRuL2dvLXRvLXRvcC1idG4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi9jb250ZW50L3Njc3MvYmFzZS9fY29sb3InO1xuQGltcG9ydCAnLi4vLi4vLi4vY29udGVudC9zY3NzL2Jhc2UvX21peGluJztcblxuXG4uZ28tdG8tdG9wLWJ0biB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJG1haW5fd2FybV9jb2xvcjtcbiAgICB6LWluZGV4OiA1O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICByaWdodDogMTVweDtcbiAgICBib3R0b206IDMwcHg7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggJG1haW5fd2FybV9jb2xvcjtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHRyYW5zaXRpb246IDEuNXM7XG59XG5cbi5zZXQtb3BhY2l0eXtcbiAgICBvcGFjaXR5OiAwO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GoToTopBtnComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-go-to-top-btn',
                templateUrl: './go-to-top-btn.component.html',
                styleUrls: ['./go-to-top-btn.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/layout/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/layout/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 10, vars: 0, consts: [[1, "position-relative", "footer", "d-flex", "justify-content-center", "align-items-center"], [1, "footer-ul"], [1, "footer-title", "pad-d-none"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " \u6D0B\u6522\u8A2D\u8A08\u6709\u9650\u516C\u53F8 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " \u5730\u5740: 006\u53F0\u5317\u5E02\u4E2D\u6B63\u5340\u91CD\u6176\u5357\u8DEF\u4E00\u6BB5122\u865F ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " \u96FB\u8A71: (00)123456789 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h4", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " YangZang ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".footer[_ngcontent-%COMP%] {\n  background-color: #eee;\n  padding: 20px 100px;\n  height: 200px;\n  margin-top: 150px;\n}\n@media (max-width: 992px) {\n  .footer[_ngcontent-%COMP%] {\n    text-align: center;\n    padding: 20px 50px;\n  }\n}\n.footer-ul[_ngcontent-%COMP%] {\n  font-size: 15px;\n  padding-right: 50px;\n  color: #c79953;\n  line-height: 30px;\n  margin-right: 50px;\n  margin-bottom: 0px;\n  border-right: solid 1px;\n}\n@media (max-width: 992px) {\n  .footer-ul[_ngcontent-%COMP%] {\n    border-right: none;\n    text-align: center;\n    line-height: 35px;\n    padding-right: 0px;\n    margin-right: 0px;\n  }\n}\n.footer-title[_ngcontent-%COMP%] {\n  color: #c79953;\n  text-align: center;\n  font-size: 50px;\n  letter-spacing: 5px;\n  font-style: oblique;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvY29udGVudC9zY3NzL2Jhc2UvX2NvbG9yLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDRyxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNDLGlCQUFBO0FBSEo7QUFLSTtFQU5KO0lBT1Esa0JBQUE7SUFDQSxrQkFBQTtFQUZOO0FBQ0Y7QUFNQTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGNDZG1CO0VEZW5CLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0FBSEo7QUFLSTtFQVRKO0lBVVEsa0JBQUE7SUFDQSxrQkFBQTtJQUNBLGlCQUFBO0lBQ0Esa0JBQUE7SUFDQSxpQkFBQTtFQUZOO0FBQ0Y7QUFLQTtFQUNJLGNDOUJtQjtFRCtCbkIsa0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQUZKIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi9jb250ZW50L3Njc3MvYmFzZS9fY29sb3InO1xuQGltcG9ydCAnLi4vLi4vLi4vY29udGVudC9zY3NzL2Jhc2UvX21peGluJztcbkBpbXBvcnQgJy4uLy4uLy4uL2NvbnRlbnQvc2Nzcy9iYXNlL192YXJpYWJsZSc7XG5cbi5mb290ZXIge1xuICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgIHBhZGRpbmc6MjBweCAxMDBweDtcbiAgIGhlaWdodDogMjAwcHg7XG4gICAgbWFyZ2luLXRvcDogMTUwcHg7XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBwYWRkaW5nOjIwcHggNTBweDtcbiAgICB9XG5cbn1cblxuLmZvb3Rlci11bHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgcGFkZGluZy1yaWdodDogNTBweDtcbiAgICBjb2xvcjogJG1haW5fd2FybV9kYXJrX2NvbG9yO1xuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgIG1hcmdpbi1yaWdodDogNTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHg7XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMHB4O1xuICAgIH1cbn1cblxuLmZvb3Rlci10aXRsZSB7XG4gICAgY29sb3I6ICRtYWluX3dhcm1fZGFya19jb2xvcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiA1MHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiA1cHg7XG4gICAgZm9udC1zdHlsZTogb2JsaXF1ZVxufVxuXG5cblxuIiwiJG1haW5fY29sb3I6ICM5NTg3NzU7XG4kbWFpbl9kYXJrX2NvbG9yOiAjNjI1QTREO1xuJG1haW5fbGlnaHRfY29sb3I6ICNlY2Q2YmQ7XG4kbWFpbl9saWdodF9tX2NvbG9yOiAjZTBjMTlkO1xuXG4kbWFpbl93YXJtX2NvbG9yOiAjYmI4YzRmO1xuJG1haW5fd2FybV9kYXJrX2NvbG9yOiAjYzc5OTUzO1xuJG1haW5fd2FybV9saWdodF9jb2xvcjogI2UyZGJkMztcblxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/layout/home-page-header/home-page-header.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/layout/home-page-header/home-page-header.component.ts ***!
  \***********************************************************************/
/*! exports provided: HomePageHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageHeaderComponent", function() { return HomePageHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class HomePageHeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomePageHeaderComponent.ɵfac = function HomePageHeaderComponent_Factory(t) { return new (t || HomePageHeaderComponent)(); };
HomePageHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomePageHeaderComponent, selectors: [["app-home-page-header"]], decls: 14, vars: 0, consts: [[1, "d-flex", "fl-jc-sb", "h-100vh"], [1, "pt-d", "w-100px", "logo", "position-relative", "pad-d-none"], [1, "logo-title"], [1, "scroll", "font-weight-bold", "position-relative"], [1, "d-flex", "justify-content-center", "align-items-center", "header-img-block", "w-70"], [1, "main-title"], [1, "w-100px", "pad-d-none"]], template: function HomePageHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " \u6D0B\u6522\u8A2D\u8A08\u6709\u9650\u516C\u53F8 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "scroll");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " YANG ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " ZANG ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " \u63D0\u4F9B\u6700\u597D\u7684\u54C1\u8CEA\u8207\u6700\u597D\u7684\u8A2D\u8A08 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".logo[_ngcontent-%COMP%]   .logo-title[_ngcontent-%COMP%]::before {\n  display: block;\n  content: \"\";\n  position: absolute;\n  z-index: -1;\n}\n\n.logo[_ngcontent-%COMP%] {\n  color: #958775;\n  width: 100px;\n  top: 14%;\n}\n\n.logo[_ngcontent-%COMP%]   .logo-title[_ngcontent-%COMP%] {\n  width: -webkit-min-content;\n  width: min-content;\n  margin: auto;\n  font-size: 16px;\n  position: relative;\n}\n\n.logo[_ngcontent-%COMP%]   .logo-title[_ngcontent-%COMP%]::before {\n  width: 10px;\n  height: 10px;\n  background-color: #958775;\n  transform: rotate(45deg);\n  top: -25px;\n  left: 20%;\n}\n\n.logo[_ngcontent-%COMP%]   .logo-img[_ngcontent-%COMP%] {\n  width: 35px;\n  display: block;\n  margin: 10px auto;\n}\n\n.logo[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%] {\n  width: -webkit-min-content;\n  width: min-content;\n  margin: 20px auto;\n  letter-spacing: 10px;\n  writing-mode: vertical-rl;\n}\n\n.logo[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]:after {\n  position: absolute;\n  display: block;\n  content: \"\";\n  top: 125px;\n  right: 50%;\n  width: 2px;\n  height: 150px;\n  background-color: #bb8c4f;\n  animation-name: scroll;\n  animation-iteration-count: infinite;\n  animation-duration: 3s;\n}\n\n@keyframes scroll {\n  0% {\n    height: 0px;\n  }\n  50% {\n    height: 150px;\n  }\n  100% {\n    height: 0px;\n  }\n}\n\n.header-img-block[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: beige;\n  background-image: url(\"https://karimoku-cat.jp/wp/wp-content/themes/karimokucat/assets/img/img_mainvisual.jpg\");\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  background-position: center;\n  background-size: cover;\n}\n\n.header-img-block[_ngcontent-%COMP%]   .main-title[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 10rem;\n  color: #bb8c4f;\n  border-top: solid 5px;\n  border-bottom: solid 5px;\n}\n\n@media (max-width: 768px) {\n  .header-img-block[_ngcontent-%COMP%]   .main-title[_ngcontent-%COMP%] {\n    font-size: 7rem;\n  }\n}\n\n@media (max-width: 576px) {\n  .header-img-block[_ngcontent-%COMP%]   .main-title[_ngcontent-%COMP%] {\n    font-size: 5rem;\n  }\n}\n\nh3[_ngcontent-%COMP%] {\n  position: relative;\n  font-size: 17px;\n  width: -webkit-min-content;\n  width: min-content;\n  line-height: 27px;\n  color: #958775;\n  margin: auto;\n  top: 16%;\n  padding: 10px 0px;\n}\n\nh3[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: -5px;\n  right: -10px;\n  width: 10px;\n  height: 10px;\n  border-top: solid 2px #bb8c4f;\n  border-right: solid 2px #bb8c4f;\n}\n\nh3[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  bottom: -5px;\n  left: -10px;\n  width: 10px;\n  height: 10px;\n  border-bottom: solid 2px #bb8c4f;\n  border-left: solid 2px #bb8c4f;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb250ZW50L3Njc3MvYmFzZS9fZXh0ZW5kLnNjc3MiLCJzcmMvYXBwL2xheW91dC9ob21lLXBhZ2UtaGVhZGVyL2hvbWUtcGFnZS1oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvY29udGVudC9zY3NzL2Jhc2UvX2NvbG9yLnNjc3MiLCJzcmMvY29udGVudC9zY3NzL2Jhc2UvX21peGluLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ0NKOztBQUFBO0VBQ0ksY0NOUztFRE9ULFlBQUE7RUFDQSxRQUFBO0FBR0o7O0FBREk7RUFDSSwwQkFBQTtFQUFBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUdSOztBQUFJO0VBRUksV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkNyQks7RURzQkwsd0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQUNSOztBQUVJO0VBQ0ksV0FBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQUFSOztBQUdJO0VBQ0ksMEJBQUE7RUFBQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkFBQTtBQURSOztBQUlJO0VFdkNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxVRnFDNkI7RUVwQzdCLFVGb0NvQztFRW5DcEMsVUZtQ3lDO0VFbEN6QyxhRmtDOEM7RUVqQzlDLHlCREhjO0VEcUNWLHNCQUFBO0VBQ0EsbUNBQUE7RUFDQSxzQkFBQTtBQUtSOztBQUZJO0VBQ0k7SUFBSSxXQUFBO0VBS1Y7RUFKTTtJQUFLLGFBQUE7RUFPWDtFQU5NO0lBQU0sV0FBQTtFQVNaO0FBQ0Y7O0FBRkE7RUFDSSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSwrR0FBQTtFQUNBLDRCQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0FBS0o7O0FBSkk7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0NoRVU7RURpRVYscUJBQUE7RUFDQSx3QkFBQTtBQU1SOztBQUpRO0VBUEo7SUFRUSxlQUFBO0VBT1Y7QUFDRjs7QUFMUTtFQVhKO0lBWVEsZUFBQTtFQVFWO0FBQ0Y7O0FBSEE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSwwQkFBQTtFQUFBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQ3pGUztFRDBGVCxZQUFBO0VBQ0EsUUFBQTtFQUNBLGlCQUFBO0FBTUo7O0FBSEE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSwrQkFBQTtBQU1KOztBQUhBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0VBQ0EsOEJBQUE7QUFNSiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9ob21lLXBhZ2UtaGVhZGVyL2hvbWUtcGFnZS1oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIlcHNldWRvLXNldHRpbmd7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogLTE7XG59IiwiQGltcG9ydCAnLi4vLi4vLi4vY29udGVudC9zY3NzL2Jhc2UvX2NvbG9yJztcbkBpbXBvcnQgJy4uLy4uLy4uL2NvbnRlbnQvc2Nzcy9iYXNlL19taXhpbic7XG5AaW1wb3J0ICcuLi8uLi8uLi9jb250ZW50L3Njc3MvYmFzZS9fZXh0ZW5kJztcbkBpbXBvcnQgJy4uLy4uLy4uL2NvbnRlbnQvc2Nzcy9iYXNlL192YXJpYWJsZSc7XG5cbi5sb2dvIHtcbiAgICBjb2xvcjogJG1haW5fY29sb3I7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIHRvcDogMTQlO1xuXG4gICAgLmxvZ28tdGl0bGUge1xuICAgICAgICB3aWR0aDogbWluLWNvbnRlbnQ7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgfVxuXG4gICAgLmxvZ28tdGl0bGU6OmJlZm9yZSB7XG4gICAgICAgIEBleHRlbmQgJXBzZXVkby1zZXR0aW5nO1xuICAgICAgICB3aWR0aDogMTBweDtcbiAgICAgICAgaGVpZ2h0OiAxMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWFpbl9jb2xvcjtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoIDQ1ZGVnKTtcbiAgICAgICAgdG9wOiAtMjVweDtcbiAgICAgICAgbGVmdDogMjAlO1xuICAgIH1cblxuICAgIC5sb2dvLWltZyB7XG4gICAgICAgIHdpZHRoOiAzNXB4O1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgbWFyZ2luOiAxMHB4IGF1dG87XG4gICAgfVxuXG4gICAgLnNjcm9sbHtcbiAgICAgICAgd2lkdGg6IG1pbi1jb250ZW50O1xuICAgICAgICBtYXJnaW46IDIwcHggYXV0bztcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDEwcHg7XG4gICAgICAgIHdyaXRpbmctbW9kZTogdmVydGljYWwtcmw7XG4gICAgfVxuXG4gICAgLnNjcm9sbDphZnRlcntcbiAgICAgICAgQGluY2x1ZGUgZGVjb3JhdGlvbi1saW5lKDEyNXB4LCA1MCUsIDJweCwgMTUwcHgpO1xuICAgICAgICBhbmltYXRpb24tbmFtZTogc2Nyb2xsO1xuICAgICAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAzcztcbiAgICB9XG5cbiAgICBAa2V5ZnJhbWVzIHNjcm9sbCB7XG4gICAgICAgIDAlIHtoZWlnaHQ6IDBweDt9XG4gICAgICAgIDUwJSB7aGVpZ2h0OiAxNTBweDt9XG4gICAgICAgIDEwMCUge2hlaWdodDogMHB4O31cbiAgICB9XG5cbn1cblxuXG5cblxuLmhlYWRlci1pbWctYmxvY2sge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJlaWdlO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9rYXJpbW9rdS1jYXQuanAvd3Avd3AtY29udGVudC90aGVtZXMva2FyaW1va3VjYXQvYXNzZXRzL2ltZy9pbWdfbWFpbnZpc3VhbC5qcGcnKTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgLm1haW4tdGl0bGUge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMTByZW07XG4gICAgICAgIGNvbG9yOiAkbWFpbl93YXJtX2NvbG9yO1xuICAgICAgICBib3JkZXItdG9wOiBzb2xpZCA1cHg7XG4gICAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDVweDtcblxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogJHBhZCkge1xuICAgICAgICAgICAgZm9udC1zaXplOiA3cmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6ICRwaG9uZSkge1xuICAgICAgICAgICAgZm9udC1zaXplOiA1cmVtO1xuICAgICAgICB9XG4gICAgfVxuXG59XG5cbmgzIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICAgIHdpZHRoOiBtaW4tY29udGVudDtcbiAgICBsaW5lLWhlaWdodDogMjdweDtcbiAgICBjb2xvcjogJG1haW5fY29sb3I7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHRvcDogMTYlO1xuICAgIHBhZGRpbmc6IDEwcHggMHB4O1xufVxuXG5oMzo6YmVmb3Jle1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IC01cHg7XG4gICAgcmlnaHQ6IC0xMHB4O1xuICAgIHdpZHRoOiAxMHB4O1xuICAgIGhlaWdodDogMTBweDtcbiAgICBib3JkZXItdG9wOiBzb2xpZCAycHggJG1haW5fd2FybV9jb2xvcjtcbiAgICBib3JkZXItcmlnaHQ6IHNvbGlkIDJweCAkbWFpbl93YXJtX2NvbG9yO1xufVxuXG5oMzo6YWZ0ZXJ7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogLTVweDtcbiAgICBsZWZ0OiAtMTBweDtcbiAgICB3aWR0aDogMTBweDtcbiAgICBoZWlnaHQ6IDEwcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMnB4ICRtYWluX3dhcm1fY29sb3I7XG4gICAgYm9yZGVyLWxlZnQ6IHNvbGlkIDJweCAkbWFpbl93YXJtX2NvbG9yO1xufSIsIiRtYWluX2NvbG9yOiAjOTU4Nzc1O1xuJG1haW5fZGFya19jb2xvcjogIzYyNUE0RDtcbiRtYWluX2xpZ2h0X2NvbG9yOiAjZWNkNmJkO1xuJG1haW5fbGlnaHRfbV9jb2xvcjogI2UwYzE5ZDtcblxuJG1haW5fd2FybV9jb2xvcjogI2JiOGM0ZjtcbiRtYWluX3dhcm1fZGFya19jb2xvcjogI2M3OTk1MztcbiRtYWluX3dhcm1fbGlnaHRfY29sb3I6ICNlMmRiZDM7XG5cbiIsIkBtaXhpbiBkZWNvcmF0aW9uLWxpbmUoJHRvcCwgJHJpZ2h0LCAkdywgJGgpe1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHRvcDogJHRvcDtcbiAgICByaWdodDogJHJpZ2h0O1xuICAgIHdpZHRoOiAkdztcbiAgICBoZWlnaHQ6ICRoO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRtYWluX3dhcm1fY29sb3I7O1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomePageHeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home-page-header',
                templateUrl: './home-page-header.component.html',
                styleUrls: ['./home-page-header.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/layout/nav-bar/nav-bar.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/layout/nav-bar/nav-bar.component.ts ***!
  \*****************************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




const _c0 = function (a0) { return { "activity": a0 }; };
class NavBarComponent {
    constructor() {
        this.isHamActive = false;
    }
    ngOnInit() {
    }
    clickHam() {
        if (!this.isHamActive) {
            this.isHamActive = true;
        }
        else {
            this.isHamActive = false;
        }
    }
}
NavBarComponent.ɵfac = function NavBarComponent_Factory(t) { return new (t || NavBarComponent)(); };
NavBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavBarComponent, selectors: [["app-nav-bar"]], decls: 17, vars: 3, consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "bg-light"], ["routerLink", "/home", 1, "navbar-brand", "font-weight-bold"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarNavAltMarkup", "aria-controls", "navbarNavAltMarkup", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", 3, "ngClass", "click"], [1, "hamburger-line", "ham-1"], [1, "hamburger-line", "ham-2"], [1, "hamburger-line", "ham-3"], ["id", "navbarNavAltMarkup", 1, "collapse", "navbar-collapse", "justify-content-end"], [1, "navbar-nav"], ["routerLink", "/home", 1, "font-weight-bold", "link-wording", "nav-item", "nav-link"], ["routerLink", "/product", 1, "font-weight-bold", "link-wording", "nav-item", "nav-link"], ["routerLink", "/portfolio", 1, "font-weight-bold", "link-wording", "nav-item", "nav-link"], ["routerLink", "/contact", 1, "font-weight-bold", "link-wording", "nav-item", "nav-link"]], template: function NavBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " YANG ZANG ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavBarComponent_Template_button_click_3_listener() { return ctx.clickHam(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u9996\u9801");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u7522\u54C1\u4ECB\u7D39");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u6848\u4F8B\u4ECB\u7D39");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u806F\u7D61\u6211\u5011");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx.isHamActive));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], styles: [".navbar[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 1071;\n}\n\n.navbar[_ngcontent-%COMP%]    > .navbar-brand[_ngcontent-%COMP%] {\n  color: #958775;\n}\n\n.link-wording[_ngcontent-%COMP%] {\n  color: #958775 !important;\n}\n\n.link-wording[_ngcontent-%COMP%]:hover {\n  color: #c79953 !important;\n}\n\n.navbar-light[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%] {\n  border-color: #f8f9fa;\n}\n\n.activity[_ngcontent-%COMP%]   .ham-3[_ngcontent-%COMP%] {\n  transform: translate(0, 0px) rotate(45deg);\n}\n\n.activity[_ngcontent-%COMP%]   .ham-1[_ngcontent-%COMP%] {\n  transform: translate(0, 9px) rotate(-45deg);\n}\n\n.activity[_ngcontent-%COMP%]   .ham-2[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.hamburger-line[_ngcontent-%COMP%] {\n  display: block;\n  background-color: #958775;\n  width: 27px;\n  height: 2px;\n  margin: 7px;\n  transition: all 0.2s 0s;\n}\n\n.nav-link[_ngcontent-%COMP%] {\n  letter-spacing: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L25hdi1iYXIvbmF2LWJhci5jb21wb25lbnQuc2NzcyIsInNyYy9jb250ZW50L3Njc3MvYmFzZS9fY29sb3Iuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNJLGdCQUFBO0VBQ0EsTUFBQTtFQUNBLGFBQUE7QUFGSjs7QUFLQTtFQUNJLGNDVlM7QURRYjs7QUFLQTtFQUNJLHlCQUFBO0FBRko7O0FBS0E7RUFDSSx5QkFBQTtBQUZKOztBQUtBO0VBQ0kscUJBQUE7QUFGSjs7QUFNSTtFQUNJLDBDQUFBO0FBSFI7O0FBTUk7RUFDSSwyQ0FBQTtBQUpSOztBQU9JO0VBQ0ksYUFBQTtBQUxSOztBQVFBO0VBQ0ksY0FBQTtFQUNBLHlCQ3hDUztFRHlDVCxXQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtBQUxKOztBQVFBO0VBQ0ksbUJBQUE7QUFMSiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9uYXYtYmFyL25hdi1iYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi9jb250ZW50L3Njc3MvYmFzZS9fY29sb3InO1xuQGltcG9ydCAnLi4vLi4vLi4vY29udGVudC9zY3NzL2Jhc2UvX2V4dGVuZCc7XG5cbi5uYXZiYXIge1xuICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgdG9wOiAwO1xuICAgIHotaW5kZXg6IDEwNzFcbn1cblxuLm5hdmJhcj4ubmF2YmFyLWJyYW5ke1xuICAgIGNvbG9yOiAkbWFpbl9jb2xvcjtcbn1cblxuLmxpbmstd29yZGluZ3tcbiAgICBjb2xvcjogJG1haW5fY29sb3IhaW1wb3J0YW50O1xufVxuXG4ubGluay13b3JkaW5nOmhvdmVye1xuICAgIGNvbG9yOiAkbWFpbl93YXJtX2RhcmtfY29sb3IhaW1wb3J0YW50O1xufVxuXG4ubmF2YmFyLWxpZ2h0IC5uYXZiYXItdG9nZ2xlciB7XG4gICAgYm9yZGVyLWNvbG9yOiAjZjhmOWZhO1xufVxuXG4uYWN0aXZpdHkge1xuICAgIC5oYW0tMyB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDBweCkgcm90YXRlKDQ1ZGVnKTtcbiAgICB9XG5cbiAgICAuaGFtLTF7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDlweCkgcm90YXRlKC00NWRlZyk7XG4gICAgfVxuXG4gICAgLmhhbS0yIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG59XG4uaGFtYnVyZ2VyLWxpbmUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRtYWluX2NvbG9yO1xuICAgIHdpZHRoOiAyN3B4O1xuICAgIGhlaWdodDogMnB4O1xuICAgIG1hcmdpbjogN3B4O1xuICAgIHRyYW5zaXRpb246IGFsbCAuMnMgMHM7XG59XG5cbi5uYXYtbGluayB7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbn0iLCIkbWFpbl9jb2xvcjogIzk1ODc3NTtcbiRtYWluX2RhcmtfY29sb3I6ICM2MjVBNEQ7XG4kbWFpbl9saWdodF9jb2xvcjogI2VjZDZiZDtcbiRtYWluX2xpZ2h0X21fY29sb3I6ICNlMGMxOWQ7XG5cbiRtYWluX3dhcm1fY29sb3I6ICNiYjhjNGY7XG4kbWFpbl93YXJtX2RhcmtfY29sb3I6ICNjNzk5NTM7XG4kbWFpbl93YXJtX2xpZ2h0X2NvbG9yOiAjZTJkYmQzO1xuXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-nav-bar',
                templateUrl: './nav-bar.component.html',
                styleUrls: ['./nav-bar.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/Portfolio/Portfolio.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/Portfolio/Portfolio.component.ts ***!
  \********************************************************/
/*! exports provided: PortfolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioComponent", function() { return PortfolioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class PortfolioComponent {
    constructor() { }
    ngOnInit() {
    }
}
PortfolioComponent.ɵfac = function PortfolioComponent_Factory(t) { return new (t || PortfolioComponent)(); };
PortfolioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PortfolioComponent, selectors: [["app-Portfolio"]], decls: 4, vars: 0, consts: [[1, "page-banner", "text-center"]], template: function PortfolioComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " PORTFOLIO\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Portfolio works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL1BvcnRmb2xpby9Qb3J0Zm9saW8uY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PortfolioComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-Portfolio',
                templateUrl: './Portfolio.component.html',
                styleUrls: ['./Portfolio.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/contact/contact.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/contact/contact.component.ts ***!
  \****************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ContactComponent {
    constructor() { }
    ngOnInit() {
    }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(); };
ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], decls: 23, vars: 0, consts: [[1, "page-banner", "text-center"], [1, "container", "text-center"], [1, "contact-title"], [1, "row", "info-content"], [1, "col-lg-4", "p-s", "position-relative"], [1, "deco-title"], ["href", "mailto:a0905078881@gmail.com"], ["src", "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621", "frameborder", "0", "allowfullscreen", "", 2, "border", "0", "width", "100%", "height", "400px"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " CONTACT US\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h6", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " \u60A8\u53EF\u900F\u904E\u4EE5\u4E0B\u4E09\u7A2E\u65B9\u5F0F\u806F\u7D61\u6211\u5011 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u5730\u5740");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "006 \u53F0\u5317\u5E02\u4E2D\u6B63\u5340\u91CD\u6176\u5357\u8DEF\u4E00\u6BB5122\u865F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u96FB\u8A71");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "0905078881 / (03)8177277");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\u4FE1\u7BB1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "a0905078881@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "iframe", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".contact-title[_ngcontent-%COMP%] {\n  padding: 250px 50px 200px 50px;\n  font-size: 27px;\n  letter-spacing: 5px;\n  font-weight: bold;\n  color: #c79953;\n}\n@media (max-width: 990px) {\n  .contact-title[_ngcontent-%COMP%] {\n    font-size: 23px;\n    padding: 150px 50px 100px 50px;\n  }\n}\n@media (max-width: 576px) {\n  .contact-title[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n}\n.info-content[_ngcontent-%COMP%] {\n  margin-bottom: 200px;\n}\n@media (max-width: 768px) {\n  .info-content[_ngcontent-%COMP%] {\n    margin-bottom: 100px;\n  }\n}\nh5[_ngcontent-%COMP%] {\n  font-size: 23px;\n  margin-bottom: 10px;\n  font-weight: bold;\n  color: #bb8c4f;\n}\n@media (max-width: 768px) {\n  h5[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n}\na[_ngcontent-%COMP%], p[_ngcontent-%COMP%] {\n  color: #958775 !important;\n  letter-spacing: 2px;\n}\n.deco-title[_ngcontent-%COMP%]::before {\n  width: 800px;\n  opacity: 0.5;\n  display: block;\n  content: \"contact us\";\n  position: absolute;\n  font-size: 150px;\n  left: 38%;\n  top: -50%;\n  color: transparent;\n  z-index: -1;\n  -webkit-text-stroke: 2px #e2dbd3;\n}\n@media (max-width: 990px) {\n  .deco-title[_ngcontent-%COMP%]::before {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2NvbnRlbnQvc2Nzcy9iYXNlL19jb2xvci5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0ksOEJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNDSG1CO0FEQXZCO0FBS0k7RUFQSjtJQVFRLGVBQUE7SUFDQSw4QkFBQTtFQUZOO0FBQ0Y7QUFJSTtFQVpKO0lBYVEsZUFBQTtFQUROO0FBQ0Y7QUFJQTtFQUNJLG9CQUFBO0FBREo7QUFHSTtFQUhKO0lBSVEsb0JBQUE7RUFBTjtBQUNGO0FBR0E7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNDNUJjO0FENEJsQjtBQUVJO0VBTko7SUFPUSxlQUFBO0VBQ047QUFDRjtBQUVBO0VBQ0kseUJBQUE7RUFDQSxtQkFBQTtBQUNKO0FBR0E7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGdDQUFBO0FBQUo7QUFFSTtFQWJKO0lBY1EsYUFBQTtFQUNOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi9jb250ZW50L3Njc3MvYmFzZS9jb2xvcic7XG5AaW1wb3J0ICcuLi8uLi8uLi9jb250ZW50L3Njc3MvYmFzZS9fdmFyaWFibGUnO1xuQGltcG9ydCAnLi4vLi4vLi4vY29udGVudC9zY3NzL2Jhc2UvX21peGluJztcblxuLmNvbnRhY3QtdGl0bGUge1xuICAgIHBhZGRpbmc6IDI1MHB4IDUwcHggMjAwcHggNTBweDtcbiAgICBmb250LXNpemU6IDI3cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDVweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogJG1haW5fd2FybV9kYXJrX2NvbG9yO1xuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDk5MHB4KSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjNweDtcbiAgICAgICAgcGFkZGluZzogMTUwcHggNTBweCAxMDBweCA1MHB4O1xuICAgIH1cblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkcGhvbmUpIHtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgIH1cbn1cblxuLmluZm8tY29udGVudCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjAwcHg7XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogJHBhZCkge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMDBweDtcbiAgICB9XG59XG5cbmg1IHtcbiAgICBmb250LXNpemU6IDIzcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogJG1haW5fd2FybV9jb2xvcjtcblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkcGFkKSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB9XG59XG5cbmEsIHAge1xuICAgIGNvbG9yOiAkbWFpbl9jb2xvciFpbXBvcnRhbnQ7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbn1cblxuXG4uZGVjby10aXRsZTo6YmVmb3JlIHtcbiAgICB3aWR0aDogODAwcHg7XG4gICAgb3BhY2l0eTogMC41O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGNvbnRlbnQ6ICdjb250YWN0IHVzJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZm9udC1zaXplOiAxNTBweDtcbiAgICBsZWZ0OiAzOCU7XG4gICAgdG9wOiAtNTAlO1xuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICB6LWluZGV4OiAtMTtcbiAgICAtd2Via2l0LXRleHQtc3Ryb2tlOiAycHggJG1haW5fd2FybV9saWdodF9jb2xvcjtcblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5OTBweCkge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbn0iLCIkbWFpbl9jb2xvcjogIzk1ODc3NTtcbiRtYWluX2RhcmtfY29sb3I6ICM2MjVBNEQ7XG4kbWFpbl9saWdodF9jb2xvcjogI2VjZDZiZDtcbiRtYWluX2xpZ2h0X21fY29sb3I6ICNlMGMxOWQ7XG5cbiRtYWluX3dhcm1fY29sb3I6ICNiYjhjNGY7XG4kbWFpbl93YXJtX2RhcmtfY29sb3I6ICNjNzk5NTM7XG4kbWFpbl93YXJtX2xpZ2h0X2NvbG9yOiAjZTJkYmQzO1xuXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact',
                templateUrl: './contact.component.html',
                styleUrls: ['./contact.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _layout_home_page_header_home_page_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../layout/home-page-header/home-page-header.component */ "./src/app/layout/home-page-header/home-page-header.component.ts");
/* harmony import */ var _blocks_introduce_section_introduce_section_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../blocks/introduce-section/introduce-section.component */ "./src/app/blocks/introduce-section/introduce-section.component.ts");
/* harmony import */ var _blocks_product_section_product_section_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../blocks/product-section/product-section.component */ "./src/app/blocks/product-section/product-section.component.ts");
/* harmony import */ var _blocks_Portfolio_section_Portfolio_section_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../blocks/Portfolio-section/Portfolio-section.component */ "./src/app/blocks/Portfolio-section/Portfolio-section.component.ts");






class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 5, vars: 0, consts: [[1, "main-container"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-home-page-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-introduce-section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-product-section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-Portfolio-section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_layout_home_page_header_home_page_header_component__WEBPACK_IMPORTED_MODULE_1__["HomePageHeaderComponent"], _blocks_introduce_section_introduce_section_component__WEBPACK_IMPORTED_MODULE_2__["IntroduceSectionComponent"], _blocks_product_section_product_section_component__WEBPACK_IMPORTED_MODULE_3__["ProductSectionComponent"], _blocks_Portfolio_section_Portfolio_section_component__WEBPACK_IMPORTED_MODULE_4__["PortfolioSectionComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/product/product.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/product/product.component.ts ***!
  \****************************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ProductComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProductComponent.ɵfac = function ProductComponent_Factory(t) { return new (t || ProductComponent)(); };
ProductComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductComponent, selectors: [["app-product"]], decls: 4, vars: 0, consts: [[1, "page-banner", "text-center"]], template: function ProductComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " PRODUCTS\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "product works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2R1Y3QvcHJvZHVjdC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-product',
                templateUrl: './product.component.html',
                styleUrls: ['./product.component.scss']
            }]
    }], function () { return []; }, null); })();


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
const environment = {
    production: false
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/pony/Desktop/Pony/YangZang/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map