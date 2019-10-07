(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-user-module"],{

/***/ "./src/app/user/edit-classes/edit-classes.component.css":
/*!**************************************************************!*\
  !*** ./src/app/user/edit-classes/edit-classes.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-chip-list {\n    width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9lZGl0LWNsYXNzZXMvZWRpdC1jbGFzc2VzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC91c2VyL2VkaXQtY2xhc3Nlcy9lZGl0LWNsYXNzZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWNoaXAtbGlzdCB7XG4gICAgd2lkdGg6IDEwMCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/user/edit-classes/edit-classes.component.html":
/*!***************************************************************!*\
  !*** ./src/app/user/edit-classes/edit-classes.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title> Update User Details </h2>\n<mat-form-field class=\"example-chip-list\">\n        <mat-chip-list #chipListClasses>\n                <mat-chip\n                *ngFor = \"let class of classes\"\n                [selectable] = \"selectable\"\n                [removable] = \"removable\"\n                (removed) = \"removeClass(class)\">\n                {{ class }}\n                <mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\n                </mat-chip>\n                <input \n                placeholder=\"New Class...\"\n                #classInput\n                [formControl]=\"classCtrl\"\n                [matAutocomplete]=\"auto2\"\n                [matChipInputFor]=\"chipListClasses\"\n                [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\n                [matChipInputAddOnBlur]=\"addOnBlur\"\n                (matChipInputTokenEnd)=\"addClass($event)\">\n                <mat-autocomplete #auto2=\"matAutocomplete\" (optionSelected)=\"selectedClass($event)\">\n                        <mat-option *ngFor=\"let class of filteredClasses\" [value]=\"class\">\n                        {{ class }}\n                        </mat-option>\n                </mat-autocomplete>\n        </mat-chip-list>\n</mat-form-field>\n<br>\n        <button mat-raised-button (click) = \"update()\">Update</button>\n<br>\n\n"

/***/ }),

/***/ "./src/app/user/edit-classes/edit-classes.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/user/edit-classes/edit-classes.component.ts ***!
  \*************************************************************/
/*! exports provided: EditClassesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditClassesComponent", function() { return EditClassesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm5/autocomplete.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm5/keycodes.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_dbAccess_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/dbAccess/user.service */ "./src/app/shared/dbAccess/user.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");








var EditClassesComponent = /** @class */ (function () {
    function EditClassesComponent(userService, 
    //Handles the openning/closing of the Dialog
    dialogRef, 
    //Handles passing of data from/to component opening the dialog
    data) {
        this.userService = userService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__["COMMA"]];
        //Variables for Classes.
        this.classCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        this.classes = [];
        this.allClasses = [];
    }
    EditClassesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.classes = this.data.userData['classes'];
        this.classCtrl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(function (query) { return _this.userService.searchClasses(query); })).subscribe(function (classes) { return _this.filteredClasses = classes["matches"]; });
    };
    EditClassesComponent.prototype.addClass = function (event) {
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
    EditClassesComponent.prototype.removeClass = function (_class) {
        var index = this.classes.indexOf(_class);
        if (index >= 0) {
            this.classes.splice(index, 1);
        }
    };
    EditClassesComponent.prototype.selectedClass = function (event) {
        this.classes.push(event.option.viewValue);
        this.classInput.nativeElement.value = '';
        this.classCtrl.setValue(null);
    };
    EditClassesComponent.prototype.update = function () {
        this.userService.updateUserclass(this.classes).subscribe(function (result) { console.log(result); });
        this.dialogRef.close();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"])('classInput'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"])
    ], EditClassesComponent.prototype, "classInput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"])('auto2'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__["MatAutocomplete"])
    ], EditClassesComponent.prototype, "matAutocomplete2", void 0);
    EditClassesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
            selector: 'app-edit-classes',
            template: __webpack_require__(/*! ./edit-classes.component.html */ "./src/app/user/edit-classes/edit-classes.component.html"),
            styles: [__webpack_require__(/*! ./edit-classes.component.css */ "./src/app/user/edit-classes/edit-classes.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_dbAccess_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], EditClassesComponent);
    return EditClassesComponent;
}());



/***/ }),

/***/ "./src/app/user/edit-picture/edit-picture.component.css":
/*!**************************************************************!*\
  !*** ./src/app/user/edit-picture/edit-picture.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hide_file {\n    position: absolute;\n    z-index: 1000;\n    opacity: 0;\n    cursor: pointer;\n    right: 0;\n    top: 0;\n    height: 100%;\n    font-size: 24px;\n    width: 100%;\n}\n\n.mat-button {\n    border: 1px solid royalblue;\n}\n\n.uploadPic{\n    position:relative;\n    text-align:center;\n    float:left;\n    cursor:pointer;\n    margin-left: 10%;\n  }\n\n  \n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9lZGl0LXBpY3R1cmUvZWRpdC1waWN0dXJlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFVBQVU7SUFDVixlQUFlO0lBQ2YsUUFBUTtJQUNSLE1BQU07SUFDTixZQUFZO0lBQ1osZUFBZTtJQUNmLFdBQVc7QUFDZjs7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQjs7QUFHQTtJQUNJLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsVUFBVTtJQUNWLGNBQWM7SUFDZCxnQkFBZ0I7RUFDbEIiLCJmaWxlIjoic3JjL2FwcC91c2VyL2VkaXQtcGljdHVyZS9lZGl0LXBpY3R1cmUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oaWRlX2ZpbGUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAxMDAwO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogMDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4ubWF0LWJ1dHRvbiB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcm95YWxibHVlO1xufVxuXG5cbi51cGxvYWRQaWN7XG4gICAgcG9zaXRpb246cmVsYXRpdmU7XG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgZmxvYXQ6bGVmdDtcbiAgICBjdXJzb3I6cG9pbnRlcjtcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xuICB9XG5cbiAgXG4gICJdfQ== */"

