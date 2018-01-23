webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <app-header></app-header>\n  <app-calender></app-calender>\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let AppComponent = class AppComponent {
    constructor() {
        this.title = 'Table Reservation Management System';
    }
};
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm2015/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm2015/material.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm2015/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/esm2015/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm2015/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common__ = __webpack_require__("../../../common/esm2015/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__create_reservation_create_reservation_component__ = __webpack_require__("../../../../../src/app/create-reservation/create-reservation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__calender_calender_component__ = __webpack_require__("../../../../../src/app/calender/calender.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__common_service__ = __webpack_require__("../../../../../src/app/common.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__tile_tile_component__ = __webpack_require__("../../../../../src/app/tile/tile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__dragdrop_directive__ = __webpack_require__("../../../../../src/app/dragdrop.directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














let AppModule = class AppModule {
};
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["H" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_9__create_reservation_create_reservation_component__["a" /* CreateReservationComponent */],
            __WEBPACK_IMPORTED_MODULE_10__calender_calender_component__["a" /* CalenderComponent */],
            __WEBPACK_IMPORTED_MODULE_12__tile_tile_component__["a" /* TileComponent */],
            __WEBPACK_IMPORTED_MODULE_13__dragdrop_directive__["a" /* DragdropDirective */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MatDialogModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["d" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["i" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MatSelectModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MatDatepickerModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["g" /* MatNativeDateModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MatInputModule */]
        ],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_9__create_reservation_create_reservation_component__["a" /* CreateReservationComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_6__angular_common__["c" /* DatePipe */], __WEBPACK_IMPORTED_MODULE_11__common_service__["a" /* CommonService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);



/***/ }),

/***/ "../../../../../src/app/calender/calender.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align: center;\" *ngIf=\"tablesReservations\">\r\n  <!-- {{currentDate}} -->\r\n  <table class=\"table table-striped\" style=\"padding:10px;\">\r\n    <tr>\r\n      <td>\r\n        <table class=\"table table-striped\">\r\n          <tr>\r\n            <td></td>\r\n          </tr>\r\n          <ng-container *ngFor=\"let table of tables\">\r\n            <tr>\r\n              <th>{{table.id}}</th>\r\n            </tr>\r\n          </ng-container>\r\n        </table>\r\n      </td>\r\n      <td>\r\n        <table class=\"table table-striped\" id=\"tableReservations\">\r\n          <thead>\r\n            <tr>\r\n              <ng-container *ngFor=\"let hour of openHours\"> \r\n                <th>\r\n                  {{hour}}\r\n                </th>\r\n              </ng-container>\r\n            </tr>\r\n          </thead>\r\n          <tbody >\r\n            <ng-container *ngFor=\"let tablesReservation of tablesReservations\">\r\n              <tr>\r\n                <ng-container *ngFor=\"let reservation of tablesReservation.slot; let i=index\"\r\n                 >\r\n                  <td (click)=\"trackMouse($event, tablesReservation['tableId'], i)\">\r\n                    <ng-container *ngIf=\"reservation != 0\">\r\n                      <!-- {{reservation}} -->\r\n                      <app-tile [reservation_id]=\"reservation\" dragdrop></app-tile>\r\n                      <!-- <div *ngIf=\"showForm\">\r\n                        <app-create-reservation></app-create-reservation>\r\n                      </div> -->\r\n                    </ng-container>\r\n                  </td>\r\n                </ng-container>\r\n              </tr>\r\n            </ng-container>\r\n          </tbody>\r\n        </table>\r\n      </td>\r\n    </tr>\r\n  </table>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/calender/calender.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div {\n  font-size: 20px;\n  border: 1px solid #fcf7f7;\n  border-collapse: collapse; }\n  div table tr td {\n    border: 1px solid #ccc7c7;\n    border-collapse: collapse; }\n    div table tr td table th, div table tr td td {\n      border: 1px solid #ebe3e3;\n      border-collapse: collapse;\n      text-align: center;\n      padding: 0; }\n    div table tr td th, div table tr td td {\n      width: 50px;\n      height: 50px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/calender/calender.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalenderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm2015/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm2015/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm2015/material.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_Reservation__ = __webpack_require__("../../../../../src/app/models/Reservation.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__create_reservation_create_reservation_component__ = __webpack_require__("../../../../../src/app/create-reservation/create-reservation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_service__ = __webpack_require__("../../../../../src/app/common.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







let CalenderComponent = class CalenderComponent {
    constructor(httpCient, datepipe, commonService, dialog) {
        this.httpCient = httpCient;
        this.datepipe = datepipe;
        this.commonService = commonService;
        this.dialog = dialog;
        this.tablesReservations = [];
        this.tempTR = [];
        this.slotInit = [];
        this.slots = [];
        this.showForm = false;
    }
    ngOnInit() {
        this.commonService.getTable().subscribe((data) => {
            this.tables = data['tables'];
            this.tablesReservations = data['tablesReservations'];
            // this.tablesReservations.sort(function(a,b){
            //   return a.tableId - b.tableId;
            //  });
            console.log('data from service - ', data);
            // console.log('sort in calender', this.tablesReservations);
        });
        this.opening = 11;
        this.closing = 21;
        this.openHours = Array(this.closing - this.opening).
            fill(0).map((x, i) => ((i + this.opening).toString() + ':00'));
        this.currentDate = this.datepipe.transform(new Date(), 'yyyy-MM-dd');
        this.commonService.getCurrentDate().subscribe((date) => {
            this.currentDate = date;
            this.commonService.fillTable();
        });
        this.openHours = Array(this.closing - this.opening).
            fill(0).map((x, i) => ((i + this.opening)));
        console.log(this.openHours);
        this.commonService.fillTable();
    }
    trackMouse(e, tableId, slot) {
        console.log('calender - mouse X = ', e.clientX, ' Y = ', e.clientY, tableId, slot);
        this.openDialog(tableId, slot);
    }
    openDialog(tableId, slot) {
        this.dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__create_reservation_create_reservation_component__["a" /* CreateReservationComponent */], {
            width: '700px',
            height: '350px',
            data: { "from": "calender", "data": new __WEBPACK_IMPORTED_MODULE_4__models_Reservation__["c" /* Reservation */]('', new __WEBPACK_IMPORTED_MODULE_4__models_Reservation__["a" /* Attributes */](new Date(this.currentDate), +this.openHours[slot], +this.openHours[slot + 1], 0, tableId, '', new __WEBPACK_IMPORTED_MODULE_4__models_Reservation__["b" /* ContactDetails */]('', ''), [''], '')) }
        });
        this.dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            this.commonService.fillTable();
        });
    }
};
CalenderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'app-calender',
        template: __webpack_require__("../../../../../src/app/calender/calender.component.html"),
        styles: [__webpack_require__("../../../../../src/app/calender/calender.component.scss")]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* DatePipe */],
        __WEBPACK_IMPORTED_MODULE_6__common_service__["a" /* CommonService */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["c" /* MatDialog */]])
], CalenderComponent);



