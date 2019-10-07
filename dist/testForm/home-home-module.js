(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/home/collab-card/collab-card.component.css":
/*!************************************************************!*\
  !*** ./src/app/home/collab-card/collab-card.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-card {\n    max-width: 800px;\n    margin: auto;\n    padding: 0px;\n    height: 100%;\n    background: rgba(214, 212, 212, 0.048);\n    border: .4px solid rgb(59, 59, 59);\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n.mat-card-header {\n   \n    font-weight: bold;\n    display: inline;\n    \n}\n\n.mat-card-title  {\n    margin-left: -16.5px;\n    margin-right: -16px;\n    margin-top: -.5px;\n    color: rgba(0, 0, 0, 0.836);\n    background: rgba(34, 34, 34, 0.13);\n    padding: 5px;\n}\n\n.mat-card-content {\n    margin: 0px;\n}\n\n.mat-card>.mat-card-actions:last-child {\n    margin-bottom: 5px;\n   \n}\n\n.mat-card-actions .mat-button, .mat-card-actions .mat-raised-button{\n    margin: 0px;\n    margin-left: 22px;\n}\n\n.mat-expansion-panel {\n    background: rgba(255, 254, 254, 0.151);\n}\n\n.requirements {\n    margin-left: 30px;\n    margin-right: 30px;\n    \n}\n\n.pull-right {\n    display:flex;\n    margin-left:auto; \n    margin-right:0;\n}\n\n.center {\n    display:flex;\n    margin:auto;\n    margin-top:10px;\n}\n\n.pull-left {\n    display:flex;\n    margin-left:0; \n    margin-right:auto;\n}\n\n.content .description{\n    font-size: 20px;\n    margin-left: 30px;\n    margin-right: 30px;\n    margin-bottom: 10px;\n}\n\n.content .date,.location,.duration{\n    margin-left: 40px;\n    margin-right: 40px;\n}\n\n.table{\n    width: 100%;\n    height: 100%;\n    overflow-x:  auto;\n    overflow-y:  auto;\n}\n\n.mat-card {\n    font-family: Georgia, 'Times New Roman', Times, serif;\n}\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9jb2xsYWItY2FyZC9jb2xsYWItY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtJQUNaLHNDQUFzQztJQUN0QyxrQ0FBa0M7SUFDbEMseUVBQXlFO0FBQzdFOztBQUVBOztJQUVJLGlCQUFpQjtJQUNqQixlQUFlOztBQUVuQjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLDJCQUEyQjtJQUMzQixrQ0FBa0M7SUFDbEMsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGtCQUFrQjs7QUFFdEI7O0FBQ0E7SUFDSSxXQUFXO0lBQ1gsaUJBQWlCO0FBQ3JCOztBQUNBO0lBQ0ksc0NBQXNDO0FBQzFDOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjs7QUFFdEI7O0FBR0E7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEI7O0FBR0E7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBR0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxxREFBcUQ7QUFDekQiLCJmaWxlIjoic3JjL2FwcC9ob21lL2NvbGxhYi1jYXJkL2NvbGxhYi1jYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWNhcmQge1xuICAgIG1heC13aWR0aDogODAwcHg7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyMTQsIDIxMiwgMjEyLCAwLjA0OCk7XG4gICAgYm9yZGVyOiAuNHB4IHNvbGlkIHJnYig1OSwgNTksIDU5KTtcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsMCwwLDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xufVxuXG4ubWF0LWNhcmQtaGVhZGVyIHtcbiAgIFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICBcbn1cblxuLm1hdC1jYXJkLXRpdGxlICB7XG4gICAgbWFyZ2luLWxlZnQ6IC0xNi41cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAtMTZweDtcbiAgICBtYXJnaW4tdG9wOiAtLjVweDtcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgzNik7XG4gICAgYmFja2dyb3VuZDogcmdiYSgzNCwgMzQsIDM0LCAwLjEzKTtcbiAgICBwYWRkaW5nOiA1cHg7XG59XG5cbi5tYXQtY2FyZC1jb250ZW50IHtcbiAgICBtYXJnaW46IDBweDtcbn1cblxuLm1hdC1jYXJkPi5tYXQtY2FyZC1hY3Rpb25zOmxhc3QtY2hpbGQge1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgIFxufVxuLm1hdC1jYXJkLWFjdGlvbnMgLm1hdC1idXR0b24sIC5tYXQtY2FyZC1hY3Rpb25zIC5tYXQtcmFpc2VkLWJ1dHRvbntcbiAgICBtYXJnaW46IDBweDtcbiAgICBtYXJnaW4tbGVmdDogMjJweDtcbn1cbi5tYXQtZXhwYW5zaW9uLXBhbmVsIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU0LCAyNTQsIDAuMTUxKTtcbn1cblxuLnJlcXVpcmVtZW50cyB7XG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xuICAgIFxufVxuXG5cbi5wdWxsLXJpZ2h0IHtcbiAgICBkaXNwbGF5OmZsZXg7XG4gICAgbWFyZ2luLWxlZnQ6YXV0bzsgXG4gICAgbWFyZ2luLXJpZ2h0OjA7XG59XG5cblxuLmNlbnRlciB7XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIG1hcmdpbjphdXRvO1xuICAgIG1hcmdpbi10b3A6MTBweDtcbn1cbiAgXG4ucHVsbC1sZWZ0IHtcbiAgICBkaXNwbGF5OmZsZXg7XG4gICAgbWFyZ2luLWxlZnQ6MDsgXG4gICAgbWFyZ2luLXJpZ2h0OmF1dG87XG59XG5cbi5jb250ZW50IC5kZXNjcmlwdGlvbntcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5jb250ZW50IC5kYXRlLC5sb2NhdGlvbiwuZHVyYXRpb257XG4gICAgbWFyZ2luLWxlZnQ6IDQwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xufVxuXG5cbi50YWJsZXtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb3ZlcmZsb3cteDogIGF1dG87XG4gICAgb3ZlcmZsb3cteTogIGF1dG87XG59XG5cbi5tYXQtY2FyZCB7XG4gICAgZm9udC1mYW1pbHk6IEdlb3JnaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XG59XG5cblxuXG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/home/collab-card/collab-card.component.html":
/*!*************************************************************!*\
  !*** ./src/app/home/collab-card/collab-card.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <mat-card-header >\n\n   \n      <mat-card-title> \n          <mat-panel-title>\n              <span class = \"center\" >{{collabData?.title}}</span>\n          </mat-panel-title>\n          <mat-panel-description>\n              <span class = \"pull-right\" ><mat-icon>group</mat-icon> : {{collabData?.members.length}} / {{ collabData?.size}}</span>\n          </mat-panel-description>\n      </mat-card-title>\n\n  </mat-card-header>\n  <mat-card-content>\n    <mat-accordion>\n        <div class = \"content\">\n            <p class=\"description\">{{ collabData?.description }} </p>\n            <p class=\"date\">Date: {{ collabData?.date | date:'medium' }}</p>\n            <p class=\"duration\">Apply By: {{ collabData?.duration | date:'medium' }}</p>\n            <p class=\"location\">Location: {{ collabData?.location }}</p>\n            <mat-divider></mat-divider><br />\n            <div class = \"requirements\">\n                <mat-chip-list>\n                    Classes: \n                    <mat-chip *ngFor = \"let class of collabData?.classes\">\n                      {{ class }}\n                    </mat-chip>\n                </mat-chip-list>\n                <br>\n                <mat-chip-list>\n                    Skills: \n                    <mat-chip *ngFor=\"let skill of collabData?.skills\">\n                      {{ skill }}\n                    </mat-chip>\n                </mat-chip-list>\n            </div>\n      \n        </div>\n        <br>\n        \n        <!-- Event Binding: In this case the event is (opened) -->\n        <mat-expansion-panel \n                       (opened)=\"panelWasOpen1()\"\n                       (closed)=\"panelOpenState1 = false\">\n        <mat-expansion-panel-header>\n          <mat-panel-title>\n              <h4>Members</h4>\n          </mat-panel-title>\n          <mat-panel-description>\n          </mat-panel-description>\n          </mat-expansion-panel-header>\n\n            <ng-container class=\"table-container\">\n              <div class=\"table\">\n                <collab-table [table] = \"table\" [xAxisReq] = \"xAxisReq\"></collab-table>\n              </div>\n            </ng-container>\n          \n          \n        </mat-expansion-panel>\n    </mat-accordion>\n    \n  </mat-card-content>\n\n  <mat-expansion-panel \n                       (opened)=\"panelWasOpen2()\"\n                       (closed)=\"panelOpenState2 = false\">\n        <mat-expansion-panel-header>\n          <mat-panel-title>\n            <h4>Actions</h4>\n          </mat-panel-title>\n          <mat-panel-description>\n          </mat-panel-description>\n          </mat-expansion-panel-header>\n            <mat-card-actions>\n              <button *ngIf=\"checkPartOf() == false\" mat-raised-button color = \"primary\" (click) = \"joinCollab()\"  > Join </button>\n              <button *ngIf=\"checkPartOf() == true\"  mat-raised-button color = \"primary\" (click) = \"leaveCollab()\" > Leave </button>\n              <button *ngIf=\"checkOwner() == true\"   mat-raised-button color = \"primary\" (click) = \"deleteCollab()\"> Delete </button>\n              <button *ngIf=\"checkOwner() == true\"   mat-raised-button color = \"primary\" (click) = \"editCollab()\">    Edit</button>\n            </mat-card-actions>   \n        </mat-expansion-panel>\n\n  \n\n</mat-card>"

/***/ }),