/***/ }),

/***/ "./src/app/user/edit-picture/edit-picture.component.html":
/*!***************************************************************!*\
  !*** ./src/app/user/edit-picture/edit-picture.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <!--Taking picture as input-->\n <div class = \"container\">\n    <div class=\"uploadPic\">\n        <input  type=\"file\" class=\"hide_file\" (change)=\"handleFileInput($event.target.files)\">\n        <button mat-flat-button color=\"primary\" >Upload File</button> \n    </div>\n    <button class=\"uploadButton\" mat-button color=\"primary\" (click)=\"uploadFileToActivity()\">submit</button>\n</div>\n"

/***/ }),

/***/ "./src/app/user/edit-picture/edit-picture.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/user/edit-picture/edit-picture.component.ts ***!
  \*************************************************************/
/*! exports provided: EditPictureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPictureComponent", function() { return EditPictureComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _shared_dbAccess_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../shared/dbAccess/user.service */ "./src/app/shared/dbAccess/user.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");




var EditPictureComponent = /** @class */ (function () {
    function EditPictureComponent(userService, dialogRef, 
    //Handles passing of data from/to component opening the dialog
    data) {
        this.userService = userService;
        this.dialogRef = dialogRef;
        this.data = data;
        //default variable for selected file.
        this.fileToUpload = null;
        this.submitPressed = false;
    }
    EditPictureComponent.prototype.ngOnInit = function () {
    };
    //function which you use in (change)-event of your file input tag:
    EditPictureComponent.prototype.handleFileInput = function (files) {
        this.fileToUpload = files.item(0);
    };
    EditPictureComponent.prototype.uploadFileToActivity = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userService.uploadProfilePicture(this.fileToUpload).subscribe(function (data) {
                            console.log(data);
                        })
                        //   this.fileUploadService.postFile(this.fileToUpload).subscribe(data => {
                        //     // do something, if upload success
                        //     }, error => {
                        //       console.log(error);
                        //     });
                    ];
                    case 1:
                        _a.sent();
                        //   this.fileUploadService.postFile(this.fileToUpload).subscribe(data => {
                        //     // do something, if upload success
                        //     }, error => {
                        //       console.log(error);
                        //     });
                        this.submitPressed = true;
                        this.dialogRef.close(this.submitPressed);
                        return [2 /*return*/];
                }
            });
        });
    };
    EditPictureComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-edit-picture',
            template: __webpack_require__(/*! ./edit-picture.component.html */ "./src/app/user/edit-picture/edit-picture.component.html"),
            styles: [__webpack_require__(/*! ./edit-picture.component.css */ "./src/app/user/edit-picture/edit-picture.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_dbAccess_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], EditPictureComponent);
    return EditPictureComponent;
}());



/***/ }),

/***/ "./src/app/user/edit-skills/edit-skills.component.css":
/*!************************************************************!*\
  !*** ./src/app/user/edit-skills/edit-skills.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-chip-list {\n    width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9lZGl0LXNraWxscy9lZGl0LXNraWxscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvdXNlci9lZGl0LXNraWxscy9lZGl0LXNraWxscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtY2hpcC1saXN0IHtcbiAgICB3aWR0aDogMTAwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/user/edit-skills/edit-skills.component.html":
/*!*************************************************************!*\
  !*** ./src/app/user/edit-skills/edit-skills.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title> Update User Details </h2>\n<mat-form-field class=\"example-chip-list\">\n    <mat-chip-list #chipListSkills>\n            <mat-chip\n            *ngFor=\"let skill of skills\"\n            [selectable]=\"selectable\"\n            [removable]=\"removable\"\n            (removed)=\"removeSkill(skill)\">\n            {{ skill }}\n            <mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\n            </mat-chip>\n            <input\n            placeholder=\"New Skill...\"\n            #skillInput\n            [formControl]=\"skillCtrl\"\n            [matAutocomplete]=\"auto\"\n            [matChipInputFor]=\"chipListSkills\"\n            [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\n            [matChipInputAddOnBlur]=\"addOnBlur\"\n            (matChipInputTokenEnd)=\"addSkill($event)\">\n            <mat-autocomplete #auto=\"matAutocomplete\" (optionSelected)=\"selectedSkill($event)\">\n                    <mat-option *ngFor=\"let skill of filteredSkills\" [value]=\"skill\">\n                    {{ skill }}\n                    </mat-option>\n            </mat-autocomplete>\n    </mat-chip-list>             \n</mat-form-field>\n<br>\n  <button mat-raised-button (click) = \"update()\">Update</button>\n<br>\n"

/***/ }),

/***/ "./src/app/user/edit-skills/edit-skills.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/user/edit-skills/edit-skills.component.ts ***!
  \***********************************************************/
/*! exports provided: EditSkillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditSkillsComponent", function() { return EditSkillsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _shared_dbAccess_collabs_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../shared/dbAccess/collabs.service */ "./src/app/shared/dbAccess/collabs.service.ts");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm5/autocomplete.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm5/keycodes.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_dbAccess_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/dbAccess/user.service */ "./src/app/shared/dbAccess/user.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");