/***/ }),

/***/ "../../../../../src/app/common.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommonService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm2015/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// var Rx = require('rxjs/Rx');


let CommonService = class CommonService {
    constructor(httpCient) {
        this.httpCient = httpCient;
        this.currentDateSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["Subject"]();
        this.gridSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["Subject"]();
        this.opening = 11;
        this.closing = 21;
        this.openHours = Array(this.closing - this.opening).
            fill(0).map((x, i) => ((i + this.opening).toString() + ':00'));
    }
    setCurrentDate(date) {
        this.currentDate = date;
        this.currentDateSubject.next(date);
    }
    getCurrentDate() {
        return this.currentDateSubject.asObservable();
    }
    getTable() {
        return this.gridSubject.asObservable();
    }
    fillTable() {
        console.log('inside fillTable');
        this.tr = [];
        this.httpCient.get('api/table/get_tables').subscribe(data => {
            this.tables = data['tables'];
            //console.log('service', this.tables);
            data['tables'].forEach(table => {
                // console.log('forEach order', table['id']);
                this.httpCient.get('api/table/get_table_reservations/' + table['id'] + '/' + this.currentDate)
                    .subscribe(tableReservation => {
                    this.tr.push({
                        tableId: +table['id'],
                        slot: Array(this.closing - this.opening).fill({}).map((val, index) => ({
                            'start': this.opening + index,
                            'end': this.opening + index + 1,
                            'reservation_id': 0
                        })).map(slot => {
                            tableReservation['reservations'].forEach(reservation => {
                                if (reservation['attributes']['slot_start'] == slot['start']) {
                                    slot['reservation_id'] = reservation['reservation_id'];
                                }
                            });
                            return slot['reservation_id'];
                        })
                    });
                    console.log('service - tablesreservations - ', this.tr);
                    this.tr.forEach(a => {
                        console.log('array style-', this['tableId']);
                        console.log('object style-', this.tr.tableId);
                    });
                    let sortFn = function (a, b) {
                        return a.tableId - b.tableId;
                    };
                    this.tr.sort(sortFn);
                    console.log('service - tablesreservations - sorted', this.tr);
                    this.gridSubject.next({
                        'tables': this.tables.sort(),
                        'tablesReservations': this.tr
                    });
                }, err => console.log(err));
            });
        });
    }
};
CommonService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
], CommonService);