/***/ "./src/app/home/collab-card/collab-card.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/home/collab-card/collab-card.component.ts ***!
  \***********************************************************/
/*! exports provided: CollabCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollabCardComponent", function() { return CollabCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_shared_dbAccess_collabs_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/dbAccess/collabs.service */ "./src/app/shared/dbAccess/collabs.service.ts");
/* harmony import */ var _shared_dbAccess_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../shared/dbAccess/user.service */ "./src/app/shared/dbAccess/user.service.ts");
/* harmony import */ var _shared_models_collab_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../shared/models/collab.model */ "./src/app/shared/models/collab.model.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_models_tableBuilder_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/models/tableBuilder.model */ "./src/app/shared/models/tableBuilder.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var CollabCardComponent = /** @class */ (function () {
    function CollabCardComponent(userService, collabService, router) {
        this.userService = userService;
        this.collabService = collabService;
        this.router = router;
        //Values being passed to collab-table
        this.table = [];
        this.xAxisReq = [];
        this.panelOpenState1 = false;
        this.panelOpenState2 = false;
        this.alreadyBuilt = false;
        this.partOf = false;
        this.isOwner = false;
    }
    CollabCardComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userService.getUserdetails().subscribe(function (userData) { return _this.userData = userData; })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /*
    Function that will build our table.
    async: Will allow us to do await functions
    */
    CollabCardComponent.prototype.makeTable = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var yAxisUsers, _a, _i, yAxisUsers_1, y, tableRow, yAxisUsers, _b, _c, yAxisUsers_2, y, tableRow;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_d) {
                switch (_d.label) {
                    case 0:
                        if (!this.alreadyBuilt) return [3 /*break*/, 6];
                        this.table = [];
                        yAxisUsers = void 0;
                        //Fuction will stop here until function getAllRequred returns
                        _a = this;
                        return [4 /*yield*/, this.getAllRequired()];
                    case 1:
                        //Fuction will stop here until function getAllRequred returns
                        _a.xAxisReq = _d.sent();
                        //Will members of the collaboration
                        yAxisUsers = this.collabData.members;
                        _i = 0, yAxisUsers_1 = yAxisUsers;
                        _d.label = 2;
                    case 2:
                        if (!(_i < yAxisUsers_1.length)) return [3 /*break*/, 5];
                        y = yAxisUsers_1[_i];
                        return [4 /*yield*/, this.checkIfKnown(y, this.xAxisReq)];
                    case 3:
                        tableRow = _d.sent();
                        this.table.push(tableRow);
                        _d.label = 4;
                    case 4:
                        _i++;
                        return [3 /*break*/, 2];
                    case 5: return [3 /*break*/, 11];
                    case 6:
                        this.alreadyBuilt = true;
                        yAxisUsers = void 0;
                        //Fuction will stop here until function getAllRequred returns
                        _b = this;
                        return [4 /*yield*/, this.getAllRequired()];
                    case 7:
                        //Fuction will stop here until function getAllRequred returns
                        _b.xAxisReq = _d.sent();
                        //Will members of the collaboration
                        yAxisUsers = this.collabData.members;
                        _c = 0, yAxisUsers_2 = yAxisUsers;
                        _d.label = 8;
                    case 8:
                        if (!(_c < yAxisUsers_2.length)) return [3 /*break*/, 11];
                        y = yAxisUsers_2[_c];
                        return [4 /*yield*/, this.checkIfKnown(y, this.xAxisReq)];
                    case 9:
                        tableRow = _d.sent();
                        this.table.push(tableRow);
                        _d.label = 10;
                    case 10:
                        _c++;
                        return [3 /*break*/, 8];
                    case 11: return [2 /*return*/];
                }
            });
        });
    };
    CollabCardComponent.prototype.RefreshPage = function () {
        this.getAllRequired();
        //Will members of the collaboration
        this.yAxisUsers = this.collabData.members;
    };
    //WIll check if a user knows skill or class, from the list of classes and skills that a user knows
    CollabCardComponent.prototype.checkIfKnown = function (userName, listOfRequired) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var tmp, knownByUser, _i, listOfRequired_1, x;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        tmp = null;
                        tmp = new src_app_shared_models_tableBuilder_model__WEBPACK_IMPORTED_MODULE_5__["TableBuilder"](userName);
                        _i = 0, listOfRequired_1 = listOfRequired;
                        _a.label = 1;
                    case 1:
                        if (!(_i < listOfRequired_1.length)) return [3 /*break*/, 4];
                        x = listOfRequired_1[_i];
                        //Will return both skills and classes in a single array
                        return [4 /*yield*/, this.userService.getUserSkillsAndClasses(userName).then(function (result) {
                                knownByUser = result;
                            })];
                    case 2:
                        //Will return both skills and classes in a single array
                        _a.sent();
                        if (knownByUser.includes(x)) {
                            //console.log(userName , " knows ", x);
                            tmp.setKnown(x, true);
                        }
                        else {
                            //console.log(userName , " doesn't know ", x);
                            tmp.setKnown(x, false);
                        }
                        _a.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/, tmp];
                }
            });
        });
    };
    CollabCardComponent.prototype.getAllRequired = function () {
        var xAxisReq = [];
        xAxisReq = (this.collabData.skills).concat(this.collabData.classes);
        return xAxisReq;
    };
    CollabCardComponent.prototype.actionCheck = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.isUserOwner()];
                    case 1:
                        _a.sent();
                        this.isPartOf();
                        return [2 /*return*/];
                }
            });
        });
    };
    CollabCardComponent.prototype.isUserOwner = function () {
        if (this.collabData.owner == this.userData['username']) {
            this.isOwner = true;
        }
        else {
            this.isOwner = false;
        }
    };
    CollabCardComponent.prototype.isPartOf = function () {
        for (var _i = 0, _a = this.collabData.members; _i < _a.length; _i++) {
            var member = _a[_i];
            if (member == this.userData['username']) {
                this.partOf = true;
            }
        }
    };
    CollabCardComponent.prototype.checkPartOf = function () {
        return this.partOf;
    };
    CollabCardComponent.prototype.checkOwner = function () {
        return this.isOwner;
    };
    CollabCardComponent.prototype.joinCollab = function () {
        var _this = this;
        this.collabService.joinCollab(this.collabData._id)
            .subscribe(function (res) {
            if (res['success'] == true) {
                _this.partOf = true;
                _this.getUpdatedData();
            }
            else {
            }
        });
    };
    CollabCardComponent.prototype.leaveCollab = function () {
        var _this = this;
        this.collabService.leaveCollab(this.collabData._id)
            .subscribe(function (res) {
            if (res['success'] == true) {
                _this.partOf = false;
                _this.getUpdatedData();
            }
            else {
            }
        });
    };
    CollabCardComponent.prototype.deleteCollab = function () {
        this.collabService.deleteCollab(this.collabData._id)
            .subscribe(function (res) {
            console.log(res);
            if (res) {
                window.location.reload();
            }
        });
    };
    CollabCardComponent.prototype.editCollab = function () {
        this.router.navigate(['/home/editcollab/', this.collabData._id["$oid"]]);
    };
    CollabCardComponent.prototype.getUpdatedData = function () {
        var _this = this;
        this.collabService.getSingleCollab(this.collabData._id["$oid"]).subscribe(function (res) {
            console.log(res['0'], _this.collabData = res['0']);
        });
    };
    CollabCardComponent.prototype.panelWasOpen1 = function () {
        this.panelOpenState1 = true;
        this.makeTable();
    };
    CollabCardComponent.prototype.panelWasOpen2 = function () {
        this.panelOpenState2 = true;
        this.actionCheck();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _shared_models_collab_model__WEBPACK_IMPORTED_MODULE_3__["CollabModel"])
    ], CollabCardComponent.prototype, "collabData", void 0);
    CollabCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'collab-card',
            template: __webpack_require__(/*! ./collab-card.component.html */ "./src/app/home/collab-card/collab-card.component.html"),
            styles: [__webpack_require__(/*! ./collab-card.component.css */ "./src/app/home/collab-card/collab-card.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_dbAccess_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            src_app_shared_dbAccess_collabs_service__WEBPACK_IMPORTED_MODULE_1__["CollabsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], CollabCardComponent);
    return CollabCardComponent;
}());