var EditSkillsComponent = /** @class */ (function () {
    function EditSkillsComponent(userService, collabService, dialogRef, data) {
        this.userService = userService;
        this.collabService = collabService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["COMMA"]];
        //Variables for Skills.
        this.skillCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.skills = [];
        this.allSkills = [];
    }
    EditSkillsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.skills = this.data.userData['skills'];
        this.skillCtrl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["switchMap"])(function (query) { return _this.userService.searchSkills(query); })).subscribe(function (skills) { return _this.filteredSkills = skills["matches"]; });
    };
    EditSkillsComponent.prototype.addSkill = function (event) {
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
    EditSkillsComponent.prototype.removeSkill = function (skill) {
        var index = this.skills.indexOf(skill);
        if (index >= 0) {
            this.skills.splice(index, 1);
        }
    };
    EditSkillsComponent.prototype.selectedSkill = function (event) {
        this.skills.push(event.option.viewValue);
        this.skillInput.nativeElement.value = '';
        this.skillCtrl.setValue(null);
    };
    EditSkillsComponent.prototype.update = function () {
        this.userService.updateUserSkills(this.skills).subscribe(function (result) { console.log(result); });
        this.dialogRef.close();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewChild"])('skillInput'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ElementRef"])
    ], EditSkillsComponent.prototype, "skillInput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewChild"])('auto'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__["MatAutocomplete"])
    ], EditSkillsComponent.prototype, "matAutocomplete1", void 0);
    EditSkillsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
            selector: 'app-edit-skills',
            template: __webpack_require__(/*! ./edit-skills.component.html */ "./src/app/user/edit-skills/edit-skills.component.html"),
            styles: [__webpack_require__(/*! ./edit-skills.component.css */ "./src/app/user/edit-skills/edit-skills.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_dbAccess_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"],
            _shared_dbAccess_collabs_service__WEBPACK_IMPORTED_MODULE_2__["CollabsService"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], EditSkillsComponent);
    return EditSkillsComponent;
}());



/***/ }),

/***/ "./src/app/user/edit-user-form/edit-user-form.component.css":
/*!******************************************************************!*\
  !*** ./src/app/user/edit-user-form/edit-user-form.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-form-field {\n    width: 95%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9lZGl0LXVzZXItZm9ybS9lZGl0LXVzZXItZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvdXNlci9lZGl0LXVzZXItZm9ybS9lZGl0LXVzZXItZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1mb3JtLWZpZWxkIHtcbiAgICB3aWR0aDogOTUlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/user/edit-user-form/edit-user-form.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/user/edit-user-form/edit-user-form.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title> Update User Details </h2>\n    <div class = \"container\">\n        <!-- Template Driven Form: Angular uses these fields and apply a form-level directive to the form, craeting\n                                    a FormGroup and linking it to the form.\n                [(ngModel)] two-way(bi-directional) binding to allow for sync of form fields and view model\n                controller: data, which was passed down from user-page component, of type UserModel will control the fields\n        -->\n        <form #form = \"ngForm\" (ngSubmit) = \"update(form.value)\">\n        \n            <mat-form-field>\n                <input [(ngModel)] = \"data.userData['name']\" name = \"username\" id = \"username\" type = \"text\" class = \"form-control\"\n                    #username = \"ngModel\" matInput placeholder = \"User Name...\" required>\n            </mat-form-field>\n            <br>\n            <mat-form-field>\n                <input [(ngModel)] = \"data.userData['github']\" name = \"github\" id = \"github\" type = \"text\" class = \"form-control\"\n                    #github = \"ngModel\" matInput placeholder = \"Github...\" required>\n            </mat-form-field>\n            <br>\n            <mat-form-field>\n                <input [(ngModel)] = \"data.userData['linkedin']\" name = \"linkedin\" id = \"linkedin\" type = \"text\" class = \"form-control\"\n                    #linkedin = \"ngModel\" matInput placeholder = \"LinkedIn...\" required>\n            </mat-form-field>\n            <br>\n            <button mat-raised-button>Update</button>\n            <br>\n        </form>\n      </div>\n      \n"

/***/ }),

/***/ "./src/app/user/edit-user-form/edit-user-form.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/user/edit-user-form/edit-user-form.component.ts ***!
  \*****************************************************************/
/*! exports provided: EditUserFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditUserFormComponent", function() { return EditUserFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_shared_dbAccess_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/dbAccess/user.service */ "./src/app/shared/dbAccess/user.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");





var EditUserFormComponent = /** @class */ (function () {
    /**
    * @author Edwin Quintuna
    *
    *	@brief Constructor that will create an instance of EditUserFormComponent
    *        and allow us to inject our dependencies; services that will be needed in the component
    *
    *	@param[userService]  ,  service that will handle both retrival and updating user data via http requests
    *	@param[dialogRef]    ,  handles the openning/closing of the Dialog
    *	@param[data]         ,  handles passing of data from/to component opening the dialog
    *	@return nothing
    */
    function EditUserFormComponent(userService, _formBuilder, 
    //Handles the openning/closing of the Dialog
    dialogRef, 
    //Handles passing of data from/to component opening the dialog
    data) {
        this.userService = userService;
        this._formBuilder = _formBuilder;
        this.dialogRef = dialogRef;
        this.data = data;
    }
    EditUserFormComponent.prototype.ngOnInit = function () { };
    /**
    * @author Edwin Quintuna
    *
    *	@brief Function that will call the UserService to update user details, once thats done return to UserPageComponent
    *
    *	@param[userData]  ,  UserModel that will hold the fields that will be updated on the database
    *	@return nothing
    */
    EditUserFormComponent.prototype.update = function (userData) {
        //User userService to make an http request to update the fields specified on the Template Driven Form
        this.userService.updateUserProfile(userData).subscribe(function (result) { console.log(result); });
        //Will close the dialog and go back to the UserPageComponent
        this.dialogRef.close();
    };
    EditUserFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-edit-user-form',
            template: __webpack_require__(/*! ./edit-user-form.component.html */ "./src/app/user/edit-user-form/edit-user-form.component.html"),
            styles: [__webpack_require__(/*! ./edit-user-form.component.css */ "./src/app/user/edit-user-form/edit-user-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_dbAccess_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"], Object])
    ], EditUserFormComponent);
    return EditUserFormComponent;
}());



/***/ }),