/***/ }),

/***/ "../../../../../src/app/create-reservation/create-reservation.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"reservation\" *ngIf=\"reservationForm\">\r\n    <form (ngSubmit)=\"onReservationSubmit()\" [formGroup]=\"reservationForm\">\r\n\r\n        <mat-form-field>\r\n            <mat-select placeholder=\"Type\" formControlName=\"type\">\r\n                <!-- <mat-option>None</mat-option> -->\r\n                <mat-option *ngFor=\"let type of reservationTypes\" [value]=\"type\">{{type}}</mat-option>\r\n            </mat-select>\r\n        </mat-form-field>\r\n\r\n        <div formGroupName=\"attributes\">\r\n            <mat-form-field>\r\n                <input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\" formControlName=\"date_time\">\r\n                <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                <mat-datepicker #picker></mat-datepicker>\r\n            </mat-form-field>\r\n\r\n            <mat-form-field>\r\n                <mat-select placeholder=\"Slot Start\" formControlName=\"slot_start\">\r\n                    <!-- <mat-option>None</mat-option> -->\r\n                    <mat-option *ngFor=\"let openHour of openHours\" [value]=\"openHour.value\">{{openHour.display}}</mat-option>\r\n                </mat-select>\r\n            </mat-form-field>\r\n\r\n            <mat-form-field>\r\n                <mat-select placeholder=\"Slot End\" formControlName=\"slot_end\">\r\n                    <!-- <mat-option>None</mat-option> -->\r\n                    <mat-option *ngFor=\"let openHour of openHours\" [value]=\"openHour.value\">{{openHour.display}}</mat-option>\r\n                </mat-select>\r\n            </mat-form-field>\r\n\r\n\r\n            <mat-form-field>\r\n                <mat-select placeholder=\"Guest Count\" formControlName=\"guest_count\">\r\n                    <!-- <mat-option>None</mat-option> -->\r\n                    <mat-option *ngFor=\"let guest of guestCountList\" [value]=\"guest\">{{guest}}</mat-option>\r\n                </mat-select>\r\n            </mat-form-field>\r\n\r\n\r\n            <mat-form-field>\r\n                <mat-select placeholder=\"Table\" formControlName=\"table_number\">\r\n                    <!-- <mat-option>None</mat-option> -->\r\n                    <mat-option *ngFor=\"let table of tableList\" [value]=\"table\">{{table}}</mat-option>\r\n                </mat-select>\r\n            </mat-form-field>\r\n\r\n            <mat-form-field>\r\n                <input matInput type=\"text\" placeholder=\"Mobile\" formControlName=\"mobile\">\r\n            </mat-form-field>\r\n\r\n            <div formGroupName=\"contact_details\">\r\n                <mat-form-field>\r\n                    <input matInput type=\"text\" placeholder=\"Name\" formControlName=\"name\">\r\n                </mat-form-field>\r\n                <mat-form-field>\r\n                    <input matInput type=\"email\" placeholder=\"Email\" formControlName=\"email\">\r\n                </mat-form-field>\r\n            </div>\r\n\r\n            <mat-form-field>\r\n                <mat-select placeholder=\"Tags\" formControlName=\"tags\" multiple>\r\n                    <mat-option *ngFor=\"let tag of tags\" [value]=\"tag.name\">{{tag.name}}</mat-option>\r\n                </mat-select>\r\n            </mat-form-field>\r\n\r\n            <mat-form-field>\r\n                <mat-select placeholder=\"Status\" formControlName=\"status\">\r\n                    <!-- <mat-option>None</mat-option> -->\r\n                    <mat-option *ngFor=\"let status of statuses\" [value]=\"status\">{{status}}</mat-option>\r\n                </mat-select>\r\n            </mat-form-field>\r\n        </div>\r\n        <div>\r\n            <span>\r\n                <button type=\"button\" class=\"btn btn-light\" (click)=\"hideCreateReservationForm()\">Cancel</button>\r\n            </span>\r\n            <span>\r\n                <button type=\"button\" class=\"btn btn-warning\" (click)=\"update()\">Update</button>\r\n            </span>\r\n            <span>\r\n                <button type=\"button\" class=\"btn btn-danger\" (click)=\"delete()\">Delete</button>\r\n            </span>\r\n            <span>\r\n                <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!reservationForm.valid\">Submit</button>\r\n            </span>\r\n        </div>\r\n    </form>\r\n\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/create-reservation/create-reservation.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/create-reservation/create-reservation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateReservationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm2015/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm2015/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm2015/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_Reservation__ = __webpack_require__("../../../../../src/app/models/Reservation.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_service__ = __webpack_require__("../../../../../src/app/common.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("../../../material/esm2015/material.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







let CreateReservationComponent = class CreateReservationComponent {
    constructor(httpCient, datepipe, commonService, dialogRef, data, fb) {
        this.httpCient = httpCient;
        this.datepipe = datepipe;
        this.commonService = commonService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.fb = fb;
    }
    ngOnInit() {
        this.opening = 11;
        this.closing = 21;
        this.openHours = Array(this.closing - this.opening).
            fill(0).map((x, i) => ({ 'value': i + this.opening, 'display': (i + this.opening).toString() + ':00' }));
        console.log('openhours-', this.openHours);
        this.reservation = new __WEBPACK_IMPORTED_MODULE_4__models_Reservation__["c" /* Reservation */]('', new __WEBPACK_IMPORTED_MODULE_4__models_Reservation__["a" /* Attributes */](new Date(0, 0), 0, 0, 0, 0, '', new __WEBPACK_IMPORTED_MODULE_4__models_Reservation__["b" /* ContactDetails */]('', ''), [''], ''));
        this.reservationTypes = ['Walk-In', 'Phone', 'Online'];
        this.showReservationForm = false;
        this.tags = ['Birthday', 'Anniversary', 'A la carte/ Buffet', 'Zomato/ Dineout', 'Outside Requested',
            'Indoor Requested', 'Window Requested', 'Smoking Area'].map((tag, i) => {
            return { name: tag, value: i, checked: false };
        });
        this.statuses = ['Arrived', 'Seated', 'Finished', 'Cancel', 'No-Show'];
        this.httpCient.get('api/table/get_tables').subscribe(data => {
            this.tableList = data['tables'].map(table => (table['id']));
            console.log(data);
        });
        console.log(this.data);
        if (Object.keys(this.data).length != 0) {
            this.reservation = this.data['data'];
            console.log('data from tile', this.reservation.attributes);
            let tableId = this.data['data']['attributes']['table_number'];
            this.httpCient.get('api/table/get_table/' + tableId).subscribe(data => {
                this.table = data['table'][0];
                this.guestCountList = tableId == 0 ? Array(10).fill(0).map((x, i) => (i + 1)) :
                    Array(this.table.capacity).fill(0).map((x, i) => (i + 1));
                this.tableList = tableId == 0 ? this.tableList : [tableId];
                this.from = this.data['from'];
                this.createForm();
            });
        }
    }
    createForm() {
        console.log('from - ', this.from);
        this.reservationForm = this.fb.group({
            type: [this.reservation.type || '', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* Validators */].required],
            attributes: this.fb.group({
                date_time: [this.reservation.attributes.date_time || '', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* Validators */].required],
                slot_start: [this.reservation.attributes.slot_start || '', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* Validators */].required],
                slot_end: [this.reservation.attributes.slot_end || '', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* Validators */].required],
                guest_count: [this.reservation.attributes.guest_count || '', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* Validators */].required],
                table_number: [this.reservation.attributes.table_number || '', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* Validators */].required],
                mobile: [this.reservation.attributes.guest_mobile_num || ''],
                contact_details: this.fb.group({
                    name: [this.reservation.attributes.contact_details.name || ''],
                    email: [this.reservation.attributes.contact_details.email || ''],
                }),
                tags: [this.reservation.attributes.tags || ''],
                status: [this.reservation.attributes.status || '']
            }, { validator: this.validateReservation() })
        });
    }
    validateReservation() {
        return (group) => {
            let start = group.controls['slot_start'].value;
            let end = group.controls['slot_end'].value;
            const slot_valid = start < end ? true : false;
            if (!slot_valid)
                return {
                    'diff': start - end
                };
            return null;
        };
    }
    hideCreateReservationForm() {
        this.dialogRef.close();
        // document.getElementById("createReservationForm").style.display = 'none';
    }
    onReservationSubmit() {
        this.httpCient.post('api/reservation/add_reservation', this.reservationForm.value).subscribe(data => {
            console.log(data);
            this.dialogRef.close(data);
        }, err => console.log(err));
        this.reservation = new __WEBPACK_IMPORTED_MODULE_4__models_Reservation__["c" /* Reservation */]('', new __WEBPACK_IMPORTED_MODULE_4__models_Reservation__["a" /* Attributes */](new Date(0, 0), 0, 0, 0, 0, '', new __WEBPACK_IMPORTED_MODULE_4__models_Reservation__["b" /* ContactDetails */]('', ''), [''], ''));
    }
    update() {
        this.httpCient.put('api/reservation/update_reservation/' +
            this.data['data']['reservation_id'], this.reservationForm.value).subscribe(data => {
            console.log(data);
            this.dialogRef.close(data);
        }, err => console.log(err));
    }
    delete() {
        this.httpCient.delete('api/reservation/delete_reservation/' +
            this.data['data']['reservation_id']).subscribe(data => {
            console.log(data);
            this.dialogRef.close(data);
        }, err => console.log(err));
    }
};
CreateReservationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'app-create-reservation',
        template: __webpack_require__("../../../../../src/app/create-reservation/create-reservation.component.html"),
        styles: [__webpack_require__("../../../../../src/app/create-reservation/create-reservation.component.scss")]
    }),
    __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])(__WEBPACK_IMPORTED_MODULE_6__angular_material__["a" /* MAT_DIALOG_DATA */])),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__angular_common__["c" /* DatePipe */],
        __WEBPACK_IMPORTED_MODULE_5__common_service__["a" /* CommonService */], __WEBPACK_IMPORTED_MODULE_6__angular_material__["e" /* MatDialogRef */],
        __WEBPACK_IMPORTED_MODULE_4__models_Reservation__["c" /* Reservation */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormBuilder */]])
], CreateReservationComponent);