/***/ }),

/***/ "./src/app/home/collab-list/home.component.css":
/*!*****************************************************!*\
  !*** ./src/app/home/collab-list/home.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\n    padding: 16px;\n    text-align: center;\n  \n  }\n\n  .collab {\n    margin-top:25px;\n    margin-bottom: 30px;\n  }\n\n  .add-collab-button {\n    z-index: 5; \n    position: fixed; \n    display: flex;\n    align-self: flex-end; \n    bottom: 7%; \n    margin-bottom: 5px;\n    margin-left: 80%; \n  }\n\n  \n\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9jb2xsYWItbGlzdC9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCOztFQUVwQjs7RUFFQTtJQUNFLGVBQWU7SUFDZixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxVQUFVO0lBQ1YsZUFBZTtJQUNmLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixnQkFBZ0I7RUFDbEIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2NvbGxhYi1saXN0L2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInAge1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBcbiAgfVxuXG4gIC5jb2xsYWIge1xuICAgIG1hcmdpbi10b3A6MjVweDtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICB9XG5cbiAgLmFkZC1jb2xsYWItYnV0dG9uIHtcbiAgICB6LWluZGV4OiA1OyBcbiAgICBwb3NpdGlvbjogZml4ZWQ7IFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7IFxuICAgIGJvdHRvbTogNyU7IFxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICBtYXJnaW4tbGVmdDogODAlOyBcbiAgfVxuXG4gIFxuXG4gICJdfQ== */"

/***/ }),

/***/ "./src/app/home/collab-list/home.component.html":
/*!******************************************************!*\
  !*** ./src/app/home/collab-list/home.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "   <!--\n     selected.value: Is a value from .ts file.\n     selectedIndex: DOM value\n   -->\n   <mat-tab-group [selectedIndex] = \"selected.value\" \n                  (selectedIndexChange) =\"currentTab($event)\" mat-align-tabs=\"center\">\n\n      <mat-tab label=\"Recommended\">\n        <ng-template matTabContent>\n          <ng-container *ngFor = \"let collab of collabData | async\">\n            <div class =\"collab\">\n                <!-- Property binding from component to component using @Input() and @Output -->\n                <collab-card [collabData] = \"collab\"></collab-card>\n            </div>      \n          </ng-container>\n        </ng-template>\n      </mat-tab>\n\n      <mat-tab label=\"All Collaborations\">\n        <ng-template matTabContent>\n          <ng-container *ngFor = \"let collab of collabData | async\">\n            <div class =\"collab\">\n                <!-- Property binding from component to component using @Input() and @Output -->\n                <collab-card [collabData] = \"collab\"></collab-card>\n            </div>      \n          </ng-container>\n        </ng-template>\n      </mat-tab>\n\n      <mat-tab label=\"My Collabs\">\n        <ng-template matTabContent>\n            <ng-container *ngFor = \"let collab of collabData | async\">\n              <div class =\"collab\">\n                <!-- Property binding from component to component using @Input() and @Output -->\n                <collab-card [collabData] = \"collab\"></collab-card>\n              </div>      \n            </ng-container>\n        </ng-template>\n      </mat-tab>\n\n\n\n   </mat-tab-group>\n\n   <div class = \"add-collab-button\">\n     <a mat-fab color = \"primary\" (click) = \"createCollab()\" style=\"margin-right: 14px\">\n      <mat-icon>add</mat-icon>\n     </a>\n   </div>\n     \n          \n            \n"

/***/ }),

