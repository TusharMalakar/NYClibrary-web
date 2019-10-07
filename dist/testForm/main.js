(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./conversations/conversations.module": [
		"./src/app/conversations/conversations.module.ts",
		"default~conversations-conversations-module~home-home-module~login-login-module~register-register-mod~dcefec69",
		"default~conversations-conversations-module~home-home-module~user-user-module",
		"default~conversations-conversations-module~home-home-module",
		"conversations-conversations-module"
	],
	"./home/home.module": [
		"./src/app/home/home.module.ts",
		"default~conversations-conversations-module~home-home-module~login-login-module~register-register-mod~dcefec69",
		"default~conversations-conversations-module~home-home-module~user-user-module",
		"default~conversations-conversations-module~home-home-module",
		"home-home-module"
	],
	"./login/login.module": [
		"./src/app/login/login.module.ts",
		"default~conversations-conversations-module~home-home-module~login-login-module~register-register-mod~dcefec69",
		"login-login-module"
	],
	"./register/register.module": [
		"./src/app/register/register.module.ts",
		"default~conversations-conversations-module~home-home-module~login-login-module~register-register-mod~dcefec69",
		"register-register-module"
	],
	"./user/user.module": [
		"./src/app/user/user.module.ts",
		"default~conversations-conversations-module~home-home-module~login-login-module~register-register-mod~dcefec69",
		"default~conversations-conversations-module~home-home-module~user-user-module",
		"user-user-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

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
/* harmony import */ var _guard_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./guard/auth.guard */ "./src/app/guard/auth.guard.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




/**
* @author Tushar Malakar
*
*	@brief Configure the routes to allow for lazy loading of feature modules.
*         Each feature module will have it's own routing module that will tell
*         the router where to go to load relevant components.
*
*	@param[routes] ,  array that will contain our routes
*	@param[path]       ,  string that will redirect to the module specified on 'loadChildren'
*	@param[loadChildren]       , relative path to the module, a hash mark, and the module's class name
*	@param[canActivate]       , auth guard that will prevent un-authorized users from gaining access to the module
*	@return nothing
*/
var routes = [
    {
        path: 'login',
        loadChildren: './login/login.module#LoginModule',
        canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]]
    },
    {
        path: 'register',
        loadChildren: './register/register.module#RegisterModule',
        canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]]
    },
    {
        path: 'home',
        loadChildren: './home/home.module#HomeModule',
        canLoad: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]]
    },
    {
        path: 'user',
        loadChildren: './user/user.module#UserModule',
        canLoad: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]]
    },
    {
        path: 'conversations',
        loadChildren: './conversations/conversations.module#ConversationsModule',
        canLoad: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]]
    },
    //default component
    {
        path: '**',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            //Lets angular know that this module is the root routing module.
            //It will configure all the routes passed to it, give access to router directives, and register the RouterService.
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n"

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
        this.title = 'testForm';
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
/* harmony import */ var _shared_dbAccess_conversation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/dbAccess/conversation.service */ "./src/app/shared/dbAccess/conversation.service.ts");
/* harmony import */ var _guard_auth_inspector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./guard/auth.inspector */ "./src/app/guard/auth.inspector.ts");
/* harmony import */ var _guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./guard/auth.guard */ "./src/app/guard/auth.guard.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_dbAccess_user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/dbAccess/user.service */ "./src/app/shared/dbAccess/user.service.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm5/chips.es5.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm5/autocomplete.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var ng_pick_datetime__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ng-pick-datetime */ "./node_modules/ng-pick-datetime/picker.js");






//Declares our routing






//These are the materials that will make our site adaptable












//Angular Flex Module





