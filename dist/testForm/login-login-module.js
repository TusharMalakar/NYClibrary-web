(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./src/app/login/login-page/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/login/login-page/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.medium-list{\n  margin: auto;\n  width: auto;\n  padding:10px\n}\n\n.list-viewer-wrapper {\n  border: 1px solid rgba(0, 0, 0, .03);\n  box-shadow: 0 2px 2px rgba(0, 0, 0, .24), 0 0 2px rgba(0, 0, 0, .12);\n  margin: 20px;\n}\n\n.list-header-title {\n  color: rgba(0, 0, 0, .54);\n  background: rgba(0, 0, 0, .03);\n  padding: 8px 20px;\n  font-weight: bold;\n}\n\n.form-container {\n  display: flex;\n  flex-direction: column; \n  padding: 20px;\n  \n}\n\n.form-button {\n  width: 90%;\n  margin-left: auto;\n  margin-right: auto;  \n  \n}\n\ninput.form-control-password::-webkit-outer-spin-button,\ninput.form-control-password::-webkit-inner-spin-button {\n  display: none;\n}\n\ninput.form-control-password {\n  -moz-appearance: textfield;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4tcGFnZS9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1g7QUFDRjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxvRUFBb0U7RUFDcEUsWUFBWTtBQUNkOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLDhCQUE4QjtFQUM5QixpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixhQUFhOztBQUVmOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixrQkFBa0I7O0FBRXBCOztBQUVBOztFQUVFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1QiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLXBhZ2UvbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLm1lZGl1bS1saXN0e1xuICBtYXJnaW46IGF1dG87XG4gIHdpZHRoOiBhdXRvO1xuICBwYWRkaW5nOjEwcHhcbn1cblxuLmxpc3Qtdmlld2VyLXdyYXBwZXIge1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4wMyk7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDJweCByZ2JhKDAsIDAsIDAsIC4yNCksIDAgMCAycHggcmdiYSgwLCAwLCAwLCAuMTIpO1xuICBtYXJnaW46IDIwcHg7XG59XG5cbi5saXN0LWhlYWRlci10aXRsZSB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIC41NCk7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgLjAzKTtcbiAgcGFkZGluZzogOHB4IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uZm9ybS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBcbiAgcGFkZGluZzogMjBweDtcbiAgXG59XG5cbi5mb3JtLWJ1dHRvbiB7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87ICBcbiAgXG59XG5cbmlucHV0LmZvcm0tY29udHJvbC1wYXNzd29yZDo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbixcbmlucHV0LmZvcm0tY29udHJvbC1wYXNzd29yZDo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbmlucHV0LmZvcm0tY29udHJvbC1wYXNzd29yZCB7XG4gIC1tb3otYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/login/login-page/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/login/login-page/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = \"medium-list\">\n    <div class=\"list-viewer-wrapper\">\n      <div class=\"list-header-title\">Log-in</div>\n      \n      <form [formGroup] = \"form\" (ngSubmit) = \"onSubmit()\">\n  \n        <!-- Username Field -->\n        <div class=\"form-container\">\n          <mat-form-field>\n  \n              <!-- Associate key from ts file: username -->\n              <input \n                  formControlName = \"username\"\n                  matInput\n                  id=\"username\" \n                  type=\"email\" \n                  class=\"form-control\"\n                  placeholder=\"Hunter Email...\">\n          </mat-form-field>\n          <div *ngIf=\"username.touched && username.invalid\" \n                class=\"alert alert-danger\">\n                <mat-error *ngIf=\"username.errors.required\">Email is <strong>Required!</strong></mat-error>\n                <mat-error *ngIf=\"username.errors.email\">Invalid <strong>Email!</strong></mat-error>\n          </div>\n        </div>\n        \n        <!-- Password Field -->\n        <div class=\"form-container\">\n            <mat-form-field>\n    \n                <!-- Associate key from ts file: username -->\n                <input \n                    formControlName = \"password\"\n                    matInput\n                    id=\"password\" \n                    type=\"text\" \n                    class=\"form-control-password\"\n                    placeholder=\"Password...\"\n                    [type] = \"hide ? 'password' : 'text' \"\n                    autocomplete=\"off\">\n                <mat-icon matSuffix (click) = \"hide = !hide\">{{ hide ? 'visibility_of' : 'visibility' }}</mat-icon>\n            </mat-form-field>\n            <div *ngIf=\"password.touched && password.invalid\" \n                  class=\"alert alert-danger\">\n                  <mat-error *ngIf=\"password.errors.required\">Password <strong>Required!</strong></mat-error>\n                  <mat-error *ngIf=\"password.errors.minlength\">Password must be of size {{ password.errors.minlength.requiredLength }}!</mat-error>\n            </div>\n        </div>\n  \n          <div class=\"form-container\">\n              <button class=\"form-button\" mat-raised-button color = \"primary\" type=\"submit\" [disabled] = \"!form.valid\">Login</button>\n          </div>      \n  \n      </form>\n          <div class=\"form-container\">\n              <button class=\"form-button\"  mat-raised-button color = \"primary\" (click) = \"register()\">Register</button>\n          </div>\n          \n    </div>\n  </div>\n  \n  \n  \n  "

/***/ }),