/***/ "./src/app/home/collab-list/home.component.ts":
/*!****************************************************!*\
  !*** ./src/app/home/collab-list/home.component.ts ***!
  \****************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_dbAccess_collabs_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../shared/dbAccess/collabs.service */ "./src/app/shared/dbAccess/collabs.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_dbAccess_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/dbAccess/user.service */ "./src/app/shared/dbAccess/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");







var HomeComponent = /** @class */ (function () {
    function HomeComponent(userService, router, collabService) {
        this.userService = userService;
        this.router = router;
        this.collabService = collabService;
        this.selected = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](0);
        //Used for caching
        this.CACHE_KEY_0 = 'reqCollabsCache';
        this.CACHE_KEY_1 = 'activeCollabsCache';
        this.CACHE_KEY_2 = 'myCollabsCache';
        this.userDetails();
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.userDetails = function () {
        var _this = this;
        this.userService.getUserdetails().subscribe(function (userData) {
            _this.userData = userData,
                _this.currentTab(0);
        });
    };
    HomeComponent.prototype.userPicture = function () {
        ///user/profilePicture
        this.userService.getPicture().subscribe(function (data) {
            // BitmapImage image = new BitmapImage();
            // image.SetSource(stream);  
        });
    };
    // return array of JSON OBJECTS
    HomeComponent.prototype.collabDetails = function () {
        this.collabService.collabDetails().subscribe(function (data) {
        });
    };
    HomeComponent.prototype.activeCollabs = function () {
        this.collabService.activeCollabs().subscribe(function (data) {
            //console.log(data);   
        });
    };
    HomeComponent.prototype.myCollabs = function () {
        this.collabService.myCollabs().subscribe(function (data) {
            //console.log(data);   
        });
    };
    HomeComponent.prototype.createCollab = function () {
        this.router.navigate(['/home/createcollab']);
    };
    HomeComponent.prototype.currentTab = function ($event) {
        var _this = this;
        switch ($event) {
            case 0: {
                this.collabData = this.collabService.getReqCollabs(this.userData["classes"], this.userData["skills"])
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (data) { return data.reverse(); }));
                this.collabData.subscribe(function (next) {
                    localStorage[_this.CACHE_KEY_0] = JSON.stringify(next);
                });
                this.collabData = this.collabData.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(JSON.parse(localStorage[this.CACHE_KEY_1] || '{}')));
                break;
            }
            case 1: {
                this.collabData = this.collabService.getCollabs("getActiveCollabs")
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (data) { return data.reverse(); }));
                this.collabData.subscribe(function (next) {
                    localStorage[_this.CACHE_KEY_2] = JSON.stringify(next);
                });
                this.collabData = this.collabData.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(JSON.parse(localStorage[this.CACHE_KEY_0] || '{}')));
                break;
            }
            case 2: {
                this.collabData = this.collabService.getCollabs("getCollabDetails")
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (data) { return data.reverse(); }));
                this.collabData.subscribe(function (next) {
                    localStorage[_this.CACHE_KEY_1] = JSON.stringify(next);
                });
                this.collabData = this.collabData.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(JSON.parse(localStorage[this.CACHE_KEY_1] || '{}')));
                break;
            }
            default: {
                break;
            }
        }
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/collab-list/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/collab-list/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_dbAccess_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _shared_dbAccess_collabs_service__WEBPACK_IMPORTED_MODULE_2__["CollabsService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/collab-table/collab-table.component.css":
/*!**************************************************************!*\
  !*** ./src/app/home/collab-table/collab-table.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table { \n    width: 100%; \n    border-collapse: collapse; \n  }\n  /* Zebra striping */\n  tr:nth-of-type(odd) { \n    background: #eee; \n  }\n  th { \n    background: #333; \n    color: white; \n    font-weight: bold; \n  }\n  td, th { \n    padding: 6px; \n    border: 1px solid #ccc; \n    text-align: left; \n  }\n  td a{\n    display: block;\n  \n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9jb2xsYWItdGFibGUvY29sbGFiLXRhYmxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gseUJBQXlCO0VBQzNCO0VBQ0EsbUJBQW1CO0VBQ25CO0lBQ0UsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixnQkFBZ0I7RUFDbEI7RUFFQTtJQUNFLGNBQWM7O0VBRWhCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9jb2xsYWItdGFibGUvY29sbGFiLXRhYmxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7IFxuICAgIHdpZHRoOiAxMDAlOyBcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlOyBcbiAgfVxuICAvKiBaZWJyYSBzdHJpcGluZyAqL1xuICB0cjpudGgtb2YtdHlwZShvZGQpIHsgXG4gICAgYmFja2dyb3VuZDogI2VlZTsgXG4gIH1cbiAgdGggeyBcbiAgICBiYWNrZ3JvdW5kOiAjMzMzOyBcbiAgICBjb2xvcjogd2hpdGU7IFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkOyBcbiAgfVxuICB0ZCwgdGggeyBcbiAgICBwYWRkaW5nOiA2cHg7IFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7IFxuICAgIHRleHQtYWxpZ246IGxlZnQ7IFxuICB9XG5cbiAgdGQgYXtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/home/collab-table/collab-table.component.html":
/*!***************************************************************!*\
  !*** ./src/app/home/collab-table/collab-table.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<table>\n    <tr *ngFor = \"let row of table\">\n      <td>\n        <button mat-button color= \"primary\" (click) = \"goToProfile(row.userName)\">{{ getUserDispname(row.userName) }}</button>\n      </td>\n      <td *ngFor = \"let req of row.list\" [style.background-color] = \"req.knows ? '#ccffcc' : '#ffcccc'\"> {{ req.nameOf }} </td>\n    </tr>\n</table>"

/***/ }),

/***/ "./src/app/home/collab-table/collab-table.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/home/collab-table/collab-table.component.ts ***!
  \*************************************************************/
/*! exports provided: CollabTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollabTableComponent", function() { return CollabTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_dbAccess_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/dbAccess/user.service */ "./src/app/shared/dbAccess/user.service.ts");