/***/ }),

/***/ "../../../../../src/app/dragdrop.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DragdropDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let DragdropDirective = class DragdropDirective {
    constructor(el) {
        this.el = el;
        el.nativeElement.draggable = true;
        // console.log('attributes of tile - ', el.nativeElement.attributes)
        // console.log('children of tile - ', el.nativeElement)
        // el.nativeElement.children foreach(element => {
        //   element.draggable = true;
        // });
        // let div = el.nativeElement.querySelector('div')
        // console.log('div - ',div);
        // this.el.nativeElement.style.position = "absolute";
        // this.el.nativeElement.style.top = this.el.nativeElement.offsetTop;
    }
    onClick(event) {
        console.log('click');
        // this.el.nativeElement.style.top = "40px";
        // this.el.nativeElement.style.color = "red";
        event.stopPropagation();
    }
    onMouseEnter(event) {
        console.log('dragenter ', event);
        console.log('top - ', this.el.nativeElement.style.top);
        // this.el.nativeElement.style.top = "1px" ;
        console.log('rect ', this.el.nativeElement.getBoundingClientRect());
        event.stopPropagation();
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* HostListener */])('click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Event]),
    __metadata("design:returntype", void 0)
], DragdropDirective.prototype, "onClick", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* HostListener */])('dragenter', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Event]),
    __metadata("design:returntype", void 0)
], DragdropDirective.prototype, "onMouseEnter", null);
DragdropDirective = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
        selector: '[dragdrop]'
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
], DragdropDirective);