/***/ "./src/app/user/user-page/user-page.component.css":
/*!********************************************************!*\
  !*** ./src/app/user/user-page/user-page.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".usercard1 {\n  margin-top: 30px;\n  padding: 0px;\n  border-radius: 5px;\n  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n.mat-card-avatar {\n  background-image: url('/assets/userPhoto.png');\n  background-size: cover;\n\n}\n\n.mat-card-actions {\n  display: flex;\n}\n\n.list-header-title {\ncolor: rgba(0, 0, 0, .54);\nbackground: rgba(0, 0, 0, 0.062);\nfont-weight: bold;\npadding: 0px;\n\n}\n\n.mat-card-header {\n  padding-left: 10px;\n  padding-top: 10px; \n}\n\n.mat-raised-button {\n  width: 100%;\n  height: 100%;\n}\n\n.usercard2 {\nmargin-top: 30px;\ncolor: rgba(0, 0, 0, .54);\nbackground: rgba(0, 0, 0, 0.062);\nheight: 86.5%;\npadding-bottom: 25px;\nborder-radius: 5px;\nbox-shadow: 0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n.viewport {\nwidth: 100%;\nheight: 100%;\nmargin-left: 40px;\nbox-shadow: 0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n.cdk-virtual-scroll-viewport {\nheight: 70%;\nmargin: 0px;\nbackground-color: white;\n\n}\n\n.example-form .mat-form-field {\nmargin: 0px;\n}\n\n.mat-list {\nwidth: 100%;\nheight: 100%;\n}\n\n.grid-container {\ngrid: auto-flow / 1fr;\nwidth: 100%;\nheight: 100%;\n}\n\n.grid-search {\ngrid-area: grid-search;\nmargin-left: 25px;\n\n}\n\n.grid-item {\ngrid-area: grid-item;\nheight: 100%;\nmargin-left: 25px;\nmargin-right: 25px;\nmargin-bottom: 0px;\n}\n\n.mat-chip-list {\nmargin: 1px;\n}\n\n.example-form {\nmin-width: 150px;\nmax-width: 500px;\nwidth: 100%;\n}\n\n.example-full-width {\nwidth: 80%;\nmargin-top: 15px;\nmargin-bottom: 15px;\nbackground: rgba(255, 255, 255, 0.671);\nborder-radius: 15px;\n}\n\n.wrapper {\ndisplay:inline-block;\nmargin-top: 10px;\nmargin-bottom: 15px;\nheight: 30px;\n}\n\ninput {\n    background-color: white;\n    border: 3;\n    width: 200px;\n    height: 30px;\n}\n\nbutton {\n    \n    border: solid black 1px;\n    width: 100px;\n    height: 38px;\n}\n\n.mat-flat-button  {\n  width: auto;\n  margin-left: auto;\n  margin-right: 10px; \n}\n\n.uploadButton {\n  height: 38px;\n}\n\n.middle {\n  transition: .5s ease;\n  opacity: 0;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%);\n  text-align: center;\n}\n\n.containerPic:hover .image {\n  opacity: 0.3;\n}\n\n.containerPic:hover .middle {\n  opacity: 1;\n}\n\n.image-background {\n  background: #555555;\n  display: table;\n  width: 100%;\n  height: 100%;\n  position: relative;\n  overflow: hidden;\n}\n\n.containerPic {\n  position: relative;\n}\n\n.mat-card-image {\nmargin: 0px;\nmargin-left: 8.099%;\nmargin-right: 10%;\ndisplay: block;\nheight: 490px;\nmax-height: 500px;\nmax-width: 85%;\ntransition: .5s ease;\n-webkit-backface-visibility: hidden;\n        backface-visibility: hidden;\nopacity: 1;\n}\n\n.mat-grid-tile {\n  overflow: unset;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci91c2VyLXBhZ2UvdXNlci1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQix5RUFBeUU7QUFDM0U7O0FBRUE7RUFDRSw4Q0FBOEM7RUFDOUMsc0JBQXNCOztBQUV4Qjs7QUFDQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtBQUNBLHlCQUF5QjtBQUN6QixnQ0FBZ0M7QUFDaEMsaUJBQWlCO0FBQ2pCLFlBQVk7O0FBRVo7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFJQTtBQUNBLGdCQUFnQjtBQUNoQix5QkFBeUI7QUFDekIsZ0NBQWdDO0FBQ2hDLGFBQWE7QUFDYixvQkFBb0I7QUFDcEIsa0JBQWtCO0FBQ2xCLHlFQUF5RTtBQUN6RTs7QUFFQTtBQUNBLFdBQVc7QUFDWCxZQUFZO0FBQ1osaUJBQWlCO0FBQ2pCLHlFQUF5RTtBQUN6RTs7QUFFQTtBQUNBLFdBQVc7QUFDWCxXQUFXO0FBQ1gsdUJBQXVCOztBQUV2Qjs7QUFFQTtBQUNBLFdBQVc7QUFDWDs7QUFJQTtBQUNBLFdBQVc7QUFDWCxZQUFZO0FBQ1o7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckIsV0FBVztBQUNYLFlBQVk7QUFDWjs7QUFFQTtBQUNBLHNCQUFzQjtBQUN0QixpQkFBaUI7O0FBRWpCOztBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCLFlBQVk7QUFDWixpQkFBaUI7QUFDakIsa0JBQWtCO0FBQ2xCLGtCQUFrQjtBQUNsQjs7QUFFQTtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBLGdCQUFnQjtBQUNoQixnQkFBZ0I7QUFDaEIsV0FBVztBQUNYOztBQUVBO0FBQ0EsVUFBVTtBQUNWLGdCQUFnQjtBQUNoQixtQkFBbUI7QUFDbkIsc0NBQXNDO0FBQ3RDLG1CQUFtQjtBQUNuQjs7QUFFQTtBQUNBLG9CQUFvQjtBQUNwQixnQkFBZ0I7QUFDaEIsbUJBQW1CO0FBQ25CLFlBQVk7QUFDWjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixTQUFTO0lBQ1QsWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7O0lBRUksdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBSUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULGdDQUFnQztFQUNoQyxvQ0FBb0M7RUFDcEMsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUdBO0VBQ0UsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBR0E7QUFDQSxXQUFXO0FBQ1gsbUJBQW1CO0FBQ25CLGlCQUFpQjtBQUNqQixjQUFjO0FBQ2QsYUFBYTtBQUNiLGlCQUFpQjtBQUNqQixjQUFjO0FBQ2Qsb0JBQW9CO0FBQ3BCLG1DQUEyQjtRQUEzQiwyQkFBMkI7QUFDM0IsVUFBVTtBQUNWOztBQUdBO0VBQ0UsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlci1wYWdlL3VzZXItcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVzZXJjYXJkMSB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIHBhZGRpbmc6IDBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsMCwwLDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xufVxuXG4ubWF0LWNhcmQtYXZhdGFyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL3VzZXJQaG90by5wbmcnKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcblxufVxuLm1hdC1jYXJkLWFjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ubGlzdC1oZWFkZXItdGl0bGUge1xuY29sb3I6IHJnYmEoMCwgMCwgMCwgLjU0KTtcbmJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wNjIpO1xuZm9udC13ZWlnaHQ6IGJvbGQ7XG5wYWRkaW5nOiAwcHg7XG5cbn1cblxuLm1hdC1jYXJkLWhlYWRlciB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgcGFkZGluZy10b3A6IDEwcHg7IFxufVxuXG4ubWF0LXJhaXNlZC1idXR0b24ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5cblxuLnVzZXJjYXJkMiB7XG5tYXJnaW4tdG9wOiAzMHB4O1xuY29sb3I6IHJnYmEoMCwgMCwgMCwgLjU0KTtcbmJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wNjIpO1xuaGVpZ2h0OiA4Ni41JTtcbnBhZGRpbmctYm90dG9tOiAyNXB4O1xuYm9yZGVyLXJhZGl1czogNXB4O1xuYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLDAsMCwwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcbn1cblxuLnZpZXdwb3J0IHtcbndpZHRoOiAxMDAlO1xuaGVpZ2h0OiAxMDAlO1xubWFyZ2luLWxlZnQ6IDQwcHg7XG5ib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsMCwwLDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xufVxuXG4uY2RrLXZpcnR1YWwtc2Nyb2xsLXZpZXdwb3J0IHtcbmhlaWdodDogNzAlO1xubWFyZ2luOiAwcHg7XG5iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcblxufVxuXG4uZXhhbXBsZS1mb3JtIC5tYXQtZm9ybS1maWVsZCB7XG5tYXJnaW46IDBweDtcbn1cblxuXG5cbi5tYXQtbGlzdCB7XG53aWR0aDogMTAwJTtcbmhlaWdodDogMTAwJTtcbn1cblxuLmdyaWQtY29udGFpbmVyIHtcbmdyaWQ6IGF1dG8tZmxvdyAvIDFmcjtcbndpZHRoOiAxMDAlO1xuaGVpZ2h0OiAxMDAlO1xufVxuXG4uZ3JpZC1zZWFyY2gge1xuZ3JpZC1hcmVhOiBncmlkLXNlYXJjaDtcbm1hcmdpbi1sZWZ0OiAyNXB4O1xuXG59XG4uZ3JpZC1pdGVtIHtcbmdyaWQtYXJlYTogZ3JpZC1pdGVtO1xuaGVpZ2h0OiAxMDAlO1xubWFyZ2luLWxlZnQ6IDI1cHg7XG5tYXJnaW4tcmlnaHQ6IDI1cHg7XG5tYXJnaW4tYm90dG9tOiAwcHg7XG59XG5cbi5tYXQtY2hpcC1saXN0IHtcbm1hcmdpbjogMXB4O1xufVxuXG4uZXhhbXBsZS1mb3JtIHtcbm1pbi13aWR0aDogMTUwcHg7XG5tYXgtd2lkdGg6IDUwMHB4O1xud2lkdGg6IDEwMCU7XG59XG5cbi5leGFtcGxlLWZ1bGwtd2lkdGgge1xud2lkdGg6IDgwJTtcbm1hcmdpbi10b3A6IDE1cHg7XG5tYXJnaW4tYm90dG9tOiAxNXB4O1xuYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjY3MSk7XG5ib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuXG4ud3JhcHBlciB7XG5kaXNwbGF5OmlubGluZS1ibG9jaztcbm1hcmdpbi10b3A6IDEwcHg7XG5tYXJnaW4tYm90dG9tOiAxNXB4O1xuaGVpZ2h0OiAzMHB4O1xufVxuXG5pbnB1dCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiAzO1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG59XG5cbmJ1dHRvbiB7XG4gICAgXG4gICAgYm9yZGVyOiBzb2xpZCBibGFjayAxcHg7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGhlaWdodDogMzhweDtcbn1cblxuLm1hdC1mbGF0LWJ1dHRvbiAge1xuICB3aWR0aDogYXV0bztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogMTBweDsgXG59XG5cblxuXG4udXBsb2FkQnV0dG9uIHtcbiAgaGVpZ2h0OiAzOHB4O1xufVxuXG4ubWlkZGxlIHtcbiAgdHJhbnNpdGlvbjogLjVzIGVhc2U7XG4gIG9wYWNpdHk6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY29udGFpbmVyUGljOmhvdmVyIC5pbWFnZSB7XG4gIG9wYWNpdHk6IDAuMztcbn1cblxuLmNvbnRhaW5lclBpYzpob3ZlciAubWlkZGxlIHtcbiAgb3BhY2l0eTogMTtcbn1cblxuXG4uaW1hZ2UtYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQ6ICM1NTU1NTU7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5jb250YWluZXJQaWMge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cblxuLm1hdC1jYXJkLWltYWdlIHtcbm1hcmdpbjogMHB4O1xubWFyZ2luLWxlZnQ6IDguMDk5JTtcbm1hcmdpbi1yaWdodDogMTAlO1xuZGlzcGxheTogYmxvY2s7XG5oZWlnaHQ6IDQ5MHB4O1xubWF4LWhlaWdodDogNTAwcHg7XG5tYXgtd2lkdGg6IDg1JTtcbnRyYW5zaXRpb246IC41cyBlYXNlO1xuYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xub3BhY2l0eTogMTtcbn1cblxuXG4ubWF0LWdyaWQtdGlsZSB7XG4gIG92ZXJmbG93OiB1bnNldDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/user/user-page/user-page.component.html":
/*!*********************************************************!*\
  !*** ./src/app/user/user-page/user-page.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n  fxLayout.lt-sm=\"column\"  : Will only be applied when the viewport is less thatn small.\n  fxLayout = \"row\"         : If ;using big screens, display data in rows\n  fxLayout.xs =\"column\" ;  : using small screens, display data in columns\n  fxLayoutWrap             : Will wrap this div for us so that flex will be applied\n  fxLayoutGap = 20%;       : Will give us a gap bewteen each fxFlex\n-->\n  <div class = \"container\" fxLayout = \"row\" fxLayout.xs = \"column\" fxLayoutWrap fxLayoutAlign=\"center\">\n\n    <div fxFlex = \"40%\" fxFlex.xs = \"80%\">\n        <mat-card class=\"usercard1\">\n          \n                <mat-card-header class=\"list-header-title\">\n\n                    <div mat-card-avatar></div>\n                      <mat-card-title>{{ userData?.name }}</mat-card-title>\n                      <mat-card-subtitle>{{ userData?.username }}</mat-card-subtitle>\n                      <button mat-flat-button color=\"primary\" (click) = \"openDialog1()\" *ngIf=\"canEdit\">Edit</button>\n                      <button mat-flat-button color=\"primary\" (click) = \"messageUser()\" *ngIf=\"canMessage\">Message</button>\n                </mat-card-header>  \n\n              \n                <div class=\"containerPic\">\n                  <div class=\"image-background\">\n                      <div class=\"image-container\">\n                          <img mat-card-image [src] = \"imageLink\"\n                          onerror=\"this.onerror=null; this.src = 'assets/userPhoto.png';\"\n                           class=\"image\">\n                      </div> \n\n                      <div class=\"middle\"  *ngIf=\"canEdit\">\n                        <button mat-raised-button class=\"text\" (click) = \"openDialog4()\">Change Picture</button>\n                      </div>\n                    </div>  \n                  </div>\n\n                <!--img mat-card-image -->\n                <mat-card-content>\n                \n                <mat-grid-list cols=\"2\" rowHeight=\"4:1\" class=\"user-links\">\n                    <mat-grid-tile>\n                          <button mat-raised-button color=\"warm\" (click) = \"onNavigateGithub()\" >{{ userData?.github }}</button>\n                    </mat-grid-tile>\n                    \n                    <mat-grid-tile>\n                        <button mat-raised-button color=\"primary\" (click) = \"onNavigateLinkedIn()\">{{ userData?.linkedin }}</button>\n                    </mat-grid-tile>\n                </mat-grid-list>\n\n              </mat-card-content>\n        </mat-card>\n    </div>\n\n    <div fxFlex = \"40%\" fxFlex.xs = \"80%\">\n      <div class=\"usercard2\">\n        <mat-grid-list cols=\"1\" rowHeight=\"2:1\">\n          <!-- Will hold class list -->\n            <mat-grid-tile>\n            <div class =\"grid-container\">  \n              <div class = \"grid-search\">\n                  <div class=\"wrapper\">\n                      <button (click) = \"openDialog2()\" mat-flat-button color=\"primary\" *ngIf=\"canEdit\"> Update </button>\n                  </div>\n              </div>\n              \n              <div class = \"grid-item\">\n                  <cdk-virtual-scroll-viewport itemSize=\"classes.size\" class=\"viewport\">\n                      <mat-chip-list>\n                        <mat-chip *ngFor = \"let class of userData?.classes\">\n                          {{ class }}\n                        </mat-chip>\n                      </mat-chip-list>\n                    </cdk-virtual-scroll-viewport>\n                </div>\n            </div>    \n            </mat-grid-tile>\n            <br>\n            <br>\n            <br>\n          <!-- Will hold the skill list -->\n          <mat-grid-tile>\n              <div class =\"grid-container\">  \n                  <div class = \"grid-search\">\n                      <div class=\"wrapper\">\n                          <button (click) = \"openDialog3()\" mat-flat-button color=\"primary\" *ngIf=\"canEdit\"> Update </button>\n                      </div>\n                  </div>\n                  <div class = \"grid-item\">\n                      <cdk-virtual-scroll-viewport itemSize=\"skills.size\" class=\"viewport\">\n                          <mat-chip-list>\n                            <mat-chip *ngFor = \"let skill of userData?.skills\">\n                              {{ skill }}\n                            </mat-chip>  \n                          </mat-chip-list>\n                        </cdk-virtual-scroll-viewport>\n                    </div>\n                </div>\n          </mat-grid-tile>\n        </mat-grid-list>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/user/user-page/user-page.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/user/user-page/user-page.component.ts ***!
  \*******************************************************/