var CollabTableComponent = /** @class */ (function () {
    function CollabTableComponent(router, userservice) {
        this.router = router;
        this.userservice = userservice;
        this.table = [];
        this.xAxisReq = [];
        this.displayNames = new Map();
    }
    CollabTableComponent.prototype.ngOnInit = function () {
        //console.log(this.xAxisReq);
    };
    CollabTableComponent.prototype.goToProfile = function (user) {
        this.router.navigate(['/user/', user]);
    };
    CollabTableComponent.prototype.getUserDispname = function (username) {
        var _this = this;
        if (this.displayNames.has(username)) {
            return this.displayNames.get(username);
        }
        else {
            this.displayNames.set(username, "");
            setTimeout(function () {
                _this.userservice.getMemberdetails(username).subscribe(function (data) {
                    //console.log(data);
                    _this.displayNames.set(username, data['name']);
                });
            });
            return this.displayNames.get(username);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], CollabTableComponent.prototype, "table", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('xAxisReq'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], CollabTableComponent.prototype, "xAxisReq", void 0);
    CollabTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'collab-table',
            template: __webpack_require__(/*! ./collab-table.component.html */ "./src/app/home/collab-table/collab-table.component.html"),
            styles: [__webpack_require__(/*! ./collab-table.component.css */ "./src/app/home/collab-table/collab-table.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_app_shared_dbAccess_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], CollabTableComponent);
    return CollabTableComponent;
}());



/***/ }),

/***/ "./src/app/home/create-collab/create-collab.component.css":
/*!****************************************************************!*\
  !*** ./src/app/home/create-collab/create-collab.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-form-field{\n    width: 70%;\n    margin-top: 10px;\n}\n\n.container {\n    margin-top: 50px;\n    margin-bottom: 50px;\n    margin-left: 10%;\n    margin-right: 10%;\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n\n}\n\n.example-chip-list {\n    width: 100%;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9jcmVhdGUtY29sbGFiL2NyZWF0ZS1jb2xsYWIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIseUVBQXlFOztBQUU3RTs7QUFFQTtJQUNJLFdBQVc7RUFDYiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvY3JlYXRlLWNvbGxhYi9jcmVhdGUtY29sbGFiLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWZvcm0tZmllbGR7XG4gICAgd2lkdGg6IDcwJTtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uY29udGFpbmVyIHtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwJTtcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsMCwwLDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xuXG59XG5cbi5leGFtcGxlLWNoaXAtbGlzdCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/home/create-collab/create-collab.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/home/create-collab/create-collab.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Steppers -->\n<div class = \"container\">\n        <mat-vertical-stepper [linear] = \"true\" #stepper>\n    \n                <mat-step [stepControl] = \"firstFormGroup\">\n                    <form [formGroup] = \"firstFormGroup\">\n                        <ng-template matStepLabel >Fill in Collab Info</ng-template>\n                        <mat-form-field>\n                            <input matInput placeholder = \"Collab Title...\" formControlName = \"title\" required>\n                        </mat-form-field>\n                        <mat-form-field>\n                            <textarea matInput placeholder = \"Description...\" formControlName = \"description\" required></textarea>\n                        </mat-form-field>\n                        <mat-form-field>\n                                <input matInput placeholder = \"Location...\" formControlName = \"location\" required>\n                        </mat-form-field>\n                        <mat-form-field>\n                                <input type = \"number\" min=\"2\"  matInput placeholder = \"Collab Size...\" formControlName = \"size\" required>\n                        </mat-form-field>\n                        <mat-form-field>\n                                <input formControlName = \"date\" matInput [owlDateTimeTrigger]=\"dt\" placeholder = \"Choose a date\" [owlDateTime]=\"dt\" required>\n                                <owl-date-time #dt></owl-date-time>\n                        </mat-form-field>\n                        <mat-form-field>\n                                <input type = \"number\" min=\"2\"  matInput placeholder = \"Duration...\" formControlName = \"duration\" required>\n                        </mat-form-field>\n                    </form>\n                </mat-step>\n                <mat-step [stepControl] = \"secondFormGroup\" >\n                    <ng-template matStepLabel>Add Classes and Skills</ng-template>\n                    <div>\n                        <mat-form-field class=\"example-chip-list\">\n                            <mat-chip-list #chipListSkills>\n                                <mat-chip\n                                    *ngFor=\"let skill of skills\"\n                                    [selectable]=\"selectable\"\n                                    [removable]=\"removable\"\n                                    (removed)=\"removeSkill(skill)\">\n                                    {{ skill }}\n                                    <mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\n                                </mat-chip>\n                                <input\n                                    placeholder=\"New Skill...\"\n                                    #skillInput\n                                    [formControl]=\"skillCtrl\"\n                                    [matAutocomplete]=\"auto\"\n                                    [matChipInputFor]=\"chipListSkills\"\n                                    [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\n                                    [matChipInputAddOnBlur]=\"addOnBlur\"\n                                    (matChipInputTokenEnd)=\"addSkill($event)\">\n                                    <mat-autocomplete #auto=\"matAutocomplete\" (optionSelected)=\"selectedSkill($event)\">\n                                        <mat-option *ngFor=\"let skill of filteredSkills\" [value]=\"skill\">\n                                            {{ skill }}\n                                        </mat-option>\n                                    </mat-autocomplete>\n                            </mat-chip-list>\n                                    \n                        </mat-form-field>\n                        <mat-form-field class=\"example-chip-list\">\n                            <mat-chip-list #chipListClasses>\n                                <mat-chip\n                                    *ngFor = \"let class of classes\"\n                                    [selectable] = \"selectable\"\n                                    [removable] = \"removable\"\n                                    (removed) = \"removeClass(class)\">\n                                    {{ class }}\n                                    <mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\n                                </mat-chip>\n                                <input \n                                    placeholder=\"New Class...\"\n                                    #classInput\n                                    [formControl]=\"classCtrl\"\n                                    [matAutocomplete]=\"auto2\"\n                                    [matChipInputFor]=\"chipListClasses\"\n                                    [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\n                                    [matChipInputAddOnBlur]=\"addOnBlur\"\n                                    (matChipInputTokenEnd)=\"addClass($event)\">\n                                    <mat-autocomplete #auto2=\"matAutocomplete\" (optionSelected)=\"selectedClass($event)\">\n                                        <mat-option *ngFor=\"let class of filteredClasses\" [value]=\"class\">\n                                            {{ class }}\n                                        </mat-option>\n                                    </mat-autocomplete>\n                            </mat-chip-list>\n\n                        </mat-form-field>\n                    </div>\n                </mat-step>\n                <mat-step>\n                    <ng-template matStepLabel> Confirm Your Information</ng-template>\n                    <div>\n                        <button mat-raised-button (click) = \"createCollab()\" color=\"primary\">Done</button>\n                    </div>\n                </mat-step>\n            \n        </mat-vertical-stepper>\n    </div>"

/***/ }),

/***/ "./src/app/home/create-collab/create-collab.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/home/create-collab/create-collab.component.ts ***!
  \***************************************************************/
/*! exports provided: CreateCollabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateCollabComponent", function() { return CreateCollabComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_shared_models_collab_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/models/collab.model */ "./src/app/shared/models/collab.model.ts");
/* harmony import */ var src_app_shared_dbAccess_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/dbAccess/user.service */ "./src/app/shared/dbAccess/user.service.ts");
/* harmony import */ var src_app_shared_dbAccess_collabs_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/dbAccess/collabs.service */ "./src/app/shared/dbAccess/collabs.service.ts");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm5/keycodes.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm5/autocomplete.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");