/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <nav class=\"navbar navbar-inverse navbar-static-top\">\n        <div class=\"container-fluid\">\n            <div class=\"navbar-header\">\n                <a class=\"navbar-brand\" href=\"#\">TRMS</a>\n            </div>\n            <div class=\"nav navbar-nav\">\n                <ul class=\"nav navbar-nav navbar-left\">\n                        <li><a href=\"#\"> {{currentDate | date}}</a></li>\n                        <li><a href=\"#\"> {{currentDate | date: 'E'}}</a></li>\n                </ul>\n                                        \n                <button class=\"btn btn-primary navbar-btn\" (click)=\"prev()\">Prev</button>\n                <button class=\"btn btn-default navbar-btn\" (click)=\"today()\">Today</button>\n                <button class=\"btn btn-primary navbar-btn\" (click)=\"next()\">Next</button>\n                \n                <span class=\"dropdown\">\n                    <button (click)=\"openDialog()\" class=\"btn btn-info dropdown-toggle\" type=\"button\"\n                    id=\"createReservationButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" \n                    aria-expanded=\"false\" >Create Reservation </button>\n                    <!-- <div class=\"dropdown-menu\" aria-labelledby=\"createReservationButton\" id=\"createReservationForm\">\n                        <app-create-reservation></app-create-reservation>\n                    </div> -->\n                </span>\n\n                <span class=\"dropdown\">\n                    <button (click)=\"addTable()\" class=\"btn btn-basic dropdown-toggle\" type=\"button\"\n                     id=\"addTableButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" \n                     aria-expanded=\"false\" >Add Table </button>\n\n\n            <div class=\"dropdown-menu addtable\" aria-labelledby=\"addTableButton\" id=\"addtableform\">\n                    <form (ngSubmit)=\"onTableSubmit()\" #tableForm=\"ngForm\" >\n                            <div class=\"form-group\">\n                                <label for=\"section\">Section</label>\n                                <select class=\"form-control\" id=\"section\"\n                                        required\n                                        [(ngModel)]=\"table.section\" name=\"section\"\n                                        #section=\"ngModel\">\n                                    <option *ngFor=\"let section of sections\" [value]=\"section\">{{section}}</option>\n                                </select>\n                                <!-- <div [hidden]=\"section.valid || section.pristine\" class=\"alert alert-danger\">\n                                    section is required\n                                </div> -->\n                            </div>\n                            <div class=\"form-group \">\n                                <label for=\"capacity\">Capacity</label>\n                                <select class=\"form-control\" id=\"capacity\"\n                                        required\n                                        [(ngModel)]=\"table.capacity\" name=\"capacity\"\n                                        #capacity=\"ngModel\">\n                                <option *ngFor=\"let capacity of capacities\" [value]=\"capacity\">{{capacity}}</option>\n                                </select>\n                                <!-- <div [hidden]=\"capacity.valid || capacity.pristine\" class=\"alert alert-danger\">\n                                    capacity is required\n                                </div> -->\n                            </div>\n                            <div>\n                                <span>\n                                        <button type=\"button\" class=\"btn btn-warning\" (click)=\"hideAddTableForm()\">Cancel</button>\n    \n                                </span>\n                                <span>\n                                        <button type=\"submit\" class=\"btn btn-success\"\n                                        [disabled]=\"!tableForm.form.valid\"\n                                        >Submit</button>\n                                </span>\n                            </div>\n                          \n                         \n                    </form> \n                </div>\n                </span>\n            </div>\n        </div>\n    </nav>\n    \n\n        \n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/header/header.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".addtable {\n  width: 180px;\n  height: 200px;\n  border: 1px solid #d8d6d6;\n  padding: 15px;\n  border-radius: 5px;\n  margin-left: 10px;\n  margin-right: 10px;\n  text-align: right; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm2015/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm2015/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm2015/material.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__create_reservation_create_reservation_component__ = __webpack_require__("../../../../../src/app/create-reservation/create-reservation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_Table__ = __webpack_require__("../../../../../src/app/models/Table.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_Reservation__ = __webpack_require__("../../../../../src/app/models/Reservation.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__common_service__ = __webpack_require__("../../../../../src/app/common.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








let HeaderComponent = class HeaderComponent {
    constructor(httpCient, datepipe, commonService, dialog) {
        this.httpCient = httpCient;
        this.datepipe = datepipe;
        this.commonService = commonService;
        this.dialog = dialog;
    }
    ngOnInit() {
        this.currentDate = this.datepipe.transform(new Date(), 'yyyy-MM-dd');
        this.commonService.setCurrentDate(this.currentDate);
        this.opening = 11;
        this.closing = 21;
        this.openHours = Array(this.closing - this.opening).
            fill(0).map((x, i) => ((i + this.opening).toString() + ':00'));
        console.log(this.openHours);
        this.table = new __WEBPACK_IMPORTED_MODULE_5__models_Table__["a" /* Table */]('', 0);
        this.sections = ['Indoor', 'Outdoor'];
        this.capacities = [1, 2, 3, 4, 5, 6, 7, 8];
        this.showAddTableForm = false;
        this.httpCient.get('api/table/get_tables').subscribe(data => {
            this.tableList = data['tables'].map(table => (table['id']));
            console.log(data);
        });
    }
    prev() {
        console.log(this.currentDate);
        this.currentDate = this.datepipe.transform(new Date(new Date(this.currentDate).getFullYear(), new Date(this.currentDate).getMonth(), new Date(this.currentDate).getDate() - 1), 'yyyy-MM-dd');
        console.log(this.currentDate);
        this.commonService.setCurrentDate(this.currentDate);
    }
    today() {
        this.currentDate = this.datepipe.transform(new Date(), 'yyyy-MM-dd');
        this.commonService.setCurrentDate(this.currentDate);
    }
    next() {
        console.log(this.currentDate);
        this.currentDate = this.datepipe.transform(new Date(new Date(this.currentDate).getFullYear(), new Date(this.currentDate).getMonth(), new Date(this.currentDate).getDate() + 1), 'yyyy-MM-dd');
        console.log(this.currentDate);
        this.commonService.setCurrentDate(this.currentDate);
    }
    addTable() {
        console.log('add table');
        let addTableForm = document.getElementById("addtableform");
        addTableForm.style.display = (addTableForm.style.display == 'block') ? 'none' : 'block';
    }
    createReservation() {
        console.log('create Reservation');
        let createReservationForm = document.getElementById("createReservationForm");
        createReservationForm.style.display = (createReservationForm.style.display == 'block') ? 'none' : 'block';
    }
    hideAddTableForm() {
        document.getElementById("addtableform").style.display = 'none';
    }
    hideCreateReservationForm() {
        document.getElementById("createReservationForm").style.display = 'none';
    }
    onTableSubmit() {
        if (this.table.section != '' && this.table.capacity != 0) {
            this.httpCient.post('api/table/add_table', this.table).subscribe(data => {
                console.log(data);
                this.commonService.fillTable();
            }, err => console.log(err));
            this.table = new __WEBPACK_IMPORTED_MODULE_5__models_Table__["a" /* Table */]('', 0);
            this.hideAddTableForm();
        }
    }
    openDialog() {
        let dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__create_reservation_create_reservation_component__["a" /* CreateReservationComponent */], {
            width: '700px',
            height: '350px',
            data: { "from": "header", "data": new __WEBPACK_IMPORTED_MODULE_6__models_Reservation__["c" /* Reservation */]('', new __WEBPACK_IMPORTED_MODULE_6__models_Reservation__["a" /* Attributes */](new Date(this.currentDate), 0, 0, 0, 0, '', new __WEBPACK_IMPORTED_MODULE_6__models_Reservation__["b" /* ContactDetails */]('', ''), [''], '')) }
        });
        dialogRef.afterClosed().subscribe(result => {
            this.commonService.fillTable();
            console.log('The dialog was closed');
        });
    }
};
HeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'app-header',
        template: __webpack_require__("../../../../../src/app/header/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/header/header.component.scss")]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__angular_common__["c" /* DatePipe */],
        __WEBPACK_IMPORTED_MODULE_7__common_service__["a" /* CommonService */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["c" /* MatDialog */]])
], HeaderComponent);