/*! exports provided: UserPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPageComponent", function() { return UserPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _edit_picture_edit_picture_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../edit-picture/edit-picture.component */ "./src/app/user/edit-picture/edit-picture.component.ts");
/* harmony import */ var _edit_skills_edit_skills_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../edit-skills/edit-skills.component */ "./src/app/user/edit-skills/edit-skills.component.ts");
/* harmony import */ var _edit_classes_edit_classes_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../edit-classes/edit-classes.component */ "./src/app/user/edit-classes/edit-classes.component.ts");
/* harmony import */ var _edit_user_form_edit_user_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../edit-user-form/edit-user-form.component */ "./src/app/user/edit-user-form/edit-user-form.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_dbAccess_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/dbAccess/user.service */ "./src/app/shared/dbAccess/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");










var UserPageComponent = /** @class */ (function () {
    /**
    * @author Edwin Quintuna
    *
    *	@brief Constructor that will create an instance of UserPageComponent
    *        and allow us to inject our dependencies; services that will be needed in the component
    *
    *	@param[userService]  ,  service that will handle both retrival and updating user data via http requests
    *	@param[activeRoute]  ,  will allow us to retrieve path parameters if they are set
    *	@param[dialog]       ,  will open a
    *	@return nothing
    */
    function UserPageComponent(userService, router, formBuilder, activeRoute, dialog) {
        this.userService = userService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.activeRoute = activeRoute;
        this.dialog = dialog;
        this.filteredUsers = [];
        this.isLoading = false;
        //default variable for selected file.
        this.fileToUpload = null;
    }
    /**
    * @author Edwin Quintuna
    *
    *	@brief Function that will be called once the Angular has finished initializing and setting up the component
    *        This function is async as we need to wait for data to be retrieved before setting values or doing logic
    *
    *	@return nothing
    */
    UserPageComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    //Will retrieve the 'username' parameter from the url if set.
                    return [4 /*yield*/, this.activeRoute.paramMap
                            .subscribe(function (params) {
                            _this.username = params.get('username');
                        })
                        //Will set the 'canEdit' boolean variable depending if the user viewing the page is the owner. 
                        //If so, allow that user to edit his page fields.
                    ];
                    case 1:
                        //Will retrieve the 'username' parameter from the url if set.
                        _a.sent();
                        //Will set the 'canEdit' boolean variable depending if the user viewing the page is the owner. 
                        //If so, allow that user to edit his page fields.
                        return [4 /*yield*/, this.userService.getUserdetails()
                                .subscribe(function (res) {
                                if (res['username'] === _this.username || _this.username == null) {
                                    _this.canEdit = true;
                                }
                                else {
                                    _this.canEdit = false;
                                    _this.canMessage = true;
                                }
                            })];
                    case 2:
                        //Will set the 'canEdit' boolean variable depending if the user viewing the page is the owner. 
                        //If so, allow that user to edit his page fields.
                        _a.sent();
                        //Load the user data that will be displayed in our html files
                        this.loadUserData(this.username);
                        return [2 /*return*/];
                }
            });
        });
    };
    UserPageComponent.prototype.messageUser = function () {
        this.router.navigate(['/conversations/message/', this.username]);
    };
    /**
    * @author Edwin Quintuna
    *
    *	@brief Function that will load a users data or another users data, depending on whether the variable
    *        'username' has been set from the url parameter.
    *
    *	@param[username]  ,  variable that will store the username retrieved from the url parameter
    *	@return nothing
    */
    UserPageComponent.prototype.loadUserData = function (username) {
        var _this = this;
        //If username is set, retrieve data for that user
        //Else retrieve the data of the current user logged in
        if (username) {
            this.userService.getMemberdetails(username).subscribe(function (userData) {
                _this.userData = userData;
                _this.userClass = userData["classes"];
                _this.userSkill = userData["skills"];
            });
            this.profileMemberPicture(username);
        }
        else {
            this.userService.getUserdetails().subscribe(function (userData) {
                _this.userData = userData;
                _this.userClass = userData["classes"];
                _this.userSkill = userData["skills"];
            });
            this.profilePicture();
        }
    };
    UserPageComponent.prototype.profilePicture = function () {
        var _this = this;
        this.userService.getPicture().subscribe(function (link) {
            console.log(link);
            _this.imageLink = 'http://' + link;
            console.log(_this.imageLink);
        });
    };
    UserPageComponent.prototype.profileMemberPicture = function (username) {
        var _this = this;
        this.userService.getMemberPicture(username).subscribe(function (link) {
            _this.imageLink = 'http://' + link;
        });
    };
    /**
    * @author Edwin Quintuna
    *
    *	@brief Function that will open a dialog window with the content of EditUserFormComponent
    *        The window will open on the same screen, using the same data as the current screen
    *
    *	@return nothing
    */
    UserPageComponent.prototype.openDialog1 = function () {
        //Dialog refeerence that will handle the closing of the dialog and to receive 
        //notifiations when the dialog has been closed
        var dialogRef = this.dialog.open(_edit_user_form_edit_user_form_component__WEBPACK_IMPORTED_MODULE_4__["EditUserFormComponent"], {
            width: '50%',
            //Data that will be passed to the dialog
            data: {
                userData: this.userData
            }
        });
        //Logic done after the dialog has been closed from the dialog window
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
        });
    };
    /**
    * @author Edwin Quintuna
    *
    *	@brief Function that will open a dialog window with the content of EditClassesComponent
    *        The window will open on the same screen, using the same data as the current screen
    *
    *	@return nothing
    */
    UserPageComponent.prototype.openDialog2 = function () {
        //Dialog refeerence that will handle the closing of the dialog and to receive 
        //notifiations when the dialog has been closed
        var dialogRef = this.dialog.open(_edit_classes_edit_classes_component__WEBPACK_IMPORTED_MODULE_3__["EditClassesComponent"], {
            width: '95%',
            data: {
                userData: this.userData
            }
        });
        //Logic done after the dialog has been closed from the dialog window
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
        });
    };
    /**
    * @author Edwin Quintuna
    *
    *	@brief Function that will open a dialog window with the content of EditSkillsComponent
    *        The window will open on the same screen, using the same data as the current screen
    *
    *	@return nothing
    */
    UserPageComponent.prototype.openDialog3 = function () {
        //Dialog refeerence that will handle the closing of the dialog and to receive 
        //notifiations when the dialog has been closed
        var dialogRef = this.dialog.open(_edit_skills_edit_skills_component__WEBPACK_IMPORTED_MODULE_2__["EditSkillsComponent"], {
            width: '70%',
            data: {
                userData: this.userData
            }
        });
        //Logic done after the dialog has been closed from the dialog window
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
        });
    };
    /**
    * @author Edwin Quintuna
    *
    *	@brief Function that will open a dialog window with the content of EditPictureComponent
    *        The window will open on the same screen, using the same data as the current screen
    *
    *	@return nothing
    */
    UserPageComponent.prototype.openDialog4 = function () {
        //Dialog refeerence that will handle the closing of the dialog and to receive 
        //notifiations when the dialog has been closed
        var dialogRef = this.dialog.open(_edit_picture_edit_picture_component__WEBPACK_IMPORTED_MODULE_1__["EditPictureComponent"], {
            width: '280px',
            data: {
                userData: this.userData
            }
        });
        //Logic done after the dialog has been closed from the dialog window
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed' + result);
            if (result == true) {
            }
        });
    };
    UserPageComponent.prototype.changeProfilePic = function () {
        console.log("Change profile pic.");
    };
    /**
    * @author Edwin Quintuna
    *
    *	@brief Function that will redirect to a users github page and will open on a separate window
    *
    *	@return nothing
    */
    UserPageComponent.prototype.onNavigateGithub = function () {
        window.open("https://" + (this.userData).github, "_blank");
    };
    /**
    * @author Edwin Quintuna
    *
    *	@brief Function that will redirect to a users linkedIn page and will open on a separate window
    *
    *	@return nothing
    */
    UserPageComponent.prototype.onNavigateLinkedIn = function () {
        window.open("https://" + (this.userData).linkedin, "_blank");
    };
    UserPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
            selector: 'app-user-page',
            template: __webpack_require__(/*! ./user-page.component.html */ "./src/app/user/user-page/user-page.component.html"),
            styles: [__webpack_require__(/*! ./user-page.component.css */ "./src/app/user/user-page/user-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_dbAccess_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"]])
    ], UserPageComponent);
    return UserPageComponent;
}());