var CreateCollabComponent = /** @class */ (function () {
    function CreateCollabComponent(_formBuilder, userService, collabService, router) {
        this._formBuilder = _formBuilder;
        this.userService = userService;
        this.collabService = collabService;
        this.router = router;
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__["COMMA"]];
        //Variables for Skills.
        this.skillCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]();
        this.skills = [];
        this.allSkills = [];
        //Variables for Classes.
        this.classCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]();
        this.classes = [];
        this.allClasses = [];
        this.collabData = new src_app_shared_models_collab_model__WEBPACK_IMPORTED_MODULE_1__["CollabModel"];
    }
    CreateCollabComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.skillCtrl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["switchMap"])(function (query) { return _this.userService.searchSkills(query); })).subscribe(function (skills) { return _this.filteredSkills = skills["matches"]; });
        this.classCtrl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["switchMap"])(function (query) { return _this.userService.searchClasses(query); })).subscribe(function (classes) { return _this.filteredClasses = classes["matches"]; });
        this.firstFormGroup = this._formBuilder.group({
            title: [this.collabData.title, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            description: [this.collabData.description, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            location: [this.collabData.location, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            size: [this.collabData.size, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            date: [this.collabData.date, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            duration: [this.collabData.duration, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
        });
    };
    CreateCollabComponent.prototype.addSkill = function (event) {
        if (!this.matAutocomplete1.isOpen) {
            var input = event.input;
            var value = event.value;
            if ((value || '').trim()) {
                this.skills.push(value.trim());
            }
            if (input) {
                input.value = '';
            }
            this.skillCtrl.setValue(null);
        }
    };
    CreateCollabComponent.prototype.removeSkill = function (skill) {
        var index = this.skills.indexOf(skill);
        if (index >= 0) {
            this.skills.splice(index, 1);
        }
    };
    CreateCollabComponent.prototype.selectedSkill = function (event) {
        this.skills.push(event.option.viewValue);
        this.skillInput.nativeElement.value = '';
        this.skillCtrl.setValue(null);
    };
    CreateCollabComponent.prototype.addClass = function (event) {
        if (!this.matAutocomplete2.isOpen) {
            var input = event.input;
            var value = event.value;
            if ((value || '').trim()) {
                this.classes.push(value.trim());
            }
            if (input) {
                input.value = '';
            }
            this.classCtrl.setValue(null);
        }
    };
    CreateCollabComponent.prototype.removeClass = function (_class) {
        var index = this.classes.indexOf(_class);
        if (index >= 0) {
            this.classes.splice(index, 1);
        }
    };
    CreateCollabComponent.prototype.selectedClass = function (event) {
        this.classes.push(event.option.viewValue);
        this.classInput.nativeElement.value = '';
        this.classCtrl.setValue(null);
    };
    CreateCollabComponent.prototype.createCollab = function () {
        var _this = this;
        this.collabData = Object.assign({}, this.firstFormGroup.value);
        this.collabData.skills = this.skills;
        this.collabData.classes = this.classes;
        this.collabData.date = (this.collabData.date).valueOf();
        this.collabData.duration *= 86400000;
        this.collabData.duration += this.collabData.date;
        var createResult;
        this.collabService.createCollab(this.collabData)
            .subscribe(function (result) {
            if (result['success']) {
                _this.router.navigate(['/home']);
            }
            else {
                (function (error) { console.error('success' + error); });
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_shared_models_collab_model__WEBPACK_IMPORTED_MODULE_1__["CollabModel"])
    ], CreateCollabComponent.prototype, "currentCollab", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewChild"])('skillInput'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ElementRef"])
    ], CreateCollabComponent.prototype, "skillInput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewChild"])('auto'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__["MatAutocomplete"])
    ], CreateCollabComponent.prototype, "matAutocomplete1", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewChild"])('classInput'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ElementRef"])
    ], CreateCollabComponent.prototype, "classInput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewChild"])('auto2'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__["MatAutocomplete"])
    ], CreateCollabComponent.prototype, "matAutocomplete2", void 0);
    CreateCollabComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
            selector: 'create-collab',
            template: __webpack_require__(/*! ./create-collab.component.html */ "./src/app/home/create-collab/create-collab.component.html"),
            styles: [__webpack_require__(/*! ./create-collab.component.css */ "./src/app/home/create-collab/create-collab.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            src_app_shared_dbAccess_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            src_app_shared_dbAccess_collabs_service__WEBPACK_IMPORTED_MODULE_3__["CollabsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]])
    ], CreateCollabComponent);
    return CreateCollabComponent;
}());



/***/ }),

/***/ "./src/app/home/edit-collab/edit-collab.component.css":
/*!************************************************************!*\
  !*** ./src/app/home/edit-collab/edit-collab.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-form-field {\n    width: 90%;\n    margin-left: 15px;\n}\n\n.example-chip-list .mat-autocomplete{\n    width: 90%;\n}\n\n.container {\n    margin-top: 50px;\n    margin-bottom: 50px;\n    margin-left: 10%;\n    margin-right: 10%;\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\nexample-chip-list {\n    width: 100%;\n  }\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9lZGl0LWNvbGxhYi9lZGl0LWNvbGxhYi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQix5RUFBeUU7QUFDN0U7O0FBRUE7SUFDSSxXQUFXO0VBQ2IiLCJmaWxlIjoic3JjL2FwcC9ob21lL2VkaXQtY29sbGFiL2VkaXQtY29sbGFiLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWZvcm0tZmllbGQge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59XG5cbi5leGFtcGxlLWNoaXAtbGlzdCAubWF0LWF1dG9jb21wbGV0ZXtcbiAgICB3aWR0aDogOTAlO1xufVxuXG4uY29udGFpbmVyIHtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwJTtcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsMCwwLDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xufVxuXG5leGFtcGxlLWNoaXAtbGlzdCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuIl19 */"

/***/ }),