/***/ }),

/***/ "../../../../../src/app/models/Reservation.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Reservation {
    constructor(type, attributes) {
        this.type = type;
        this.attributes = attributes;
    }
}
/* harmony export (immutable) */ __webpack_exports__["c"] = Reservation;

class Attributes {
    constructor(date_time, slot_start, slot_end, guest_count, table_number, guest_mobile_num, contact_details, tags, status) {
        this.date_time = date_time;
        this.slot_start = slot_start;
        this.slot_end = slot_end;
        this.guest_count = guest_count;
        this.table_number = table_number;
        this.guest_mobile_num = guest_mobile_num;
        this.contact_details = contact_details;
        this.tags = tags;
        this.status = status;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Attributes;

class ContactDetails {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
}
/* harmony export (immutable) */ __webpack_exports__["b"] = ContactDetails;



/***/ }),

/***/ "../../../../../src/app/models/Table.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Table {
    constructor(section, capacity) {
        this.section = section;
        this.capacity = capacity;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Table;



/***/ }),

/***/ "../../../../../src/app/tile/tile.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"tile_data\">\r\n  <div (click)=\"openDialog()\">\r\n    <div>\r\n      <span class=\"name\">\r\n        {{tile_data.attributes.contact_details.name}}\r\n      </span>\r\n      <span class=\"type\">\r\n        {{tile_data.type}}\r\n      </span>\r\n      <span>\r\n        {{tile_data.attributes.guest_mobile_num}}\r\n      </span>\r\n      <div>\r\n        <ng-container *ngFor=\"let tag of tile_data.attributes.tags;let i=index\">\r\n          <span *ngIf=\"i<3\" class=\"tag\">{{tag}}</span>\r\n        </ng-container>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ng-container>"