//Clock

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_16__["NavbarComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
                //Forms Modules
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
                //HTTP requests
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
                //Material
                _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__["MatSidenavModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__["MatToolbarModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__["MatMenuModule"],
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_25__["ScrollDispatchModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_18__["MatChipsModule"],
                _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_19__["MatAutocompleteModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_20__["MatTableModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_21__["MatDatepickerModule"],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_26__["MatNativeDateModule"],
                _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_19__["MatAutocompleteModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_22__["MatSelectModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__["MatDialogModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_27__["MatListModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_28__["MatCardModule"],
                //Our Routes will be here to make code cleaner
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_24__["FlexLayoutModule"],
                //Clock         
                ng_pick_datetime__WEBPACK_IMPORTED_MODULE_29__["OwlDateTimeModule"],
                ng_pick_datetime__WEBPACK_IMPORTED_MODULE_29__["OwlNativeDateTimeModule"],
            ],
            providers: [
                _shared_dbAccess_user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"],
                _shared_dbAccess_conversation_service__WEBPACK_IMPORTED_MODULE_1__["ConversationService"],
                _guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"],
                    useClass: _guard_auth_inspector__WEBPACK_IMPORTED_MODULE_2__["AuthInterceptor"],
                    multi: true
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/guard/auth.guard.ts":
/*!*************************************!*\
  !*** ./src/app/guard/auth.guard.ts ***!
  \*************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_dbAccess_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/dbAccess/user.service */ "./src/app/shared/dbAccess/user.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, service) {
        this.router = router;
        this.service = service;
    }
    AuthGuard.prototype.canActivate = function () {
        if (localStorage.getItem('accessToken') == null) {
            return true;
        }
        else {
            this.router.navigate(["home"]);
            return false;
        }
    };
    AuthGuard.prototype.canLoad = function () {
        if (localStorage.getItem('accessToken')) {
            return true;
        }
        else {
            this.router.navigate(["/login"]);
            return false;
        }
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _shared_dbAccess_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/guard/auth.inspector.ts":
/*!*****************************************!*\
  !*** ./src/app/guard/auth.inspector.ts ***!
  \*****************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs_add_operator_do__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/operator/do */ "./node_modules/rxjs-compat/_esm5/add/operator/do.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(router) {
        this.router = router;
    }
    //Handler: Will intercept any http request going out.
    AuthInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        //If the request doesn't need auth; use this.
        //req.headers.get('No-Auth') :  This checks the header of the request
        //next.handle(req.clone()) : clone the whole request and send it
        if (req.headers.get('No-Auth') == "True")
            return next.handle(req.clone());
        //If we do need auth, first if will fail.
        //localStorage.getItem('accessToken') : Will check if there is a token in local storage
        if (localStorage.getItem('accessToken') != null) {
            //Copies request that was caught and adds the authorization
            var clonedreq = req.clone({
                headers: req.headers.set("capstoneAuth", localStorage.getItem('accessToken'))
            });
            //This sends the request that was cloned.
            return next.handle(clonedreq).do(
            //If Successful
            function (succ) { }, 
            //If error
            function (err) {
                if (err.status === 401)
                    _this.router.navigateByUrl('/login');
            });
        }
        //If no token, send user to login.
        else {
            this.router.navigateByUrl('/login');
        }
    };
    AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AuthInterceptor);
    return AuthInterceptor;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n}\n\n.container .mat-drawer {\n    min-width: 200px;\n}\n\n.container .mat-drawer .mat-button {\n    display: block;\n    width: 100%;\n    text-align: left;\n}\n\n.spacer {\n    flex: 1 1 auto;\n}\n\n.mat-toolbar-row .mat-button {\n    background-color: transparent;\n    font-size: 20px;\n    \n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsUUFBUTtJQUNSLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixlQUFlOztBQUVuQiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG59XG5cbi5jb250YWluZXIgLm1hdC1kcmF3ZXIge1xuICAgIG1pbi13aWR0aDogMjAwcHg7XG59XG5cbi5jb250YWluZXIgLm1hdC1kcmF3ZXIgLm1hdC1idXR0b24ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5zcGFjZXIge1xuICAgIGZsZXg6IDEgMSBhdXRvO1xufVxuXG4ubWF0LXRvb2xiYXItcm93IC5tYXQtYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgXG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-drawer-container class=\"container\" autosize >\n  <!-- Will be triggered by (click) = \"drawer.toggle()\" -->\n   \n  <div class=\"sidenav-content\">\n      <mat-toolbar color=\"primary\">\n          <mat-toolbar-row>\n              <!-- \n                drawer.toggle(): will call #drawer and will bring the sidenav into view\n              -->\n              <button mat-icon-button (click) = \"drawer.toggle()\">\n                      <mat-icon>menu</mat-icon>\n              </button>\n              <button mat-button routerLink=\"/home\">Hunter Collab</button>\n       \n              <span class=\"spacer\"></span>\n              \n              <mat-menu #menu=\"matMenu\" >\n                \n              </mat-menu>\n\n          </mat-toolbar-row>\n      </mat-toolbar>\n      <router-outlet></router-outlet>\n  </div>\n  \n  <mat-drawer #drawer class=\"sidenav\">\n          <button mat-menu-item routerLink=\"/home\">\n            <mat-icon>home</mat-icon>\n            <span>Home</span>\n          </button> \n\n          <button mat-menu-item routerLink=\"/user\">\n            <mat-icon>person</mat-icon>\n            <span>Profile</span>\n          </button> \n\n          <button mat-menu-item routerLink=\"/conversations\">\n            <mat-icon >send</mat-icon>\n            <span>Messenger</span>\n          </button> \n\n          <button mat-menu-item (click)=\"logOut()\">\n            <mat-icon>logout</mat-icon>\n            <span>Logout</span>\n          </button>          \n  </mat-drawer>\n \n</mat-drawer-container>\n\n\n\n\n   \n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(router) {
        this.router = router;
        this.panelOpenState = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.GoToHomePage = function () {
        this.router.navigate(['/home']);
    };
    NavbarComponent.prototype.GoToProfile = function () {
        this.router.navigate(['/user']);
    };
    NavbarComponent.prototype.logOut = function () {
        localStorage.removeItem('accessToken');
        this.router.navigate(['/login']);
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/shared/dbAccess/conversation.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/dbAccess/conversation.service.ts ***!
  \*********************************************************/
/*! exports provided: ConversationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConversationService", function() { return ConversationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var ConversationService = /** @class */ (function () {
    function ConversationService(http) {
        this.http = http;
        this.rootUrl = 'http://13.58.204.157:5000';
    }
    //send group message to collab group
    ConversationService.prototype.sendMessageToCollabGroup = function (message, collabID) {
        var body = {
            message: message,
            collabId: collabID
        };
        return this.http.post(this.rootUrl + "/messaging/sendMessage", body);
    };
    //send personal message to collab members
    ConversationService.prototype.sendPersonalMessage = function (message, recipient) {
        var body = {
            message: message,
            recipient: recipient
        };
        console.log(message + " " + recipient);
        return this.http.post(this.rootUrl + "/messaging/sendMessage", body);
    };
    //return current user conversations
    ConversationService.prototype.myCoversations = function () {
        return this.http.get(this.rootUrl + "/messaging/myConvos");
    };
    ConversationService.prototype.getMessages = function (ident, collab) {
        if (collab) {
            var body = {
                page: 0,
                collabId: ident
            };
            return this.http.post(this.rootUrl + "/messaging/getMessages", body);
        }
        else {
            var body = {
                page: 0,
                otherUser: ident
            };
            return this.http.post(this.rootUrl + "/messaging/getMessages", body);
        }
    };
    /**
      page should be 0, 1, 2, 3, et cetera.
      If you set page = 0, it will return the latest 20 messages.
      If you set page = 1, it will skip the latest 20 messages and return the next 20 messages.
      If you set page = 2, it will skip the latest 40 messages and return the next 20 messages.
      …. You get the idea.
  
      otherUser should be the other user’s username
     */
    ConversationService.prototype.LoadOtherUserMessage = function (page, otherUser) {
        var body = {
            page: page,
            otherUser: otherUser
        };
        return this.http.post(this.rootUrl + "/messaging/getMessages", body);
    };
    ConversationService.prototype.LoadGroupMessage = function (page, CollabId) {
        var body = {
            page: page,
            collabId: CollabId
        };
        return this.http.post(this.rootUrl + "/messaging/getMessages", body);
    };
    ConversationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ConversationService);
    return ConversationService;
}());



/***/ }),

/***/ "./src/app/shared/dbAccess/user.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/dbAccess/user.service.ts ***!
  \*************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");




var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.rootUrl = 'http://13.58.204.157:5000';
    }
    UserService.prototype.getToken = function () {
        return localStorage.getItem('accessToken');
    };
    //"/user?username="+UserName+"&password="password
    UserService.prototype.userAuthentication = function (userName, password) {
        var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'No-Auth': 'True' });
        return this.http.get(this.rootUrl + "/auth/login?" + "username=" + userName + "&password=" + password, { headers: reqHeader });
    };
    UserService.prototype.registerUser = function (username, password) {
        var body = {
            username: username,
            password: password,
        };
        //This request does not need authorization 
        var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'No-Auth': 'True' });
        //Adding Parameters
        var requestedUrl = this.rootUrl + "/user?username=" + username + "&password=" + password;
        //Testing url 
        console.log(requestedUrl);
        //requestUrl: endpoint
        //body: Needed, but not used
        //{headers : reqHeader} : Creating object from the header library; set to non-auth 
        return this.http.put(requestedUrl, body, { headers: reqHeader });
    };
    UserService.prototype.isAuthenticated = function () {
        return localStorage.getItem('accessToken') !== null;
    };
    //url + json authentication
    UserService.prototype.getUserdetails = function () {
        return this.http.get(this.rootUrl + "/user");
    };
    UserService.prototype.getMemberdetails = function (username) {
        return this.http.get(this.rootUrl + "/user/" + username);
    };
    UserService.prototype.getConversations = function () {
        return this.http.get(this.rootUrl + "/messaging/myConvos");
    };
    UserService.prototype.getUserSkills = function (userName) {
        return this.http.get(this.rootUrl + "/user/skills/" + userName).toPromise();
    };
    UserService.prototype.getUserClasses = function (userName) {
        return this.http.get(this.rootUrl + "/user/classes/" + userName).toPromise();
    };
    UserService.prototype.getUserSkillsAndClasses = function (username) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var xAxisReq, classes, skills;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        xAxisReq = [];
                        return [4 /*yield*/, this.getUserSkills(username).then(function (result) {
                                xAxisReq = result["skills"];
                            })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.getUserClasses(username).then(function (result) {
                                classes = result["classes"];
                            })];
                    case 2:
                        _a.sent();
                        /*
                        for(let classTaken of classes){
                            xAxisReq.push({
                            skillOrClass: classTaken,
                            type: "class"
                          });
                        
                        for(let skill of skills){
                          xAxisReq.push({
                          skillOrClass: skill,
                          type: "skill"
                        });
                      }
                      */
                        return [2 /*return*/, xAxisReq];
                }
            });
        });
    };
    UserService.prototype.searchSkills = function (constrain) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set("query", constrain);
        return this.http.get(this.rootUrl + "/search/skills", { params: params });
    };
    UserService.prototype.searchClasses = function (constrain) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set("query", constrain);
        return this.http.get(this.rootUrl + "/search/classes", { params: params });
    };
    UserService.prototype.getPicture = function () {
        return this.http.get(this.rootUrl + "/user/profilePicture", { responseType: 'text' });
    };
    UserService.prototype.getMemberPicture = function (username) {
        return this.http.get(this.rootUrl + "/user/profilePicture?username=" + username, { responseType: 'text' });
    };
    UserService.prototype.uploadProfilePicture = function (fileToUpload) {
        var formData = new FormData();
        formData.append('pic', fileToUpload, fileToUpload.name);
        return this.http.post(this.rootUrl + "/user/profilePicture", formData);
    };
    // /collab/deleteCollab 
    ///collab/getRecommendedCollab
    //___________POST_________________
    //you can update user profile taking all these as input but "Not required"
    UserService.prototype.updateUserProfile = function (userData) {
        var body = {
            name: userData.username,
            github: userData.github,
            linkedin: userData.linkedin,
        };
        return this.http.post(this.rootUrl + "/user", body);
    };
    UserService.prototype.updateUserSkills = function (skills) {
        var body = {
            skills: skills,
        };
        console.log(body);
        return this.http.post(this.rootUrl + "/user", body);
    };
    UserService.prototype.updateUserclass = function (classes) {
        var body = {
            classes: classes
        };
        console.log(body);
        return this.http.post(this.rootUrl + "/user", body);
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserService);
    return UserService;
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/snow/WebDevelopment/Core_Web/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map