/***/ "./src/app/home/edit-collab/edit-collab.component.html":
/*!*************************************************************!*\
  !*** ./src/app/home/edit-collab/edit-collab.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = \"container\">\n        <form #form = \"ngForm\" (ngSubmit) = \"update(form.value)\">\n                <br>\n                <mat-form-field>\n                <input [(ngModel)] = \"collabData['title']\" name = \"title\" id = \"title\" type = \"text\" class = \"form-control\"\n                        #title = \"ngModel\" matInput placeholder = \"Collab Title...\" required>\n                </mat-form-field>\n                <br>\n                <mat-form-field>\n                <textarea [(ngModel)] = \"collabData['description']\" name = \"description\" id = \"description\" type = \"text\" class = \"form-control\"\n                        #description = \"ngModel\" matInput placeholder = \"Collab Description...\" required></textarea>\n                </mat-form-field>\n                <br>\n                <mat-form-field>\n                <input [(ngModel)] = \"collabData['location']\" name = \"location\" id = \"location\" type = \"text\" class = \"form-control\"\n                        #location = \"ngModel\" matInput placeholder = \"Location...\" required>\n                </mat-form-field>\n                <br>\n                <mat-form-field>\n                        <input [(ngModel)] = \"collabData['size']\" name = \"size\" id = \"size\" type = \"text\" class = \"form-control\"\n                                #size = \"ngModel\" matInput placeholder = \"Collab Size...\" required>\n                </mat-form-field>\n                <mat-form-field>\n                        <input [ngModel] (ngModelChange)=\"collabData['date'] = $event\"\n                                name = \"date\" id=\"date\" class = \"form-control\" \n                                #date = \"ngModel\" matInput placeholder = \"Choose a date\" [owlDateTimeTrigger]=\"dt\" [owlDateTime]=\"dt\" required>\n                        <owl-date-time #dt></owl-date-time>\n                </mat-form-field>\n                <mat-form-field>\n                        <input [ngModel] name = \"duration\" id = \"duration\"  class = \"form-control\"\n                                #duration = \"ngModel\" matInput placeholder = \"Duration...\" [owlDateTimeTrigger]=\"dt2\" [owlDateTime]=\"dt2\" required>\n                        <owl-date-time #dt2></owl-date-time>\n                </mat-form-field>\n                <mat-form-field class=\"example-chip-list\">\n                        <mat-chip-list #chipListSkills>\n                                <mat-chip\n                                *ngFor=\"let skill of skills\"\n                                [selectable]=\"selectable\"\n                                [removable]=\"removable\"\n                                (removed)=\"removeSkill(skill)\">\n                                {{ skill }}\n                                <mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\n                                </mat-chip>\n                                <input\n                                placeholder=\"New Skill...\"\n                                #skillInput\n                                [formControl]=\"skillCtrl\"\n                                [matAutocomplete]=\"auto\"\n                                [matChipInputFor]=\"chipListSkills\"\n                                [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\n                                [matChipInputAddOnBlur]=\"addOnBlur\"\n                                (matChipInputTokenEnd)=\"addSkill($event)\">\n                                <mat-autocomplete #auto=\"matAutocomplete\" (optionSelected)=\"selectedSkill($event)\">\n                                        <mat-option *ngFor=\"let skill of filteredSkills\" [value]=\"skill\">\n                                        {{ skill }}\n                                        </mat-option>\n                                </mat-autocomplete>\n                        </mat-chip-list>             \n                </mat-form-field>\n                <br>\n                <mat-form-field class=\"example-chip-list\">\n                        <mat-chip-list #chipListClasses>\n                                <mat-chip\n                                *ngFor = \"let class of classes\"\n                                [selectable] = \"selectable\"\n                                [removable] = \"removable\"\n                                (removed) = \"removeClass(class)\">\n                                {{ class }}\n                                <mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\n                                </mat-chip>\n                                <input \n                                placeholder=\"New Class...\"\n                                #classInput\n                                [formControl]=\"classCtrl\"\n                                [matAutocomplete]=\"auto2\"\n                                [matChipInputFor]=\"chipListClasses\"\n                                [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\n                                [matChipInputAddOnBlur]=\"addOnBlur\"\n                                (matChipInputTokenEnd)=\"addClass($event)\">\n                        <mat-autocomplete #auto2=\"matAutocomplete\" (optionSelected)=\"selectedClass($event)\">\n                                <mat-option *ngFor=\"let class of filteredClasses\" [value]=\"class\">\n                                {{ class }}\n                                </mat-option>\n                        </mat-autocomplete>\n                </mat-chip-list>\n\n                </mat-form-field>\n                <br>\n                <button mat-raised-button>Update</button>\n                <br>\n        </form>\n       \n        \n</div>"

/***/ }),

/***/ "./src/app/home/edit-collab/edit-collab.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/home/edit-collab/edit-collab.component.ts ***!
  \***********************************************************/
/*! exports provided: EditCollabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditCollabComponent", function() { return EditCollabComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_shared_models_collab_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/models/collab.model */ "./src/app/shared/models/collab.model.ts");
/* harmony import */ var src_app_shared_dbAccess_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/dbAccess/user.service */ "./src/app/shared/dbAccess/user.service.ts");
/* harmony import */ var src_app_shared_dbAccess_collabs_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/dbAccess/collabs.service */ "./src/app/shared/dbAccess/collabs.service.ts");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm5/keycodes.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm5/autocomplete.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");










var EditCollabComponent = /** @class */ (function () {
    function EditCollabComponent(userService, collabService, activeRoute, router) {
        var _this = this;
        this.userService = userService;
        this.collabService = collabService;
        this.activeRoute = activeRoute;
        this.router = router;
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__["COMMA"]];
        //Variables for Skills.
        this.skillCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]();
        this.skills = [];
        this.allSkills = [];
        //Variables for Classes.
        this.classCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]();
        this.classes = [];
        this.allClasses = [];
        this.collabData = new src_app_shared_models_collab_model__WEBPACK_IMPORTED_MODULE_1__["CollabModel"];
        this.activeRoute.paramMap
            .subscribe(function (params) {
            _this._id = params.get('_id');
        });
    }
    EditCollabComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getCollabDetails(this._id)];
                    case 1:
                        _a.sent();
                        this.skillCtrl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["switchMap"])(function (query) { return _this.userService.searchSkills(query); })).subscribe(function (skills) { return _this.filteredSkills = skills["matches"]; });
                        this.classCtrl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["switchMap"])(function (query) { return _this.userService.searchClasses(query); })).subscribe(function (classes) { return _this.filteredClasses = classes["matches"]; });
                        return [2 /*return*/];
                }
            });
        });
    };
    EditCollabComponent.prototype.getCollabDetails = function (id) {
        var _this = this;
        this.collabService.getSingleCollab(id).subscribe(function (res) {
            _this.collabData = res['0'];
            _this.skills = res['0']['skills'];
            _this.classes = res['0']['classes'];
        });
    };
    EditCollabComponent.prototype.update = function (collabUpdatedData) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.collabData = collabUpdatedData;
                        this.collabData.skills = this.skills;
                        this.collabData.classes = this.classes;
                        this.collabData._id = this._id;
                        console.log(collabUpdatedData);
                        return [4 /*yield*/, this.collabService.editCollab(this.collabData, this._id)
                                .subscribe(function (res) {
                                if (res['success']) {
                                    _this.router.navigate(['/home']);
                                }
                                else {
                                    console.error(res);
                                }
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    EditCollabComponent.prototype.addSkill = function (event) {
        if (!this.matAutocomplete1.isOpen) {
            var input = event.input;
            var value = event.value;
            if ((value || '').trim()) {
                this.skills.push(value.trim());
            }
            if (input) {
                input.value = '';
            }
            this.skillCtrl.setValue(null);
        }
    };
    EditCollabComponent.prototype.removeSkill = function (skill) {
        var index = this.skills.indexOf(skill);
        if (index >= 0) {
            this.skills.splice(index, 1);
        }
    };
    EditCollabComponent.prototype.selectedSkill = function (event) {
        this.skills.push(event.option.viewValue);
        this.skillInput.nativeElement.value = '';
        this.skillCtrl.setValue(null);
    };
    EditCollabComponent.prototype.addClass = function (event) {
        if (!this.matAutocomplete2.isOpen) {
            var input = event.input;
            var value = event.value;
            if ((value || '').trim()) {
                this.classes.push(value.trim());
            }
            if (input) {
                input.value = '';
            }
            this.classCtrl.setValue(null);
        }
    };
    EditCollabComponent.prototype.removeClass = function (_class) {
        var index = this.classes.indexOf(_class);
        if (index >= 0) {
            this.classes.splice(index, 1);
        }
    };
    EditCollabComponent.prototype.selectedClass = function (event) {
        this.classes.push(event.option.viewValue);
        this.classInput.nativeElement.value = '';
        this.classCtrl.setValue(null);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_shared_models_collab_model__WEBPACK_IMPORTED_MODULE_1__["CollabModel"])
    ], EditCollabComponent.prototype, "currentCollab", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewChild"])('skillInput'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ElementRef"])
    ], EditCollabComponent.prototype, "skillInput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewChild"])('auto'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__["MatAutocomplete"])
    ], EditCollabComponent.prototype, "matAutocomplete1", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewChild"])('classInput'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ElementRef"])
    ], EditCollabComponent.prototype, "classInput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewChild"])('auto2'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__["MatAutocomplete"])
    ], EditCollabComponent.prototype, "matAutocomplete2", void 0);
    EditCollabComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
            selector: 'app-edit-collab',
            template: __webpack_require__(/*! ./edit-collab.component.html */ "./src/app/home/edit-collab/edit-collab.component.html"),
            styles: [__webpack_require__(/*! ./edit-collab.component.css */ "./src/app/home/edit-collab/edit-collab.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_dbAccess_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            src_app_shared_dbAccess_collabs_service__WEBPACK_IMPORTED_MODULE_3__["CollabsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]])
    ], EditCollabComponent);
    return EditCollabComponent;
}());