/***/ }),

/***/ "./src/app/user/user-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/user/user-routing.module.ts ***!
  \*********************************************/
/*! exports provided: UserRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRoutingModule", function() { return UserRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_page_user_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-page/user-page.component */ "./src/app/user/user-page/user-page.component.ts");




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
        //Path to UserPageComponent, which places the parameter ':username' in the path
        //':username' will be used to retrieve that specific users data 
        path: ':username',
        component: _user_page_user_page_component__WEBPACK_IMPORTED_MODULE_3__["UserPageComponent"]
    },
    {
        //This is the default path the user will enter if the url is /user
        path: '',
        component: _user_page_user_page_component__WEBPACK_IMPORTED_MODULE_3__["UserPageComponent"]
    }
];
var UserRoutingModule = /** @class */ (function () {
    function UserRoutingModule() {
    }
    UserRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            //Lets angular know that the route list is only responsible 
            //for providing additional routes and intended for feature modules
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], UserRoutingModule);
    return UserRoutingModule;
}());



/***/ }),

/***/ "./src/app/user/user.module.ts":
/*!*************************************!*\
  !*** ./src/app/user/user.module.ts ***!
  \*************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm5/autocomplete.es5.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm5/chips.es5.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _user_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./user-routing.module */ "./src/app/user/user-routing.module.ts");