/***/ "./src/app/login/login-page/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/login/login-page/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_dbAccess_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/dbAccess/user.service */ "./src/app/shared/dbAccess/user.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_models_login_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/models/login.model */ "./src/app/shared/models/login.model.ts");






var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, userService, router) {
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.router = router;
        this.user = new src_app_shared_models_login_model__WEBPACK_IMPORTED_MODULE_5__["LogInModel"]();
        this.hide = true;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.form = this.formBuilder.group({
            username: [this.user.username,
                [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email
                ]],
            password: [this.user.password, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6),
                ]]
        });
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.user = Object.assign({}, this.form.value);
        this.userService.userAuthentication(this.user.username, this.user.password)
            .subscribe(function (data) {
            if (data.success) {
                //storing json object to localStorage
                localStorage.setItem('accessToken', data.token);
                _this.router.navigate(['/home']);
                console.log(_this.user.username + "  logged-in");
            }
            else {
                alert(data.error);
                _this.router.navigate(['/login']);
            }
            ;
            return;
        });
    };
    LoginComponent.prototype.register = function () {
        this.router.navigate(['/register']);
    };
    Object.defineProperty(LoginComponent.prototype, "username", {
        get: function () {
            return this.form.get('username');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginComponent.prototype, "password", {
        get: function () {
            return this.form.get('password');
        },
        enumerable: true,
        configurable: true
    });
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-name-editor',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login-page/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login-page/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _shared_dbAccess_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());

//testuser1@myhunter.cuny.edu 


/***/ }),

/***/ "./src/app/login/login-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/*! exports provided: LoginRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRoutingModule", function() { return LoginRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _login_page_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login-page/login.component */ "./src/app/login/login-page/login.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var routes = [
    {
        path: '',
        component: _login_page_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"]
    }
];
var LoginRoutingModule = /** @class */ (function () {
    function LoginRoutingModule() {
    }
    LoginRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        })
    ], LoginRoutingModule);
    return LoginRoutingModule;
}());



/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _login_page_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login-page/login.component */ "./src/app/login/login-page/login.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/login/login-routing.module.ts");











var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["NgModule"])({
            declarations: [_login_page_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"],
                _login_routing_module__WEBPACK_IMPORTED_MODULE_10__["LoginRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
                //Angular Material
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTabsModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"]
            ]
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ }),

/***/ "./src/app/shared/models/login.model.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/models/login.model.ts ***!
  \**********************************************/
/*! exports provided: LogInModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogInModel", function() { return LogInModel; });
var LogInModel = /** @class */ (function () {
    function LogInModel() {
    }
    return LogInModel;
}());



/***/ })

}]);
//# sourceMappingURL=login-login-module.js.map