/***/ }),

/***/ "./src/app/home/home-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _create_collab_create_collab_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-collab/create-collab.component */ "./src/app/home/create-collab/create-collab.component.ts");
/* harmony import */ var _collab_card_collab_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./collab-card/collab-card.component */ "./src/app/home/collab-card/collab-card.component.ts");
/* harmony import */ var _collab_list_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./collab-list/home.component */ "./src/app/home/collab-list/home.component.ts");
/* harmony import */ var _edit_collab_edit_collab_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit-collab/edit-collab.component */ "./src/app/home/edit-collab/edit-collab.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







/**
*	@brief Configure the routes for the feature module. Once loaded, we have
*        access to the components declared in the feature module
*
*	@param[routes] ,  array that will contain our routes
*	@param[path]       ,  string that will redirect to the module specified on 'loadChildren'
*	@param[component]       , component to be loaded depending on the 'path' that was taken
*	@return nothing
*/
var routes = [
    {
        path: '',
        component: _collab_list_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    },
    {
        path: "collabinfo",
        component: _collab_card_collab_card_component__WEBPACK_IMPORTED_MODULE_2__["CollabCardComponent"]
    },
    {
        path: "createcollab",
        component: _create_collab_create_collab_component__WEBPACK_IMPORTED_MODULE_1__["CreateCollabComponent"]
    },
    {
        path: "editcollab/:_id",
        component: _edit_collab_edit_collab_component__WEBPACK_IMPORTED_MODULE_4__["EditCollabComponent"]
    }
];
var HomeRoutingModule = /** @class */ (function () {
    function HomeRoutingModule() {
    }
    HomeRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]]
        })
    ], HomeRoutingModule);
    return HomeRoutingModule;
}());



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var ng_pick_datetime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-pick-datetime */ "./node_modules/ng-pick-datetime/picker.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm5/autocomplete.es5.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm5/chips.es5.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _collab_list_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./collab-list/home.component */ "./src/app/home/collab-list/home.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/home/home-routing.module.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm5/stepper.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _collab_card_collab_card_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./collab-card/collab-card.component */ "./src/app/home/collab-card/collab-card.component.ts");
/* harmony import */ var _collab_table_collab_table_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./collab-table/collab-table.component */ "./src/app/home/collab-table/collab-table.component.ts");
/* harmony import */ var _create_collab_create_collab_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./create-collab/create-collab.component */ "./src/app/home/create-collab/create-collab.component.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _edit_collab_edit_collab_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./edit-collab/edit-collab.component */ "./src/app/home/edit-collab/edit-collab.component.ts");














//Material Components














var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_11__["NgModule"])({
            declarations: [_collab_list_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"], _collab_card_collab_card_component__WEBPACK_IMPORTED_MODULE_21__["CollabCardComponent"], _collab_table_collab_table_component__WEBPACK_IMPORTED_MODULE_22__["CollabTableComponent"], _create_collab_create_collab_component__WEBPACK_IMPORTED_MODULE_23__["CreateCollabComponent"], _edit_collab_edit_collab_component__WEBPACK_IMPORTED_MODULE_27__["EditCollabComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_12__["CommonModule"],
                _home_routing_module__WEBPACK_IMPORTED_MODULE_13__["HomeRoutingModule"],
                //Angular Material
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_17__["MatTabsModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCardModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIconModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatListModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_18__["MatExpansionModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"],
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__["ScrollDispatchModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__["MatChipsModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__["MatGridListModule"],
                _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__["MatStepperModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__["MatFormFieldModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_25__["MatInputModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_26__["MatDatepickerModule"],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"],
                _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__["MatFormFieldModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_20__["MatSelectModule"],
                //Clock
                ng_pick_datetime__WEBPACK_IMPORTED_MODULE_1__["OwlDateTimeModule"],
                ng_pick_datetime__WEBPACK_IMPORTED_MODULE_1__["OwlNativeDateTimeModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
            ]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "./src/app/shared/models/collab.model.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/models/collab.model.ts ***!
  \***********************************************/
/*! exports provided: CollabModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollabModel", function() { return CollabModel; });
var CollabModel = /** @class */ (function () {
    function CollabModel() {
    }
    return CollabModel;
}());



/***/ }),

/***/ "./src/app/shared/models/tableBuilder.model.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/models/tableBuilder.model.ts ***!
  \*****************************************************/
/*! exports provided: TableBuilder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableBuilder", function() { return TableBuilder; });
var TableBuilder = /** @class */ (function () {
    function TableBuilder(name) {
        this.userName = name;
        this.list = [];
    }
    TableBuilder.prototype.setKnown = function (nameOf, knowsOf) {
        this.list.push({
            nameOf: nameOf,
            knows: knowsOf
        });
    };
    return TableBuilder;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map