/* harmony import */ var _user_page_user_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./user-page/user-page.component */ "./src/app/user/user-page/user-page.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _edit_user_form_edit_user_form_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./edit-user-form/edit-user-form.component */ "./src/app/user/edit-user-form/edit-user-form.component.ts");
/* harmony import */ var _edit_classes_edit_classes_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./edit-classes/edit-classes.component */ "./src/app/user/edit-classes/edit-classes.component.ts");
/* harmony import */ var _edit_skills_edit_skills_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./edit-skills/edit-skills.component */ "./src/app/user/edit-skills/edit-skills.component.ts");
/* harmony import */ var _edit_picture_edit_picture_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./edit-picture/edit-picture.component */ "./src/app/user/edit-picture/edit-picture.component.ts");












//Material Components











var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["NgModule"])({
            declarations: [_user_page_user_page_component__WEBPACK_IMPORTED_MODULE_11__["UserPageComponent"], _edit_user_form_edit_user_form_component__WEBPACK_IMPORTED_MODULE_19__["EditUserFormComponent"], _edit_classes_edit_classes_component__WEBPACK_IMPORTED_MODULE_20__["EditClassesComponent"], _edit_skills_edit_skills_component__WEBPACK_IMPORTED_MODULE_21__["EditSkillsComponent"], _edit_picture_edit_picture_component__WEBPACK_IMPORTED_MODULE_22__["EditPictureComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"],
                _user_routing_module__WEBPACK_IMPORTED_MODULE_10__["UserRoutingModule"],
                //Angular Material
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_15__["MatTabsModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__["MatGridListModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_18__["MatListModule"],
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__["ScrollDispatchModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_5__["MatChipsModule"],
                _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__["MatAutocompleteModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"],
                //Flex Module
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"],
                //Template Driven Forms
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                //
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            ],
            entryComponents: [
                _edit_user_form_edit_user_form_component__WEBPACK_IMPORTED_MODULE_19__["EditUserFormComponent"],
                _edit_classes_edit_classes_component__WEBPACK_IMPORTED_MODULE_20__["EditClassesComponent"],
                _edit_skills_edit_skills_component__WEBPACK_IMPORTED_MODULE_21__["EditSkillsComponent"],
                _edit_picture_edit_picture_component__WEBPACK_IMPORTED_MODULE_22__["EditPictureComponent"]
            ]
        })
    ], UserModule);
    return UserModule;
}());



/***/ })

}]);
//# sourceMappingURL=user-user-module.js.map