/***/ }),

/***/ "../../../../../src/app/tile/tile.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div > div {\n  box-shadow: 2px 2px #888888;\n  border: 1px solid #d0f2f5;\n  background-color: #c4f4f8;\n  border-radius: 2px;\n  font-size: 7px;\n  width: 98%;\n  height: 80%;\n  text-align: left; }\n  div > div h6 {\n    margin: 1px 0px 1px 1px; }\n  div > div p {\n    margin: 1px 0px 1px 1px; }\n  div > div .name {\n    font-size: 9px; }\n  div > div .type {\n    font-size: 8px;\n    float: right; }\n  div > div div {\n    box-shadow: 0 0; }\n    div > div div .tag {\n      background-color: #eef7f8;\n      font-size: 8px;\n      border-radius: 2px;\n      padding: 1px;\n      margin: 1px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tile/tile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm2015/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm2015/material.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__create_reservation_create_reservation_component__ = __webpack_require__("../../../../../src/app/create-reservation/create-reservation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_service__ = __webpack_require__("../../../../../src/app/common.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





let TileComponent = class TileComponent {
    constructor(dialog, elementRef, httpCient, commonService) {
        this.dialog = dialog;
        this.elementRef = elementRef;
        this.httpCient = httpCient;
        this.commonService = commonService;
        // this.elementRef.nativeElement.draggable = true;
    }
    ngOnInit() {
        console.log(this.reservation_id);
        this.populateTile(this.reservation_id);
    }
    populateTile(id) {
        this.httpCient.get('api/reservation/get_reservation/' + id).subscribe(data => {
            this.tile_data = data['reservation'];
        });
    }
    openDialog() {
        let dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__create_reservation_create_reservation_component__["a" /* CreateReservationComponent */], {
            width: '700px',
            height: '350px',
            data: { "from": "tile", "data": this.tile_data }
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            this.commonService.fillTable();
        });
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Input */])(),
    __metadata("design:type", Number)
], TileComponent.prototype, "reservation_id", void 0);
TileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'app-tile',
        template: __webpack_require__("../../../../../src/app/tile/tile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/tile/tile.component.scss")]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */],
        __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_4__common_service__["a" /* CommonService */]])
], TileComponent);



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
const environment = {
    production: false
};
/* harmony export (immutable) */ __webpack_exports__["a"] = environment;



/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm2015/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(err => console.log(err));


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map