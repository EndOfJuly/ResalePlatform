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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _normal_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./normal/login/login.component */ "./src/app/normal/login/login.component.ts");
/* harmony import */ var _normal_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./normal/home/home.component */ "./src/app/normal/home/home.component.ts");
/* harmony import */ var _statistics_data_view_data_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./statistics/data-view/data-view.component */ "./src/app/statistics/data-view/data-view.component.ts");
/* harmony import */ var _resale_summarizing_summarizing_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./resale/summarizing/summarizing.component */ "./src/app/resale/summarizing/summarizing.component.ts");
/* harmony import */ var _resale_transaction_detail_transaction_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./resale/transaction-detail/transaction-detail.component */ "./src/app/resale/transaction-detail/transaction-detail.component.ts");
/* harmony import */ var _store_store_manage_store_manage_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./store/store-manage/store-manage.component */ "./src/app/store/store-manage/store-manage.component.ts");
/* harmony import */ var _store_staff_account_staff_account_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./store/staff-account/staff-account.component */ "./src/app/store/staff-account/staff-account.component.ts");
/* harmony import */ var _store_terminal_manage_terminal_manage_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./store/terminal-manage/terminal-manage.component */ "./src/app/store/terminal-manage/terminal-manage.component.ts");
/* harmony import */ var _member_member_type_member_type_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./member/member-type/member-type.component */ "./src/app/member/member-type/member-type.component.ts");
/* harmony import */ var _member_member_list_member_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./member/member-list/member-list.component */ "./src/app/member/member-list/member-list.component.ts");
/* harmony import */ var _operation_discount_discount_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./operation/discount/discount.component */ "./src/app/operation/discount/discount.component.ts");
/* harmony import */ var _operation_marketing_method_marketing_method_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./operation/marketing-method/marketing-method.component */ "./src/app/operation/marketing-method/marketing-method.component.ts");
/* harmony import */ var _system_department_manage_department_manage_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./system/department-manage/department-manage.component */ "./src/app/system/department-manage/department-manage.component.ts");
/* harmony import */ var _system_role_manage_role_manage_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./system/role-manage/role-manage.component */ "./src/app/system/role-manage/role-manage.component.ts");
/* harmony import */ var _system_role_accredit_role_accredit_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./system/role-accredit/role-accredit.component */ "./src/app/system/role-accredit/role-accredit.component.ts");
/* harmony import */ var _system_system_notice_system_notice_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./system/system-notice/system-notice.component */ "./src/app/system/system-notice/system-notice.component.ts");
/* harmony import */ var _store_edit_store_edit_store_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./store/edit-store/edit-store.component */ "./src/app/store/edit-store/edit-store.component.ts");
/* harmony import */ var _store_edit_staff_edit_staff_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./store/edit-staff/edit-staff.component */ "./src/app/store/edit-staff/edit-staff.component.ts");
/* harmony import */ var _store_edit_terminal_edit_terminal_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./store/edit-terminal/edit-terminal.component */ "./src/app/store/edit-terminal/edit-terminal.component.ts");
/* harmony import */ var _operation_edit_discount_edit_discount_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./operation/edit-discount/edit-discount.component */ "./src/app/operation/edit-discount/edit-discount.component.ts");
/* harmony import */ var _operation_edit_marketing_method_edit_marketing_method_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./operation/edit-marketing-method/edit-marketing-method.component */ "./src/app/operation/edit-marketing-method/edit-marketing-method.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: _normal_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    {
        path: 'home', component: _normal_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
        children: [
            {
                path: 'statistics', data: { breadcrumb: '统计' },
                children: [
                    { path: 'data-view', component: _statistics_data_view_data_view_component__WEBPACK_IMPORTED_MODULE_4__["DataViewComponent"], data: { breadcrumb: '数据概览' } }
                ]
            },
            {
                path: 'resale', data: { breadcrumb: '零售' },
                children: [
                    { path: 'summarizing', component: _resale_summarizing_summarizing_component__WEBPACK_IMPORTED_MODULE_5__["SummarizingComponent"], data: { breadcrumb: '销售汇总' } },
                    { path: 'transaction-detail', component: _resale_transaction_detail_transaction_detail_component__WEBPACK_IMPORTED_MODULE_6__["TransactionDetailComponent"], data: { breadcrumb: '交易明细' } }
                ]
            },
            {
                path: 'store', data: { breadcrumb: '门店' },
                children: [
                    { path: 'store-manage', component: _store_store_manage_store_manage_component__WEBPACK_IMPORTED_MODULE_7__["StoreManageComponent"], data: { breadcrumb: '门店管理' } },
                    { path: 'store-manage/edit-store', component: _store_edit_store_edit_store_component__WEBPACK_IMPORTED_MODULE_18__["EditStoreComponent"], data: { breadcrumb: '新增门店' } },
                    { path: 'staff-account', component: _store_staff_account_staff_account_component__WEBPACK_IMPORTED_MODULE_8__["StaffAccountComponent"], data: { breadcrumb: '员工账号' } },
                    { path: 'staff-account/edit-staff', component: _store_edit_staff_edit_staff_component__WEBPACK_IMPORTED_MODULE_19__["EditStaffComponent"], data: { breadcrumb: '新增员工' } },
                    { path: 'terminal-manage', component: _store_terminal_manage_terminal_manage_component__WEBPACK_IMPORTED_MODULE_9__["TerminalManageComponent"], data: { breadcrumb: '终端管理' } },
                    { path: 'terminal-manage/edit-terminal', component: _store_edit_terminal_edit_terminal_component__WEBPACK_IMPORTED_MODULE_20__["EditTerminalComponent"], data: { breadcrumb: '新增终端' } }
                ]
            },
            {
                path: 'member', data: { breadcrumb: '会员' },
                children: [
                    { path: 'member-type', component: _member_member_type_member_type_component__WEBPACK_IMPORTED_MODULE_10__["MemberTypeComponent"], data: { breadcrumb: '会员类别' } },
                    { path: 'member-list', component: _member_member_list_member_list_component__WEBPACK_IMPORTED_MODULE_11__["MemberListComponent"], data: { breadcrumb: '会员列表' } }
                ]
            },
            {
                path: 'operation', data: { breadcrumb: '营销' },
                children: [
                    { path: 'discount', component: _operation_discount_discount_component__WEBPACK_IMPORTED_MODULE_12__["DiscountComponent"], data: { breadcrumb: '优惠券' } },
                    { path: 'discount/edit-discount', component: _operation_edit_discount_edit_discount_component__WEBPACK_IMPORTED_MODULE_21__["EditDiscountComponent"], data: { breadcrumb: '新增优惠券' } },
                    { path: 'marketing-method', component: _operation_marketing_method_marketing_method_component__WEBPACK_IMPORTED_MODULE_13__["MarketingMethodComponent"], data: { breadcrumb: '线下活动' } },
                    { path: 'marketing-method/edit-marketing-method', component: _operation_edit_marketing_method_edit_marketing_method_component__WEBPACK_IMPORTED_MODULE_22__["EditMarketingMethodComponent"], data: { breadcrumb: '新增活动' } }
                ]
            },
            {
                path: 'system', data: { breadcrumb: '系统' },
                children: [
                    { path: 'department-manage', component: _system_department_manage_department_manage_component__WEBPACK_IMPORTED_MODULE_14__["DepartmentManageComponent"], data: { breadcrumb: '部门设置' } },
                    { path: 'role-manage', component: _system_role_manage_role_manage_component__WEBPACK_IMPORTED_MODULE_15__["RoleManageComponent"], data: { breadcrumb: '角色管理' } },
                    { path: 'role-accredit', component: _system_role_accredit_role_accredit_component__WEBPACK_IMPORTED_MODULE_16__["RoleAccreditComponent"], data: { breadcrumb: '角色授权' } },
                    { path: 'system-notice', component: _system_system_notice_system_notice_component__WEBPACK_IMPORTED_MODULE_17__["SystemNoticeComponent"], data: { breadcrumb: '升级公告' } },
                ]
            }
        ]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- NG-ZORRO -->\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = '门店系统';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _normal_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./normal/login/login.component */ "./src/app/normal/login/login.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/locales/zh */ "./node_modules/@angular/common/locales/zh.js");
/* harmony import */ var _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _statistics_data_view_data_view_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./statistics/data-view/data-view.component */ "./src/app/statistics/data-view/data-view.component.ts");
/* harmony import */ var _resale_summarizing_summarizing_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./resale/summarizing/summarizing.component */ "./src/app/resale/summarizing/summarizing.component.ts");
/* harmony import */ var _resale_transaction_detail_transaction_detail_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./resale/transaction-detail/transaction-detail.component */ "./src/app/resale/transaction-detail/transaction-detail.component.ts");
/* harmony import */ var _member_member_type_member_type_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./member/member-type/member-type.component */ "./src/app/member/member-type/member-type.component.ts");
/* harmony import */ var _member_member_list_member_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./member/member-list/member-list.component */ "./src/app/member/member-list/member-list.component.ts");
/* harmony import */ var _store_store_manage_store_manage_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./store/store-manage/store-manage.component */ "./src/app/store/store-manage/store-manage.component.ts");
/* harmony import */ var _store_staff_account_staff_account_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./store/staff-account/staff-account.component */ "./src/app/store/staff-account/staff-account.component.ts");
/* harmony import */ var _store_terminal_manage_terminal_manage_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./store/terminal-manage/terminal-manage.component */ "./src/app/store/terminal-manage/terminal-manage.component.ts");
/* harmony import */ var _system_department_manage_department_manage_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./system/department-manage/department-manage.component */ "./src/app/system/department-manage/department-manage.component.ts");
/* harmony import */ var _system_role_manage_role_manage_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./system/role-manage/role-manage.component */ "./src/app/system/role-manage/role-manage.component.ts");
/* harmony import */ var _system_role_accredit_role_accredit_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./system/role-accredit/role-accredit.component */ "./src/app/system/role-accredit/role-accredit.component.ts");
/* harmony import */ var _system_system_notice_system_notice_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./system/system-notice/system-notice.component */ "./src/app/system/system-notice/system-notice.component.ts");
/* harmony import */ var _operation_discount_discount_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./operation/discount/discount.component */ "./src/app/operation/discount/discount.component.ts");
/* harmony import */ var _operation_marketing_method_marketing_method_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./operation/marketing-method/marketing-method.component */ "./src/app/operation/marketing-method/marketing-method.component.ts");
/* harmony import */ var _normal_home_home_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./normal/home/home.component */ "./src/app/normal/home/home.component.ts");
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ngx-echarts */ "./node_modules/ngx-echarts/fesm5/ngx-echarts.js");
/* harmony import */ var _store_edit_store_edit_store_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./store/edit-store/edit-store.component */ "./src/app/store/edit-store/edit-store.component.ts");
/* harmony import */ var _store_edit_staff_edit_staff_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./store/edit-staff/edit-staff.component */ "./src/app/store/edit-staff/edit-staff.component.ts");
/* harmony import */ var _store_edit_terminal_edit_terminal_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./store/edit-terminal/edit-terminal.component */ "./src/app/store/edit-terminal/edit-terminal.component.ts");
/* harmony import */ var _member_edit_member_list_edit_member_list_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./member/edit-member-list/edit-member-list.component */ "./src/app/member/edit-member-list/edit-member-list.component.ts");
/* harmony import */ var _member_edit_member_type_edit_member_type_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./member/edit-member-type/edit-member-type.component */ "./src/app/member/edit-member-type/edit-member-type.component.ts");
/* harmony import */ var _operation_edit_discount_edit_discount_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./operation/edit-discount/edit-discount.component */ "./src/app/operation/edit-discount/edit-discount.component.ts");
/* harmony import */ var _operation_edit_marketing_method_edit_marketing_method_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./operation/edit-marketing-method/edit-marketing-method.component */ "./src/app/operation/edit-marketing-method/edit-marketing-method.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


































Object(_angular_common__WEBPACK_IMPORTED_MODULE_9__["registerLocaleData"])(_angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_10___default.a);
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _normal_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
                _statistics_data_view_data_view_component__WEBPACK_IMPORTED_MODULE_11__["DataViewComponent"],
                _resale_summarizing_summarizing_component__WEBPACK_IMPORTED_MODULE_12__["SummarizingComponent"],
                _resale_transaction_detail_transaction_detail_component__WEBPACK_IMPORTED_MODULE_13__["TransactionDetailComponent"],
                _member_member_type_member_type_component__WEBPACK_IMPORTED_MODULE_14__["MemberTypeComponent"],
                _member_member_list_member_list_component__WEBPACK_IMPORTED_MODULE_15__["MemberListComponent"],
                _store_store_manage_store_manage_component__WEBPACK_IMPORTED_MODULE_16__["StoreManageComponent"],
                _store_staff_account_staff_account_component__WEBPACK_IMPORTED_MODULE_17__["StaffAccountComponent"],
                _store_terminal_manage_terminal_manage_component__WEBPACK_IMPORTED_MODULE_18__["TerminalManageComponent"],
                _system_department_manage_department_manage_component__WEBPACK_IMPORTED_MODULE_19__["DepartmentManageComponent"],
                _system_role_manage_role_manage_component__WEBPACK_IMPORTED_MODULE_20__["RoleManageComponent"],
                _system_role_accredit_role_accredit_component__WEBPACK_IMPORTED_MODULE_21__["RoleAccreditComponent"],
                _system_system_notice_system_notice_component__WEBPACK_IMPORTED_MODULE_22__["SystemNoticeComponent"],
                _operation_discount_discount_component__WEBPACK_IMPORTED_MODULE_23__["DiscountComponent"],
                _operation_marketing_method_marketing_method_component__WEBPACK_IMPORTED_MODULE_24__["MarketingMethodComponent"],
                _normal_home_home_component__WEBPACK_IMPORTED_MODULE_25__["HomeComponent"],
                _store_edit_store_edit_store_component__WEBPACK_IMPORTED_MODULE_27__["EditStoreComponent"],
                _store_edit_staff_edit_staff_component__WEBPACK_IMPORTED_MODULE_28__["EditStaffComponent"],
                _store_edit_terminal_edit_terminal_component__WEBPACK_IMPORTED_MODULE_29__["EditTerminalComponent"],
                _member_edit_member_list_edit_member_list_component__WEBPACK_IMPORTED_MODULE_30__["EditMemberListComponent"],
                _member_edit_member_type_edit_member_type_component__WEBPACK_IMPORTED_MODULE_31__["EditMemberTypeComponent"],
                _operation_edit_discount_edit_discount_component__WEBPACK_IMPORTED_MODULE_32__["EditDiscountComponent"],
                _operation_edit_marketing_method_edit_marketing_method_component__WEBPACK_IMPORTED_MODULE_33__["EditMarketingMethodComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NgZorroAntdModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                ngx_echarts__WEBPACK_IMPORTED_MODULE_26__["NgxEchartsModule"]
            ],
            providers: [{ provide: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NZ_I18N"], useValue: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["zh_CN"] }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/member/edit-member-list/edit-member-list.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/member/edit-member-list/edit-member-list.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  edit-member-list works!\n</p>\n"

/***/ }),

/***/ "./src/app/member/edit-member-list/edit-member-list.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/member/edit-member-list/edit-member-list.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbWJlci9lZGl0LW1lbWJlci1saXN0L2VkaXQtbWVtYmVyLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/member/edit-member-list/edit-member-list.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/member/edit-member-list/edit-member-list.component.ts ***!
  \***********************************************************************/
/*! exports provided: EditMemberListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditMemberListComponent", function() { return EditMemberListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EditMemberListComponent = /** @class */ (function () {
    function EditMemberListComponent() {
    }
    EditMemberListComponent.prototype.ngOnInit = function () {
    };
    EditMemberListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-member-list',
            template: __webpack_require__(/*! ./edit-member-list.component.html */ "./src/app/member/edit-member-list/edit-member-list.component.html"),
            styles: [__webpack_require__(/*! ./edit-member-list.component.scss */ "./src/app/member/edit-member-list/edit-member-list.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EditMemberListComponent);
    return EditMemberListComponent;
}());



/***/ }),

/***/ "./src/app/member/edit-member-type/edit-member-type.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/member/edit-member-type/edit-member-type.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  edit-member-type works!\n</p>\n"

/***/ }),

/***/ "./src/app/member/edit-member-type/edit-member-type.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/member/edit-member-type/edit-member-type.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbWJlci9lZGl0LW1lbWJlci10eXBlL2VkaXQtbWVtYmVyLXR5cGUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/member/edit-member-type/edit-member-type.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/member/edit-member-type/edit-member-type.component.ts ***!
  \***********************************************************************/
/*! exports provided: EditMemberTypeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditMemberTypeComponent", function() { return EditMemberTypeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EditMemberTypeComponent = /** @class */ (function () {
    function EditMemberTypeComponent() {
    }
    EditMemberTypeComponent.prototype.ngOnInit = function () {
    };
    EditMemberTypeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-member-type',
            template: __webpack_require__(/*! ./edit-member-type.component.html */ "./src/app/member/edit-member-type/edit-member-type.component.html"),
            styles: [__webpack_require__(/*! ./edit-member-type.component.scss */ "./src/app/member/edit-member-type/edit-member-type.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EditMemberTypeComponent);
    return EditMemberTypeComponent;
}());



/***/ }),

/***/ "./src/app/member/member-list/member-list.component.html":
/*!***************************************************************!*\
  !*** ./src/app/member/member-list/member-list.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"display: flex;justify-content: space-between;margin-bottom: 1rem\">\n  <div>\n    <input style=\"display: inline-block;width: 15rem\" nz-input placeholder=\"请输入订单号\" [(ngModel)]=\"searchCondition\">\n    <span style=\"margin-left: 1rem;display: inline-block;\">高级搜索</span>\n  </div>\n  <div>\n    <button style=\"width: 4rem;height: 2rem;\" nz-button nzType=\"primary\">新增</button>\n  </div>\n</div>\n<div style=\"margin-top: 0.5rem\">\n  <nz-table #borderedTable nzBordered [nzData]=\"tmpData\" [nzPageSize]=\"10\">\n    <thead>\n      <tr>\n        <th>会员卡号</th>\n        <th>发卡门店</th>\n        <th>发卡人员</th>\n        <th>手机号码</th>\n        <th>可用积分</th>\n        <th>储值账户余额</th>\n        <th>累计消费金额</th>\n        <th>累计消费次数</th>\n        <th>最后消费时间</th>\n        <th>操作</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let data of borderedTable.data\">\n        <td>{{data.memberCardNumber}}</td>\n        <td>{{data.store}}</td>\n        <td>{{data.marketingPersonnel}}</td>\n        <td>{{data.memberTel}}</td>\n        <td>{{data.usableScore}}</td>\n        <td>{{data.balance}}</td>\n        <td>{{data.expense}}</td>\n        <td>{{data.expenseTimes}}</td>\n        <td>{{data.lastExpenseTime}}</td>\n        <td>\n          <nz-dropdown [nzPlacement]=\"'bottomLeft'\">\n            <a nz-dropdown>\n              ...\n            </a>\n            <ul nz-menu nzSelectable>\n              <li nz-menu-item>\n                <a>详情</a>\n              </li>\n              <li nz-menu-item>\n                <a>启用/禁用</a>\n              </li>\n              <li nz-menu-item>\n                <a>交易明细</a>\n              </li>\n            </ul>\n          </nz-dropdown>\n        </td>\n      </tr>\n    </tbody>\n  </nz-table>\n</div>"

/***/ }),

/***/ "./src/app/member/member-list/member-list.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/member/member-list/member-list.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbWJlci9tZW1iZXItbGlzdC9tZW1iZXItbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/member/member-list/member-list.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/member/member-list/member-list.component.ts ***!
  \*************************************************************/
/*! exports provided: MemberListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberListComponent", function() { return MemberListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MemberListComponent = /** @class */ (function () {
    function MemberListComponent() {
        this.tmpData = [
            {
                memberCardNumber: '12345678',
                store: '麦麦（幸福店）',
                marketingPersonnel: '麦麦',
                memberTel: '18888888888',
                usableScore: '1000',
                balance: '¥1000.00',
                expense: '¥18.00',
                expenseTimes: '6',
                lastExpenseTime: '2018-12-25 10:00',
                what: '...'
            },
            {
                memberCardNumber: '12345678',
                store: '麦麦（幸福店）',
                marketingPersonnel: '麦麦',
                memberTel: '18888888888',
                usableScore: '1000',
                balance: '¥1000.00',
                expense: '¥18.00',
                expenseTimes: '6',
                lastExpenseTime: '2018-12-25 10:00',
                what: '...'
            },
            {
                memberCardNumber: '12345678',
                store: '麦麦（幸福店）',
                marketingPersonnel: '麦麦',
                memberTel: '18888888888',
                usableScore: '1000',
                balance: '¥1000.00',
                expense: '¥18.00',
                expenseTimes: '6',
                lastExpenseTime: '2018-12-25 10:00',
                what: '...'
            },
            {
                memberCardNumber: '12345678',
                store: '麦麦（幸福店）',
                marketingPersonnel: '麦麦',
                memberTel: '18888888888',
                usableScore: '1000',
                balance: '¥1000.00',
                expense: '¥18.00',
                expenseTimes: '6',
                lastExpenseTime: '2018-12-25 10:00',
                what: '...'
            },
            {
                memberCardNumber: '12345678',
                store: '麦麦（幸福店）',
                marketingPersonnel: '麦麦',
                memberTel: '18888888888',
                usableScore: '1000',
                balance: '¥1000.00',
                expense: '¥18.00',
                expenseTimes: '6',
                lastExpenseTime: '2018-12-25 10:00',
                what: '...'
            },
            {
                memberCardNumber: '12345678',
                store: '麦麦（幸福店）',
                marketingPersonnel: '麦麦',
                memberTel: '18888888888',
                usableScore: '1000',
                balance: '¥1000.00',
                expense: '¥18.00',
                expenseTimes: '6',
                lastExpenseTime: '2018-12-25 10:00',
                what: '...'
            },
            {
                memberCardNumber: '12345678',
                store: '麦麦（幸福店）',
                marketingPersonnel: '麦麦',
                memberTel: '18888888888',
                usableScore: '1000',
                balance: '¥1000.00',
                expense: '¥18.00',
                expenseTimes: '6',
                lastExpenseTime: '2018-12-25 10:00',
                what: '...'
            }
        ];
    }
    MemberListComponent.prototype.ngOnInit = function () {
    };
    MemberListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-member-list',
            template: __webpack_require__(/*! ./member-list.component.html */ "./src/app/member/member-list/member-list.component.html"),
            styles: [__webpack_require__(/*! ./member-list.component.scss */ "./src/app/member/member-list/member-list.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MemberListComponent);
    return MemberListComponent;
}());



/***/ }),

/***/ "./src/app/member/member-type/member-type.component.html":
/*!***************************************************************!*\
  !*** ./src/app/member/member-type/member-type.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"display: flex;justify-content: space-between;margin-bottom: 1rem\">\n  <div>\n    <input style=\"display: inline-block;width: 15rem\" nz-input placeholder=\"请输入订单号\" [(ngModel)]=\"searchCondition\">\n    <span style=\"margin-left: 1rem;display: inline-block;\">高级搜索</span>\n  </div>\n  <div>\n    <button style=\"width: 4rem;height: 2rem;\" nz-button nzType=\"primary\">新增</button>\n  </div>\n</div>\n<div style=\"margin-top: 0.5rem\">\n  <nz-table #borderedTable nzBordered [nzData]=\"tmpData\" [nzPageSize]=\"10\">\n    <thead>\n      <tr>\n        <th>编码</th>\n        <th>等级名称</th>\n        <th>所需经验值</th>\n        <th>会员特价</th>\n        <th>积分倍数</th>\n        <th>操作</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let data of borderedTable.data\">\n        <td>{{data.memberTypeNumber}}</td>\n        <td>{{data.memberLevel}}</td>\n        <td>{{data.needsScore}}</td>\n        <td>{{data.memberPrice}}</td>\n        <td>{{data.multipleScore}}</td>\n        <td>{{data.operation}}</td>\n      </tr>\n    </tbody>\n  </nz-table>\n</div>"

/***/ }),

/***/ "./src/app/member/member-type/member-type.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/member/member-type/member-type.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbWJlci9tZW1iZXItdHlwZS9tZW1iZXItdHlwZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/member/member-type/member-type.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/member/member-type/member-type.component.ts ***!
  \*************************************************************/
/*! exports provided: MemberTypeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberTypeComponent", function() { return MemberTypeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MemberTypeComponent = /** @class */ (function () {
    function MemberTypeComponent() {
        this.tmpData = [
            {
                memberTypeNumber: '1',
                memberLevel: '注册会员',
                needsScore: '0',
                memberPrice: '支持',
                multipleScore: '1.0',
                operation: '修改 删除'
            },
            {
                memberTypeNumber: '2',
                memberLevel: '白银会员',
                needsScore: '500',
                memberPrice: '支持',
                multipleScore: '1.2',
                operation: '修改 删除'
            },
            {
                memberTypeNumber: '3',
                memberLevel: '黄金会员',
                needsScore: '2000',
                memberPrice: '支持',
                multipleScore: '1.5',
                operation: '修改 删除'
            },
            {
                memberTypeNumber: '4',
                memberLevel: '钻石会员',
                needsScore: '10000',
                memberPrice: '支持',
                multipleScore: '2.0',
                operation: '修改 删除'
            }
        ];
    }
    MemberTypeComponent.prototype.ngOnInit = function () {
    };
    MemberTypeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-member-type',
            template: __webpack_require__(/*! ./member-type.component.html */ "./src/app/member/member-type/member-type.component.html"),
            styles: [__webpack_require__(/*! ./member-type.component.scss */ "./src/app/member/member-type/member-type.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MemberTypeComponent);
    return MemberTypeComponent;
}());



/***/ }),

/***/ "./src/app/normal/home/home.component.html":
/*!*************************************************!*\
  !*** ./src/app/normal/home/home.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nz-layout class=\"layout\">\n  <nz-header>\n    <div class=\"logo\"></div>\n    <ul nz-menu [nzTheme]=\"'dark'\" [nzMode]=\"'horizontal'\" style=\"line-height: 64px;\">\n      <li nz-menu-item>集团</li>\n      <li nz-menu-item>门店</li>\n      <li nz-menu-item>一级导航</li>\n      <li nz-menu-item>二级导航</li>\n    </ul>\n  </nz-header>\n  <nz-layout>\n    <nz-sider [nzCollapsed]=\"false\" [nzWidth]=\"200\" style=\"background:#fff\">\n      <ul nz-menu [nzMode]=\"'inline'\" style=\"height:100%\">\n        <li nz-submenu>\n          <span title>\n            <i nz-icon type=\"line-chart\" theme=\"outline\"></i>统计</span>\n          <ul>\n            <li nz-menu-item routerLink=\"./statistics/data-view\">数据概览</li>\n          </ul>\n        </li>\n        <li nz-submenu>\n          <span title>\n            <i nz-icon type=\"credit-card\" theme=\"outline\"></i>零售</span>\n          <ul>\n            <li nz-menu-item routerLink=\"/home/resale/summarizing\">销售汇总</li>\n            <li nz-menu-item routerLink=\"/home/resale/transaction-detail\">交易明细</li>\n          </ul>\n        </li>\n        <li nz-submenu>\n          <span title>\n            <i nz-icon type=\"home\" theme=\"outline\"></i>门店</span>\n          <ul>\n            <li nz-menu-item routerLink=\"/home/store/store-manage\">门店管理</li>\n            <li nz-menu-item routerLink=\"/home/store/staff-account\">员工账号</li>\n            <li nz-menu-item routerLink=\"/home/store/terminal-manage\">终端管理</li>\n          </ul>\n        </li>\n        <li nz-submenu>\n          <span title>\n            <i nz-icon type=\"team\" theme=\"outline\"></i>会员</span>\n          <ul>\n            <li nz-menu-item routerLink=\"/home/member/member-type\">会员类别</li>\n            <li nz-menu-item routerLink=\"/home/member/member-list\">会员列表</li>\n          </ul>\n        </li>\n        <li nz-submenu>\n          <span title>\n            <i nz-icon type=\"appstore\" theme=\"outline\"></i>营销</span>\n          <ul>\n            <li nz-menu-item routerLink=\"/home/operation/discount\">优惠券</li>\n            <li nz-menu-item routerLink=\"/home/operation/marketing-method\">线下活动</li>\n          </ul>\n        </li>\n        <li nz-submenu>\n          <span title>\n            <i nz-icon type=\"setting\" theme=\"outline\"></i>系统</span>\n          <ul>\n            <li nz-menu-item routerLink=\"/home/system/department-manage\">部门设置</li>\n            <li nz-menu-item routerLink=\"/home/system/role-manage\">角色管理</li>\n            <li nz-menu-item routerLink=\"/home/system/role-accredit\">角色授权</li>\n            <li nz-menu-item routerLink=\"/home/system/system-notice\">升级公告</li>\n          </ul>\n        </li>\n      </ul>\n    </nz-sider>\n    <nz-layout style=\"padding:0 24px 24px\">\n      <nz-breadcrumb [nzAutoGenerate]=\"true\" style=\"margin:16px 0;\">\n      </nz-breadcrumb>\n      <nz-content style=\"background:#fff; padding: 24px; height: 20rem; min-width: 60rem;min-height: 45rem\">\n        <router-outlet></router-outlet>\n      </nz-content>\n    </nz-layout>\n  </nz-layout>\n</nz-layout>"

/***/ }),

/***/ "./src/app/normal/home/home.component.scss":
/*!*************************************************!*\
  !*** ./src/app/normal/home/home.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "li {\n  outline: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nbS9EZXNrdG9wL1Jlc2FsZVBsYXRmb3JtL3NyYy9hcHAvbm9ybWFsL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQWEsRUFDaEIiLCJmaWxlIjoic3JjL2FwcC9ub3JtYWwvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibGkge1xuICAgIG91dGxpbmU6IG5vbmU7XG59Il19 */"

/***/ }),

/***/ "./src/app/normal/home/home.component.ts":
/*!***********************************************!*\
  !*** ./src/app/normal/home/home.component.ts ***!
  \***********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(router) {
        this.router = router;
        this.content = 'data-view';
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.itemClick = function (content) {
        console.log(content);
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/normal/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/normal/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/normal/login/login.component.html":
/*!***************************************************!*\
  !*** ./src/app/normal/login/login.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"height: 40rem;display: flex;justify-content: center;align-items: center\">\n  <nz-card style=\"width:300px;\">\n    <div style=\"text-align: center\">\n      <p>零售通商家后台系统</p>\n    </div>\n    <div class=\"div_space\">\n      <input nz-input type=\"text\" placeholder=\"请输入用户名\" [(ngModel)]=\"account\">\n    </div>\n    <div class=\"div_space\">\n      <input nz-input type=\"password\" placeholder=\"请输入密码\" [(ngModel)]=\"password\">\n    </div>\n    <div class=\"div_space\" style=\"display: flex;align-items: center;justify-content: space-between\">\n      <input style=\"width: 160px;\" nz-input type=\"text\" placeholder=\"请输入验证码\" [(ngModel)]=\"verification\">\n      <canvas id=\"canvas\" width=\"80\" height=\"32\" style=\"background-color: lightgray\" (click)=\"refresh()\"></canvas>\n    </div>\n\n    <div style=\"text-align: center\">\n      <button style=\"width: 8rem\" nz-button nzType=\"primary\" (click)=\"loginClick()\">登 录</button>\n    </div>\n\n  </nz-card>\n\n</div>"

/***/ }),

/***/ "./src/app/normal/login/login.component.scss":
/*!***************************************************!*\
  !*** ./src/app/normal/login/login.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".div_space {\n  margin-top: 1rem;\n  margin-bottom: 1rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nbS9EZXNrdG9wL1Jlc2FsZVBsYXRmb3JtL3NyYy9hcHAvbm9ybWFsL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQWdCO0VBQ2hCLG9CQUFtQixFQUN0QiIsImZpbGUiOiJzcmMvYXBwL25vcm1hbC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaXZfc3BhY2V7XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/normal/login/login.component.ts":
/*!*************************************************!*\
  !*** ./src/app/normal/login/login.component.ts ***!
  \*************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = /** @class */ (function () {
    function LoginComponent(router) {
        this.router = router;
    }
    LoginComponent.prototype.ngAfterViewInit = function () {
        this.drawPic();
    };
    LoginComponent.prototype.ngOnInit = function () {
        // this.drawPic();
        var canvas = document.getElementById('canvas');
        console.log(canvas);
    };
    LoginComponent.prototype.randomNum = function (min, max) {
        return (parseInt(Math.random() * (max - min) + min, 10));
    };
    LoginComponent.prototype.randomColor = function (min, max) {
        var r = this.randomNum(min, max);
        var g = this.randomNum(min, max);
        var b = this.randomNum(min, max);
        return 'rgb(' + r + ',' + g + ',' + b + ')';
    };
    LoginComponent.prototype.loginClick = function () {
        console.log('login');
        this.router.navigate(['/home/statistics/data-view']);
    };
    LoginComponent.prototype.refresh = function () {
        this.drawPic();
    };
    LoginComponent.prototype.drawPic = function () {
        var canvas = document.getElementById('canvas');
        var width = canvas.width;
        var height = canvas.height;
        var ctx = canvas.getContext('2d');
        ctx.textBaseline = 'bottom';
        console.log(width + ' ' + height);
        // 背景颜色
        ctx.fillStyle = this.randomColor(180, 240);
        ctx.fillRect(0, 0, width, height);
        // 文字
        var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        this.verification = '';
        for (var i = 0; i < 4; i++) {
            var text = str[this.randomNum(0, str.length)];
            this.verification += text;
            ctx.fillStyle = this.randomColor(40, 180);
            ctx.font = this.randomNum(15, 40) + 'px SimHei';
            var x = 15 + i * 15;
            var y = this.randomNum(25, 45);
            var deg = this.randomNum(-25, 25);
            // 修改坐标原点和旋转角度
            ctx.translate(x, y);
            ctx.rotate(deg * Math.PI / 180);
            ctx.fillText(text, 0, 0);
            // 恢复坐标原点和旋转角度
            ctx.rotate(-deg * Math.PI / 180);
            ctx.translate(-x, -y);
        }
        // 干扰线
        for (var i = 0; i < 4; i++) {
            ctx.strokeStyle = this.randomColor(40, 180);
            ctx.beginPath();
            ctx.moveTo(this.randomNum(0, width), this.randomNum(0, height));
            ctx.lineTo(this.randomNum(0, width), this.randomNum(0, height));
            ctx.stroke();
        }
        // 干扰点
        for (var i = 0; i < 50; i++) {
            ctx.fillStyle = this.randomColor(0, 255);
            ctx.beginPath();
            ctx.arc(this.randomNum(0, width), this.randomNum(0, height), 1, 0, 2 * Math.PI);
            ctx.fill();
        }
        // console.log('验证码：' + this.verificationCode);
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/normal/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/normal/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/operation/discount/discount.component.html":
/*!************************************************************!*\
  !*** ./src/app/operation/discount/discount.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"display: flex;justify-content: space-between;margin-bottom: 1rem\">\n  <div>\n    <input style=\"display: inline-block;width: 15rem\" nz-input placeholder=\"请输入订单号\" [(ngModel)]=\"searchCondition\">\n    <span style=\"margin-left: 1rem;display: inline-block;\">高级搜索</span>\n  </div>\n  <div>\n    <button style=\"width: 7rem;height: 2rem;\" nz-button nzType=\"primary\" (click)=\"editDiscount('new')\">新增优惠券</button>\n  </div>\n</div>\n<div style=\"margin-top: 0.5rem\">\n  <nz-table #borderedTable nzBordered [nzData]=\"tmpData\" [nzPageSize]=\"10\">\n    <thead>\n      <tr>\n        <th>编号</th>\n        <th>优惠券名称</th>\n        <th>券总数</th>\n        <th>已领取量</th>\n        <th>使用期限</th>\n        <th>面值</th>\n        <th>使用范围</th>\n        <th>类型</th>\n        <th>状态</th>\n        <th>操作</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let data of borderedTable.data\">\n        <td>{{data.discountNumber}}</td>\n        <td>{{data.discountName}}</td>\n        <td>{{data.discountAmount}}</td>\n        <td>{{data.usedDiscountAmount}}</td>\n        <td>{{data.discountIndate}}</td>\n        <td>{{data.discountCut}}</td>\n        <td>{{data.usableRange}}</td>\n        <td>{{data.discountType}}</td>\n        <td>{{data.discountStatus}}</td>\n        <td>\n          <nz-dropdown [nzPlacement]=\"'bottomLeft'\">\n            <a nz-dropdown>\n              ...\n            </a>\n            <ul nz-menu nzSelectable>\n              <li nz-menu-item>\n                <a>编辑</a>\n              </li>\n              <li nz-menu-item>\n                <a>删除</a>\n              </li>\n              <li nz-menu-item>\n                <a>启用/禁用</a>\n              </li>\n            </ul>\n          </nz-dropdown>\n        </td>\n      </tr>\n    </tbody>\n  </nz-table>\n</div>"

/***/ }),

/***/ "./src/app/operation/discount/discount.component.scss":
/*!************************************************************!*\
  !*** ./src/app/operation/discount/discount.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wZXJhdGlvbi9kaXNjb3VudC9kaXNjb3VudC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/operation/discount/discount.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/operation/discount/discount.component.ts ***!
  \**********************************************************/
/*! exports provided: DiscountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscountComponent", function() { return DiscountComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DiscountComponent = /** @class */ (function () {
    function DiscountComponent(router) {
        this.router = router;
        this.tmpData = [
            {
                discountNumber: '0001',
                discountName: '麦麦（幸福店）',
                discountAmount: 100,
                usedDiscountAmount: 6,
                discountIndate: '2018-01-01至2018-01-03',
                discountCut: '¥5.00',
                usableRange: '线下',
                discountType: '电子券',
                discountStatus: '启用',
                what: '...'
            },
            {
                discountNumber: '0002',
                discountName: '麦麦（幸福店）',
                discountAmount: 100,
                usedDiscountAmount: 6,
                discountIndate: '2018-01-01至2018-01-03',
                discountCut: '¥5.00',
                usableRange: '线下',
                discountType: '电子券',
                discountStatus: '启用',
                what: '...'
            },
            {
                discountNumber: '0003',
                discountName: '麦麦（幸福店）',
                discountAmount: 100,
                usedDiscountAmount: 6,
                discountIndate: '2018-01-01至2018-01-03',
                discountCut: '¥5.00',
                usableRange: '线下',
                discountType: '电子券',
                discountStatus: '禁用',
                what: '...'
            },
            {
                discountNumber: '0004',
                discountName: '麦麦（幸福店）',
                discountAmount: 100,
                usedDiscountAmount: 6,
                discountIndate: '2018-01-01至2018-01-03',
                discountCut: '¥5.00',
                usableRange: '线下',
                discountType: '电子券',
                discountStatus: '启用',
                what: '...'
            }
        ];
    }
    DiscountComponent.prototype.ngOnInit = function () {
    };
    DiscountComponent.prototype.editDiscount = function (type) {
        this.router.navigate(['/home/operation/discount/edit-discount']);
    };
    DiscountComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-discount',
            template: __webpack_require__(/*! ./discount.component.html */ "./src/app/operation/discount/discount.component.html"),
            styles: [__webpack_require__(/*! ./discount.component.scss */ "./src/app/operation/discount/discount.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], DiscountComponent);
    return DiscountComponent;
}());



/***/ }),

/***/ "./src/app/operation/edit-discount/edit-discount.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/operation/edit-discount/edit-discount.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  edit-discount works!\n</p>\n"

/***/ }),

/***/ "./src/app/operation/edit-discount/edit-discount.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/operation/edit-discount/edit-discount.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wZXJhdGlvbi9lZGl0LWRpc2NvdW50L2VkaXQtZGlzY291bnQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/operation/edit-discount/edit-discount.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/operation/edit-discount/edit-discount.component.ts ***!
  \********************************************************************/
/*! exports provided: EditDiscountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditDiscountComponent", function() { return EditDiscountComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EditDiscountComponent = /** @class */ (function () {
    function EditDiscountComponent() {
    }
    EditDiscountComponent.prototype.ngOnInit = function () {
    };
    EditDiscountComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-discount',
            template: __webpack_require__(/*! ./edit-discount.component.html */ "./src/app/operation/edit-discount/edit-discount.component.html"),
            styles: [__webpack_require__(/*! ./edit-discount.component.scss */ "./src/app/operation/edit-discount/edit-discount.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EditDiscountComponent);
    return EditDiscountComponent;
}());



/***/ }),

/***/ "./src/app/operation/edit-marketing-method/edit-marketing-method.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/operation/edit-marketing-method/edit-marketing-method.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  edit-marketing-method works!\n</p>\n"

/***/ }),

/***/ "./src/app/operation/edit-marketing-method/edit-marketing-method.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/operation/edit-marketing-method/edit-marketing-method.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wZXJhdGlvbi9lZGl0LW1hcmtldGluZy1tZXRob2QvZWRpdC1tYXJrZXRpbmctbWV0aG9kLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/operation/edit-marketing-method/edit-marketing-method.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/operation/edit-marketing-method/edit-marketing-method.component.ts ***!
  \************************************************************************************/
/*! exports provided: EditMarketingMethodComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditMarketingMethodComponent", function() { return EditMarketingMethodComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EditMarketingMethodComponent = /** @class */ (function () {
    function EditMarketingMethodComponent() {
    }
    EditMarketingMethodComponent.prototype.ngOnInit = function () {
    };
    EditMarketingMethodComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-marketing-method',
            template: __webpack_require__(/*! ./edit-marketing-method.component.html */ "./src/app/operation/edit-marketing-method/edit-marketing-method.component.html"),
            styles: [__webpack_require__(/*! ./edit-marketing-method.component.scss */ "./src/app/operation/edit-marketing-method/edit-marketing-method.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EditMarketingMethodComponent);
    return EditMarketingMethodComponent;
}());



/***/ }),

/***/ "./src/app/operation/marketing-method/marketing-method.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/operation/marketing-method/marketing-method.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"display: flex;justify-content: space-between;margin-bottom: 1rem\">\n  <div>\n    <input style=\"display: inline-block;width: 15rem\" nz-input placeholder=\"请输入订单号\" [(ngModel)]=\"searchCondition\">\n    <span style=\"margin-left: 1rem;display: inline-block;\">高级搜索</span>\n  </div>\n  <div>\n    <button style=\"width: 7rem;height: 2rem;\" nz-button nzType=\"primary\" (click)=\"editMarketingMethod('new')\">新增活动</button>\n  </div>\n</div>\n<div style=\"margin-top: 0.5rem\">\n  <nz-table #borderedTable nzBordered [nzData]=\"tmpData\" [nzPageSize]=\"10\">\n    <thead>\n      <tr>\n        <th>编号</th>\n        <th>详情</th>\n        <th>活动时间</th>\n        <th>操作</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let data of borderedTable.data\">\n        <td>{{data.activityNumber}}</td>\n        <td>{{data.activityDetail}}</td>\n        <td>{{data.activityTime}}</td>\n        <td>{{data.activityOperation}}</td>\n      </tr>\n    </tbody>\n  </nz-table>\n</div>"

/***/ }),

/***/ "./src/app/operation/marketing-method/marketing-method.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/operation/marketing-method/marketing-method.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wZXJhdGlvbi9tYXJrZXRpbmctbWV0aG9kL21hcmtldGluZy1tZXRob2QuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/operation/marketing-method/marketing-method.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/operation/marketing-method/marketing-method.component.ts ***!
  \**************************************************************************/
/*! exports provided: MarketingMethodComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketingMethodComponent", function() { return MarketingMethodComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MarketingMethodComponent = /** @class */ (function () {
    function MarketingMethodComponent(router) {
        this.router = router;
        this.tmpData = [
            {
                activityNumber: '0001',
                activityDetail: '麦麦（幸福店）',
                activityTime: 100,
                activityOperation: '编辑 删除 下架'
            },
            {
                activityNumber: '0002',
                activityDetail: '麦麦（幸福店）',
                activityTime: 100,
                usedDiscountAmount: 6,
                activityOperation: '编辑 删除 下架'
            },
            {
                activityNumber: '0003',
                activityDetail: '麦麦（幸福店）',
                activityTime: 100,
                usedDiscountAmount: 6,
                activityOperation: '编辑 删除 下架'
            },
            {
                activityNumber: '0004',
                activityDetail: '麦麦（幸福店）',
                activityTime: 100,
                usedDiscountAmount: 6,
                activityOperation: '编辑 删除 下架'
            }
        ];
    }
    MarketingMethodComponent.prototype.ngOnInit = function () {
    };
    MarketingMethodComponent.prototype.editMarketingMethod = function (type) {
        this.router.navigate(['/home/operation/marketing-method/edit-marketing-method']);
    };
    MarketingMethodComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-marketing-method',
            template: __webpack_require__(/*! ./marketing-method.component.html */ "./src/app/operation/marketing-method/marketing-method.component.html"),
            styles: [__webpack_require__(/*! ./marketing-method.component.scss */ "./src/app/operation/marketing-method/marketing-method.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], MarketingMethodComponent);
    return MarketingMethodComponent;
}());



/***/ }),

/***/ "./src/app/resale/summarizing/summarizing.component.html":
/*!***************************************************************!*\
  !*** ./src/app/resale/summarizing/summarizing.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"display: flex;justify-content: space-between;margin-bottom: 1rem\">\n  <div>\n    <input style=\"display: inline-block;width: 15rem\" nz-input placeholder=\"请输入订单号\" [(ngModel)]=\"searchCondition\">\n    <span style=\"margin-left: 1rem;display: inline-block;\">高级搜索</span>\n  </div>\n  <div>\n    <button style=\"width: 4rem;height: 2rem;\" nz-button nzType=\"primary\">导出</button>\n  </div>\n</div>\n<div>共有\n  <span class=\"color-red\">188</span>笔销售单，销售额总计\n  <span class=\"color-red\">¥100,000</span>\n</div>\n<div style=\"margin-top: 0.5rem\">\n  <nz-table #borderedTable nzBordered [nzData]=\"tmpData\" [nzPageSize]=\"10\">\n    <thead>\n      <tr>\n        <th>销售单号</th>\n        <th>销售时间</th>\n        <th>会员手机</th>\n        <th>销售金额</th>\n        <th>门店名称</th>\n        <th>商品数量</th>\n        <th>收银人员</th>\n        <th>状态</th>\n        <th>操作</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let data of borderedTable.data\">\n        <td>{{data.saleOrder}}</td>\n        <td>{{data.saleTime}}</td>\n        <td>{{data.memberTel}}</td>\n        <td>{{data.saleAmount}}</td>\n        <td>{{data.storeName}}</td>\n        <td>{{data.goodsQuentity}}</td>\n        <td>{{data.cashier}}</td>\n        <td>{{data.orderStatus}}</td>\n        <td>{{data.operation}}</td>\n      </tr>\n    </tbody>\n  </nz-table>\n</div>"

/***/ }),

/***/ "./src/app/resale/summarizing/summarizing.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/resale/summarizing/summarizing.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc2FsZS9zdW1tYXJpemluZy9zdW1tYXJpemluZy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/resale/summarizing/summarizing.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/resale/summarizing/summarizing.component.ts ***!
  \*************************************************************/
/*! exports provided: SummarizingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummarizingComponent", function() { return SummarizingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SummarizingComponent = /** @class */ (function () {
    function SummarizingComponent() {
        this.tmpData = [
            {
                saleOrder: 'ZDXS2018042810233',
                saleTime: '2018-12-28 10:00',
                memberTel: 18888888888,
                saleAmount: '880.00',
                storeName: '麦麦（幸福店）',
                goodsQuentity: '商品数量',
                cashier: '麦麦',
                orderStatus: '销售',
                operation: '详情'
            },
            {
                saleOrder: 'ZDXS2018042810240',
                saleTime: '2018-12-28 10:00',
                memberTel: 18888888888,
                saleAmount: '880.00',
                storeName: '麦麦（幸福店）',
                goodsQuentity: '商品数量',
                cashier: '麦麦',
                orderStatus: '销售',
                operation: '详情'
            },
            {
                saleOrder: 'ZDXS2018042810241',
                saleTime: '2018-12-28 10:00',
                memberTel: 18888888888,
                saleAmount: '880.00',
                storeName: '麦麦（幸福店）',
                goodsQuentity: '商品数量',
                cashier: '麦麦',
                orderStatus: '退款',
                operation: '详情'
            },
            {
                saleOrder: 'ZDXS2018042810245',
                saleTime: '2018-12-28 10:00',
                memberTel: 18888888888,
                saleAmount: '880.00',
                storeName: '麦麦（幸福店）',
                goodsQuentity: '商品数量',
                cashier: '麦麦',
                orderStatus: '销售',
                operation: '详情'
            },
        ];
    }
    SummarizingComponent.prototype.ngOnInit = function () {
    };
    SummarizingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-summarizing',
            template: __webpack_require__(/*! ./summarizing.component.html */ "./src/app/resale/summarizing/summarizing.component.html"),
            styles: [__webpack_require__(/*! ./summarizing.component.scss */ "./src/app/resale/summarizing/summarizing.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SummarizingComponent);
    return SummarizingComponent;
}());



/***/ }),

/***/ "./src/app/resale/transaction-detail/transaction-detail.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/resale/transaction-detail/transaction-detail.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"display: flex;justify-content: space-between;margin-bottom: 1rem\">\n  <div>\n    <input style=\"display: inline-block;width: 15rem\" nz-input placeholder=\"请输入订单号\" [(ngModel)]=\"searchCondition\">\n    <span style=\"margin-left: 1rem;display: inline-block;\">高级搜索</span>\n  </div>\n  <div>\n    <button style=\"width: 4rem;height: 2rem;\" nz-button nzType=\"primary\">导出</button>\n  </div>\n</div>\n<div style=\"margin-top: 0.5rem\">\n  <nz-table #borderedTable nzBordered [nzData]=\"tmpData\" [nzPageSize]=\"10\">\n    <thead>\n      <tr>\n        <th>商品名称</th>\n        <th>商品编号</th>\n        <th>销售方式</th>\n        <th>数量</th>\n        <th>常规销售价</th>\n        <th>用户购买价</th>\n        <th>交易状态</th>\n        <th>销售门店</th>\n        <th>收银人员</th>\n        <th>销售时间</th>\n        <th>操作</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let data of borderedTable.data\">\n        <td>{{data.goodsName}}</td>\n        <td>{{data.goodsNumber}}</td>\n        <td>{{data.saleType}}</td>\n        <td>{{data.goodsQuentity}}</td>\n        <td>{{data.normalPrice}}</td>\n        <td>{{data.realPrice}}</td>\n        <td>{{data.saleStatus}}</td>\n        <td>{{data.store}}</td>\n        <td>{{data.cashier}}</td>\n        <td>{{data.saleTime}}</td>\n        <td>{{data.what}}</td>\n      </tr>\n    </tbody>\n  </nz-table>\n</div>"

/***/ }),

/***/ "./src/app/resale/transaction-detail/transaction-detail.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/resale/transaction-detail/transaction-detail.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc2FsZS90cmFuc2FjdGlvbi1kZXRhaWwvdHJhbnNhY3Rpb24tZGV0YWlsLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/resale/transaction-detail/transaction-detail.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/resale/transaction-detail/transaction-detail.component.ts ***!
  \***************************************************************************/
/*! exports provided: TransactionDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionDetailComponent", function() { return TransactionDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TransactionDetailComponent = /** @class */ (function () {
    function TransactionDetailComponent() {
        this.tmpData = [
            {
                goodsName: '商品名称',
                goodsNumber: 'ZDXS2018042801',
                saleType: '销售方式',
                goodsQuentity: '6',
                normalPrice: '¥20.00',
                realPrice: '¥20.00',
                saleStatus: '销售',
                store: '麦麦（幸福店）',
                cashier: '麦麦',
                saleTime: '2018-12-25 10:00',
                what: '---'
            },
            {
                goodsName: '商品名称',
                goodsNumber: 'ZDXS2018042801',
                saleType: '销售方式',
                goodsQuentity: '6',
                normalPrice: '¥20.00',
                realPrice: '¥20.00',
                saleStatus: '销售',
                store: '麦麦（幸福店）',
                cashier: '麦麦',
                saleTime: '2018-12-25 10:00',
                what: '---'
            },
            {
                goodsName: '商品名称',
                goodsNumber: 'ZDXS2018042801',
                saleType: '销售方式',
                goodsQuentity: '6',
                normalPrice: '¥20.00',
                realPrice: '¥20.00',
                saleStatus: '销售',
                store: '麦麦（幸福店）',
                cashier: '麦麦',
                saleTime: '2018-12-25 10:00',
                what: '---'
            },
            {
                goodsName: '商品名称',
                goodsNumber: 'ZDXS2018042801',
                saleType: '销售方式',
                goodsQuentity: '6',
                normalPrice: '¥20.00',
                realPrice: '¥20.00',
                saleStatus: '销售',
                store: '麦麦（幸福店）',
                cashier: '麦麦',
                saleTime: '2018-12-25 10:00',
                what: '---'
            }
        ];
    }
    TransactionDetailComponent.prototype.ngOnInit = function () {
    };
    TransactionDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-transaction-detail',
            template: __webpack_require__(/*! ./transaction-detail.component.html */ "./src/app/resale/transaction-detail/transaction-detail.component.html"),
            styles: [__webpack_require__(/*! ./transaction-detail.component.scss */ "./src/app/resale/transaction-detail/transaction-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TransactionDetailComponent);
    return TransactionDetailComponent;
}());



/***/ }),

/***/ "./src/app/statistics/data-view/data-view.component.html":
/*!***************************************************************!*\
  !*** ./src/app/statistics/data-view/data-view.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"display: flex;text-align: center; justify-content: space-around;\">\n  <nz-card style=\"text-align: left\">\n    <div class=\"color-gray\">\n      总销售额\n    </div>\n    <div class=\"font-max\">\n      126,560\n    </div>\n    <div style=\"margin-bottom: 1rem;\">\n      <div style=\"width: 220px;height: 50px;display: flex;align-items: center\">\n        <div class=\"color-gray\" style=\"display: inline-block;\">周同比</div>\n        <i nz-icon type=\"caret-up\" theme=\"outline\"></i>\n        <div style=\"display: inline-block;\">12％</div>\n        &nbsp;&nbsp;&nbsp;\n        <div class=\"color-gray\" style=\"display: inline-block;\">日环比</div>\n        <i nz-icon type=\"caret-down\" theme=\"outline\"></i>\n        <div style=\"display: inline-block;\">11％</div>\n      </div>\n    </div>\n    <hr class=\"color-lightgray\">\n    <div>\n      日均销售额 ¥12,423\n    </div>\n  </nz-card>\n\n  <nz-card style=\"text-align: left\">\n    <div class=\"color-gray\">\n      会员总数\n    </div>\n    <div class=\"font-max\">\n      8,846\n    </div>\n    <div style=\"margin-bottom: 1rem\">\n      <!-- <img style=\"width: 220px;height: 50px;\" src=\"assets/chart1.png\" alt=\"\"> -->\n    </div>\n    <hr class=\"color-lightgray\">\n    <div>\n      日增量 ¥423\n    </div>\n  </nz-card>\n\n  <nz-card style=\"text-align: left\">\n    <div class=\"color-gray\">\n      总销售额\n    </div>\n    <div class=\"font-max\">\n      6,560\n    </div>\n    <div style=\"margin-bottom: 1rem\">\n      <!-- <img style=\"width: 220px;height: 50px;\" src=\"assets/chart2.png\" alt=\"\"> -->\n    </div>\n    <hr class=\"color-lightgray\">\n    <div>\n      成交率 99%\n    </div>\n  </nz-card>\n</div>\n<div style=\"margin: 1rem -1.5rem 1rem -1.5rem;background: #f0f2f5;height: 2rem;\"></div>\n<div style=\"display: flex;justify-content: space-between\">\n  <div class=\"font-middle\" style=\"display: inline-block\">销售额</div>\n  <div style=\"display: inline-block\">\n    <nz-range-picker style=\"display: inline-block\" [(ngModel)]=\"dateRange\" (ngModelChange)=\"onChange($event)\" nzShowTime></nz-range-picker>\n  </div>\n</div>\n<div echarts [options]=\"chartOption\" class=\"demo-chart\" style=\"width: 100%;\"></div>"

/***/ }),

/***/ "./src/app/statistics/data-view/data-view.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/statistics/data-view/data-view.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0YXRpc3RpY3MvZGF0YS12aWV3L2RhdGEtdmlldy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/statistics/data-view/data-view.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/statistics/data-view/data-view.component.ts ***!
  \*************************************************************/
/*! exports provided: DataViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataViewComponent", function() { return DataViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DataViewComponent = /** @class */ (function () {
    function DataViewComponent() {
        this.data = [
            ['发布日期', '数量'],
            ['2018-03-25', 100],
            ['2018-04-04', 200],
            ['2018-04-09', 550],
            ['2018-04-14', 330],
            ['2018-04-17', 990],
            ['2018-04-18', 330],
            ['2018-04-19', 999],
            ['2018-04-20', 363],
            ['2018-04-21', 900],
            ['2018-04-22', 383],
            ['2018-04-23', 999],
            ['2018-05-01', 533],
            ['2018-05-10', 620],
            ['2018-05-14', 340],
            ['2018-05-17', 800]
        ];
    }
    DataViewComponent.prototype.ngOnInit = function () {
        this.chartOption = {
            color: ['#59a1f8', '#78c87d', '#f6d464', '#445285', '#8e67de', '#e36f7e', '#70c9ca', '#d396c6', '#b09e6c', '#4f58d5', '#96a36f'],
            legend: {},
            tooltip: {},
            dataset: {
                source: this.data
            },
            xAxis: { type: 'category' },
            yAxis: {},
            series: [
                { type: 'bar' }
            ]
        };
    };
    DataViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-data-view',
            template: __webpack_require__(/*! ./data-view.component.html */ "./src/app/statistics/data-view/data-view.component.html"),
            styles: [__webpack_require__(/*! ./data-view.component.scss */ "./src/app/statistics/data-view/data-view.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DataViewComponent);
    return DataViewComponent;
}());



/***/ }),

/***/ "./src/app/store/edit-staff/edit-staff.component.html":
/*!************************************************************!*\
  !*** ./src/app/store/edit-staff/edit-staff.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <nz-card nzTitle=\"员工账号\" style=\"width: 35rem;\"> -->\n<form nzForm [formGroup]=\"validateForm\">\n  <nz-form-item>\n    <nz-form-label [nzSpan]=\"3\">员工编号</nz-form-label>\n    <nz-form-control [nzSpan]=\"12\" nzHasFeedback>\n      <input nz-input formControlName=\"staffNumber\" placeholder=\"请输入门店名称\">\n    </nz-form-control>\n  </nz-form-item>\n\n  <nz-form-item>\n    <nz-form-label [nzSpan]=\"3\">员工姓名</nz-form-label>\n    <nz-form-control [nzSpan]=\"12\" nzHasFeedback>\n      <input nz-input formControlName=\"staffName\" placeholder=\"请输入员工姓名\">\n      <nz-form-explain *ngIf=\"validateForm.get('staffName')?.dirty && validateForm.get('staffName')?.errors\">\n        门店名称为3-10位\n      </nz-form-explain>\n    </nz-form-control>\n  </nz-form-item>\n\n  <nz-form-item>\n    <nz-form-label [nzSpan]=\"3\">联系方式</nz-form-label>\n    <nz-form-control [nzSpan]=\"12\" nzHasFeedback>\n      <input nz-input formControlName=\"staffTel\" placeholder=\"请输入联系方式\">\n      <nz-form-explain *ngIf=\"validateForm.get('staffTel')?.dirty && validateForm.get('staffTel')?.errors\">\n        门店名称为3-10位\n      </nz-form-explain>\n    </nz-form-control>\n  </nz-form-item>\n\n  <nz-form-item>\n    <nz-form-label [nzSpan]=\"3\">登录密码</nz-form-label>\n    <nz-form-control [nzSpan]=\"12\" nzHasFeedback>\n      <input nz-input formControlName=\"staffPassword\" placeholder=\"请输入登录密码\">\n      <nz-form-explain *ngIf=\"validateForm.get('staffPassword')?.dirty && validateForm.get('staffPassword')?.errors\">\n        登录密码为3-10位\n      </nz-form-explain>\n    </nz-form-control>\n  </nz-form-item>\n\n  <nz-form-item>\n    <nz-form-label [nzSpan]=\"3\">操作门店</nz-form-label>\n    <nz-form-control [nzSpan]=\"12\">\n      <nz-select formControlName=\"store\">\n        <div *ngFor=\"let perStore of storeList\">\n          <nz-option [nzLabel]=\"perStore.storeName\" [nzValue]=\"perStore.storeNumber\"></nz-option>\n        </div>\n      </nz-select>\n    </nz-form-control>\n  </nz-form-item>\n\n  <nz-form-item>\n    <nz-form-label [nzSpan]=\"3\">账号角色</nz-form-label>\n    <nz-form-control [nzSpan]=\"12\">\n      <nz-select formControlName=\"roleName\">\n        <div *ngFor=\"let perRole of roleList\">\n          <nz-option [nzLabel]=\"perRole.roleName\" [nzValue]=\"perRole.roleNumber\"></nz-option>\n        </div>\n      </nz-select>\n    </nz-form-control>\n  </nz-form-item>\n\n  <nz-form-item nz-row style=\"margin-bottom:8px;\">\n    <nz-form-control [nzSpan]=\"7\" [nzOffset]=\"6\">\n      <div style=\"display: flex;justify-content: space-around\">\n        <button nz-button nzType=\"primary\">保存</button>\n        <button nz-button (click)=\"cancelClick()\">取消</button>\n      </div>\n    </nz-form-control>\n  </nz-form-item>\n\n</form>\n\n<!-- </nz-card> -->"

/***/ }),

/***/ "./src/app/store/edit-staff/edit-staff.component.scss":
/*!************************************************************!*\
  !*** ./src/app/store/edit-staff/edit-staff.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0b3JlL2VkaXQtc3RhZmYvZWRpdC1zdGFmZi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/store/edit-staff/edit-staff.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/store/edit-staff/edit-staff.component.ts ***!
  \**********************************************************/
/*! exports provided: EditStaffComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditStaffComponent", function() { return EditStaffComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditStaffComponent = /** @class */ (function () {
    function EditStaffComponent(router, fb) {
        this.router = router;
        this.fb = fb;
        this.storeList = [
            { storeName: '门店1', storeNumber: '1' },
            { storeName: '门店2', storeNumber: '2' },
            { storeName: '门店3', storeNumber: '3' },
            { storeName: '门店4', storeNumber: '4' },
            { storeName: '门店5', storeNumber: '5' },
            { storeName: '门店6', storeNumber: '6' },
            { storeName: '门店7', storeNumber: '7' },
            { storeName: '门店8', storeNumber: '8' }
        ];
        this.roleList = [
            { roleName: '系统管理员', roleNumber: '1' },
            { roleName: '老板', roleNumber: '1' },
            { roleName: '店长', roleNumber: '1' },
            { roleName: '财务', roleNumber: '1' },
            { roleName: '运营经理', roleNumber: '1' },
            { roleName: '仓库管理员', roleNumber: '1' },
            { roleName: '促销管理员', roleNumber: '1' },
            { roleName: '收银操作员', roleNumber: '1' }
        ];
        this.validateForm = this.fb.group({
            staffNumber: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)]],
            staffName: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            staffTel: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)]],
            contactTel: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(13), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(13)]],
            staffPassword: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2)]],
            store: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            roleName: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
    }
    EditStaffComponent.prototype.ngOnInit = function () {
    };
    EditStaffComponent.prototype.cancelClick = function () {
        this.router.navigate(['/home/store/staff-account']);
    };
    EditStaffComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-staff',
            template: __webpack_require__(/*! ./edit-staff.component.html */ "./src/app/store/edit-staff/edit-staff.component.html"),
            styles: [__webpack_require__(/*! ./edit-staff.component.scss */ "./src/app/store/edit-staff/edit-staff.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], EditStaffComponent);
    return EditStaffComponent;
}());



/***/ }),

/***/ "./src/app/store/edit-store/edit-store.component.html":
/*!************************************************************!*\
  !*** ./src/app/store/edit-store/edit-store.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form nz-form [formGroup]=\"validateForm\" (ngSubmit)=\"submitForm()\">\n  <nz-form-item>\n    <nz-form-label [nzSpan]=\"3\">门店名称</nz-form-label>\n    <nz-form-control [nzSpan]=\"12\" nzHasFeedback>\n      <input nz-input formControlName=\"storeName\" placeholder=\"请输入门店名称\">\n      <nz-form-explain *ngIf=\"validateForm.get('storeName')?.dirty && validateForm.get('storeName')?.errors\">\n        门店名称为3-10位\n      </nz-form-explain>\n    </nz-form-control>\n  </nz-form-item>\n\n  <nz-form-item>\n    <nz-form-label [nzSpan]=\"3\">城市</nz-form-label>\n    <nz-form-control [nzSpan]=\"12\" nzHasFeedback>\n      <nz-cascader nzChangeOnSelect [nzOptions]=\"regions\" formControlName=\"region\" (ngModelChange)=\"onChanges($event)\">\n      </nz-cascader>\n    </nz-form-control>\n  </nz-form-item>\n\n  <nz-form-item>\n    <nz-form-label [nzSpan]=\"3\">地址</nz-form-label>\n    <nz-form-control [nzSpan]=\"12\" nzHasFeedback>\n      <input nz-input formControlName=\"storeAddress\" placeholder=\"请输入门店地址\">\n      <nz-form-explain *ngIf=\"validateForm.get('storeAddress')?.dirty && validateForm.get('storeAddress')?.errors\">\n        门店地址为3-10位\n      </nz-form-explain>\n    </nz-form-control>\n  </nz-form-item>\n  <nz-form-item>\n    <nz-form-label [nzSpan]=\"3\">联系人</nz-form-label>\n    <nz-form-control [nzSpan]=\"12\" nzHasFeedback>\n      <input nz-input formControlName=\"storeContact\" placeholder=\"请输入联系人\">\n      <nz-form-explain *ngIf=\"validateForm.get('storeContact')?.dirty && validateForm.get('storeContact')?.errors\">\n        联系人长度为2-6位\n      </nz-form-explain>\n    </nz-form-control>\n  </nz-form-item>\n  <nz-form-item>\n    <nz-form-label [nzSpan]=\"3\">联系电话</nz-form-label>\n    <nz-form-control [nzSpan]=\"12\" nzHasFeedback>\n      <input nz-input formControlName=\"contactTel\" placeholder=\"请输入联系电话\">\n      <nz-form-explain *ngIf=\"validateForm.get('contactTel')?.dirty && validateForm.get('contactTel')?.errors\">\n        联系电话长度为13位\n      </nz-form-explain>\n    </nz-form-control>\n  </nz-form-item>\n\n  <nz-form-item nz-row style=\"margin-bottom:8px;\">\n    <nz-form-control [nzSpan]=\"7\" [nzOffset]=\"6\">\n      <div style=\"display: flex;justify-content: space-around\">\n        <button nz-button nzType=\"primary\">保存</button>\n        <button nz-button (click)=\"cancelClick()\">取消</button>\n      </div>\n    </nz-form-control>\n  </nz-form-item>\n</form>"

/***/ }),

/***/ "./src/app/store/edit-store/edit-store.component.scss":
/*!************************************************************!*\
  !*** ./src/app/store/edit-store/edit-store.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0b3JlL2VkaXQtc3RvcmUvZWRpdC1zdG9yZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/store/edit-store/edit-store.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/store/edit-store/edit-store.component.ts ***!
  \**********************************************************/
/*! exports provided: EditStoreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditStoreComponent", function() { return EditStoreComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditStoreComponent = /** @class */ (function () {
    function EditStoreComponent(fb, router) {
        this.fb = fb;
        this.router = router;
        this.regions = [{
                value: 'zhejiang',
                label: '浙江',
                children: [{
                        value: 'hangzhou',
                        label: '杭州',
                        children: [{
                                value: 'xihu',
                                label: '西湖',
                                isLeaf: true
                            }]
                    }, {
                        value: 'ningbo',
                        label: '宁波',
                        isLeaf: true
                    }]
            }, {
                value: 'jiangsu',
                label: '江苏',
                children: [{
                        value: 'nanjing',
                        label: '南京',
                        children: [{
                                value: 'zhonghuamen',
                                label: '玄武湖',
                                isLeaf: true
                            }]
                    }]
            }];
        this.values = null;
    }
    EditStoreComponent.prototype.ngOnInit = function () {
        this.validateForm = this.fb.group({
            storeName: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)]],
            region: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            storeAddress: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)]],
            storeContact: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2)]],
            contactTel: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(13), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(13)]]
        });
    };
    EditStoreComponent.prototype.onChanges = function (values) {
        console.log(values, this.values);
    };
    EditStoreComponent.prototype.cancelClick = function () {
        this.router.navigate(['/home/store/store-manage']);
    };
    EditStoreComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-store',
            template: __webpack_require__(/*! ./edit-store.component.html */ "./src/app/store/edit-store/edit-store.component.html"),
            styles: [__webpack_require__(/*! ./edit-store.component.scss */ "./src/app/store/edit-store/edit-store.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], EditStoreComponent);
    return EditStoreComponent;
}());



/***/ }),

/***/ "./src/app/store/edit-terminal/edit-terminal.component.html":
/*!******************************************************************!*\
  !*** ./src/app/store/edit-terminal/edit-terminal.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <nz-card nzTitle=\"员工账号\" style=\"width: 35rem;\"> -->\n<form nzForm [formGroup]=\"validateForm\">\n  <nz-form-item>\n    <nz-form-label [nzSpan]=\"3\">终端编码</nz-form-label>\n    <nz-form-control [nzSpan]=\"12\" nzHasFeedback>\n      <input nz-input formControlName=\"terminalNumber\">\n    </nz-form-control>\n  </nz-form-item>\n\n  <nz-form-item>\n    <nz-form-label [nzSpan]=\"3\">邀请码</nz-form-label>\n    <nz-form-control [nzSpan]=\"12\" nzHasFeedback>\n      <input nz-input formControlName=\"invitationCode\">\n    </nz-form-control>\n  </nz-form-item>\n\n  <nz-form-item>\n    <nz-form-label [nzSpan]=\"3\">员工姓名</nz-form-label>\n    <nz-form-control [nzSpan]=\"12\" nzHasFeedback>\n      <input nz-input formControlName=\"invitationCode\" placeholder=\"请输入员工姓名\">\n    </nz-form-control>\n  </nz-form-item>\n\n  <nz-form-item>\n    <nz-form-label [nzSpan]=\"3\">操作门店</nz-form-label>\n    <nz-form-control [nzSpan]=\"12\">\n      <nz-select formControlName=\"store\">\n        <div *ngFor=\"let perStore of storeList\">\n          <nz-option [nzLabel]=\"perStore.storeName\" [nzValue]=\"perStore.storeNumber\"></nz-option>\n        </div>\n      </nz-select>\n    </nz-form-control>\n  </nz-form-item>\n\n  <nz-form-item>\n    <nz-form-label [nzSpan]=\"3\">登录密码</nz-form-label>\n    <nz-form-control [nzSpan]=\"12\" nzHasFeedback>\n      <input nz-input formControlName=\"invitationCode\" placeholder=\"请输入登录密码\">\n    </nz-form-control>\n  </nz-form-item>\n\n  <nz-form-item nz-row style=\"margin-bottom:8px;\">\n    <nz-form-control [nzSpan]=\"7\" [nzOffset]=\"6\">\n      <div style=\"display: flex;justify-content: space-around\">\n        <button nz-button nzType=\"primary\">保存</button>\n        <button nz-button (click)=\"cancelClick()\">取消</button>\n      </div>\n    </nz-form-control>\n  </nz-form-item>\n\n</form>\n\n<!-- </nz-card> -->"

/***/ }),

/***/ "./src/app/store/edit-terminal/edit-terminal.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/store/edit-terminal/edit-terminal.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0b3JlL2VkaXQtdGVybWluYWwvZWRpdC10ZXJtaW5hbC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/store/edit-terminal/edit-terminal.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/store/edit-terminal/edit-terminal.component.ts ***!
  \****************************************************************/
/*! exports provided: EditTerminalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditTerminalComponent", function() { return EditTerminalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditTerminalComponent = /** @class */ (function () {
    function EditTerminalComponent(fb, router) {
        this.fb = fb;
        this.router = router;
        this.storeList = [
            { storeName: '门店1', storeNumber: '1' },
            { storeName: '门店2', storeNumber: '2' },
            { storeName: '门店3', storeNumber: '3' },
            { storeName: '门店4', storeNumber: '4' },
            { storeName: '门店5', storeNumber: '5' },
            { storeName: '门店6', storeNumber: '6' },
            { storeName: '门店7', storeNumber: '7' },
            { storeName: '门店8', storeNumber: '8' }
        ];
    }
    EditTerminalComponent.prototype.ngOnInit = function () {
        this.validateForm = this.fb.group({
            terminalNumber: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)]],
            invitationCode: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            staffName: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)]],
            store: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2)]],
            password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(13), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(13)]]
        });
    };
    EditTerminalComponent.prototype.cancelClick = function () {
        this.router.navigate(['/home/store/terminal-manage']);
    };
    EditTerminalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-terminal',
            template: __webpack_require__(/*! ./edit-terminal.component.html */ "./src/app/store/edit-terminal/edit-terminal.component.html"),
            styles: [__webpack_require__(/*! ./edit-terminal.component.scss */ "./src/app/store/edit-terminal/edit-terminal.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], EditTerminalComponent);
    return EditTerminalComponent;
}());



/***/ }),

/***/ "./src/app/store/staff-account/staff-account.component.html":
/*!******************************************************************!*\
  !*** ./src/app/store/staff-account/staff-account.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"display: flex;justify-content: space-between;margin-bottom: 1rem\">\n  <div>\n    <input style=\"display: inline-block;width: 15rem\" nz-input placeholder=\"请输入订单号\" [(ngModel)]=\"searchCondition\">\n    <span style=\"margin-left: 1rem;display: inline-block;\">高级搜索</span>\n  </div>\n  <div>\n    <button style=\"width: 4rem;height: 2rem;\" nz-button nzType=\"primary\" (click)=\"editStore('new')\">新增</button>\n  </div>\n</div>\n<div style=\"margin-top: 0.5rem\">\n  <nz-table #borderedTable nzBordered [nzData]=\"tmpData\" [nzPageSize]=\"10\">\n    <thead>\n      <tr>\n        <th>工号编码</th>\n        <th>姓名</th>\n        <th>手机号码</th>\n        <th>操作门店</th>\n        <th>登录次数</th>\n        <th>最后登录时间</th>\n        <th>最后登录IP</th>\n        <th>操作</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let data of borderedTable.data\">\n        <td>{{data.staffNumber}}</td>\n        <td>{{data.staffName}}</td>\n        <td>{{data.staffTel}}</td>\n        <td>{{data.store}}</td>\n        <td>{{data.loginCount}}</td>\n        <td>{{data.lastLoginTime}}</td>\n        <td>{{data.lastLoginIP}}</td>\n        <td>{{data.what}}</td>\n      </tr>\n    </tbody>\n  </nz-table>\n</div>"

/***/ }),

/***/ "./src/app/store/staff-account/staff-account.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/store/staff-account/staff-account.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0b3JlL3N0YWZmLWFjY291bnQvc3RhZmYtYWNjb3VudC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/store/staff-account/staff-account.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/store/staff-account/staff-account.component.ts ***!
  \****************************************************************/
/*! exports provided: StaffAccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffAccountComponent", function() { return StaffAccountComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StaffAccountComponent = /** @class */ (function () {
    function StaffAccountComponent(router) {
        this.router = router;
        this.tmpData = [
            {
                staffNumber: '0001',
                staffName: '麦麦',
                staffTel: '18888888888',
                store: '麦麦（幸福店）',
                loginCount: '10',
                lastLoginTime: '2018-12-25 10:00',
                lastLoginIP: '119.129.229.111',
                what: '---'
            },
            {
                staffNumber: '0002',
                staffName: '麦麦',
                staffTel: '18888888888',
                store: '麦麦（幸福店）',
                loginCount: '10',
                lastLoginTime: '2018-12-25 10:00',
                lastLoginIP: '119.129.229.111',
                what: '---'
            },
            {
                staffNumber: '0003',
                staffName: '麦麦',
                staffTel: '18888888888',
                store: '麦麦（幸福店）',
                loginCount: '10',
                lastLoginTime: '2018-12-25 10:00',
                lastLoginIP: '119.129.229.111',
                what: '---'
            },
            {
                staffNumber: '0004',
                staffName: '麦麦',
                staffTel: '18888888888',
                store: '麦麦（幸福店）',
                loginCount: '10',
                lastLoginTime: '2018-12-25 10:00',
                lastLoginIP: '119.129.229.111',
                what: '---'
            },
            {
                staffNumber: '0005',
                staffName: '麦麦',
                staffTel: '18888888888',
                store: '麦麦（幸福店）',
                loginCount: '10',
                lastLoginTime: '2018-12-25 10:00',
                lastLoginIP: '119.129.229.111',
                what: '---'
            }
        ];
    }
    StaffAccountComponent.prototype.ngOnInit = function () {
    };
    StaffAccountComponent.prototype.editStore = function (type) {
        this.router.navigate(['/home/store/staff-account/edit-staff']);
    };
    StaffAccountComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-staff-account',
            template: __webpack_require__(/*! ./staff-account.component.html */ "./src/app/store/staff-account/staff-account.component.html"),
            styles: [__webpack_require__(/*! ./staff-account.component.scss */ "./src/app/store/staff-account/staff-account.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], StaffAccountComponent);
    return StaffAccountComponent;
}());



/***/ }),

/***/ "./src/app/store/store-manage/store-manage.component.html":
/*!****************************************************************!*\
  !*** ./src/app/store/store-manage/store-manage.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"display: flex;justify-content: space-between;margin-bottom: 1rem\">\n  <div>\n    <input style=\"display: inline-block;width: 15rem\" nz-input placeholder=\"请输入订单号\" [(ngModel)]=\"searchCondition\">\n    <span style=\"margin-left: 1rem;display: inline-block;\">高级搜索</span>\n  </div>\n  <div>\n    <button style=\"width: 4rem;height: 2rem;\" nz-button nzType=\"primary\" (click)=\"createStoreClick('create')\">新增</button>\n  </div>\n</div>\n<div style=\"margin-top: 0.5rem\">\n  <nz-table #borderedTable nzBordered [nzData]=\"tmpData\" [nzPageSize]=\"10\">\n    <thead>\n      <tr>\n        <th>编码</th>\n        <th>门店名称</th>\n        <th>联系人</th>\n        <th>联系电话</th>\n        <th>所属区域</th>\n        <th>详细地址</th>\n        <th>状态</th>\n        <th>操作</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let data of borderedTable.data\">\n        <td>{{data.storeNumber}}</td>\n        <td>{{data.storeName}}</td>\n        <td>{{data.storeContact}}</td>\n        <td>{{data.contactTel}}</td>\n        <td>{{data.region}}</td>\n        <td>{{data.address}}</td>\n        <td>{{data.storeStatus}}</td>\n        <td>{{data.storeOperation}}</td>\n      </tr>\n    </tbody>\n  </nz-table>\n</div>"

/***/ }),

/***/ "./src/app/store/store-manage/store-manage.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/store/store-manage/store-manage.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0b3JlL3N0b3JlLW1hbmFnZS9zdG9yZS1tYW5hZ2UuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/store/store-manage/store-manage.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/store/store-manage/store-manage.component.ts ***!
  \**************************************************************/
/*! exports provided: StoreManageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreManageComponent", function() { return StoreManageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StoreManageComponent = /** @class */ (function () {
    function StoreManageComponent(router) {
        this.router = router;
        this.tmpData = [
            {
                storeNumber: '1',
                storeName: '麦麦（幸福店）',
                storeContact: '麦麦',
                contactTel: '18888888888',
                region: '浙江省／杭州市／西湖区',
                address: '幸福村幸福街66号',
                storeStatus: '正常',
                storeOperation: '查看 修改'
            },
            {
                storeNumber: '2',
                storeName: '麦麦（幸福店）',
                storeContact: '麦麦',
                contactTel: '18888888888',
                region: '浙江省／杭州市／西湖区',
                address: '幸福村幸福街66号',
                storeStatus: '正常',
                storeOperation: '查看 修改'
            },
            {
                storeNumber: '3',
                storeName: '麦麦（幸福店）',
                storeContact: '麦麦',
                contactTel: '18888888888',
                region: '浙江省／杭州市／西湖区',
                address: '幸福村幸福街66号',
                storeStatus: '正常',
                storeOperation: '查看 修改'
            },
            {
                storeNumber: '4',
                storeName: '麦麦（幸福店）',
                storeContact: '麦麦',
                contactTel: '18888888888',
                region: '浙江省／杭州市／西湖区',
                address: '幸福村幸福街66号',
                storeStatus: '正常',
                storeOperation: '查看 修改'
            }
        ];
    }
    StoreManageComponent.prototype.ngOnInit = function () {
    };
    StoreManageComponent.prototype.createStoreClick = function (type) {
        console.log(type);
        this.router.navigate(['/home/store/store-manage/edit-store']);
    };
    StoreManageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-store-manage',
            template: __webpack_require__(/*! ./store-manage.component.html */ "./src/app/store/store-manage/store-manage.component.html"),
            styles: [__webpack_require__(/*! ./store-manage.component.scss */ "./src/app/store/store-manage/store-manage.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], StoreManageComponent);
    return StoreManageComponent;
}());



/***/ }),

/***/ "./src/app/store/terminal-manage/terminal-manage.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/store/terminal-manage/terminal-manage.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"display: flex;justify-content: space-between;margin-bottom: 1rem\">\n  <div>\n    <input style=\"display: inline-block;width: 15rem\" nz-input placeholder=\"请输入订单号\" [(ngModel)]=\"searchCondition\">\n    <span style=\"margin-left: 1rem;display: inline-block;\">高级搜索</span>\n  </div>\n  <div>\n    <button style=\"width: 4rem;height: 2rem;\" nz-button nzType=\"primary\" (click)=\"createTerminal('create')\">新增</button>\n  </div>\n</div>\n<div style=\"margin-top: 0.5rem\">\n  <nz-table #borderedTable nzBordered [nzData]=\"tmpData\" [nzPageSize]=\"10\">\n    <thead>\n      <tr>\n        <th>工号编码</th>\n        <th>姓名</th>\n        <th>手机号码</th>\n        <th>操作门店</th>\n        <th>登录次数</th>\n        <th>最后登录时间</th>\n        <th>最后登录IP</th>\n        <th>操作</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let data of borderedTable.data\">\n        <td>{{data.terminalNumber}}</td>\n        <td>{{data.storeName}}</td>\n        <td>{{data.cashier}}</td>\n        <td>{{data.invitationCode}}</td>\n        <td>{{data.terminalStatus}}</td>\n        <td>{{data.recordDate}}</td>\n        <td>{{data.updateDate}}</td>\n        <td>{{data.operation}}</td>\n      </tr>\n    </tbody>\n  </nz-table>\n</div>"

/***/ }),

/***/ "./src/app/store/terminal-manage/terminal-manage.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/store/terminal-manage/terminal-manage.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0b3JlL3Rlcm1pbmFsLW1hbmFnZS90ZXJtaW5hbC1tYW5hZ2UuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/store/terminal-manage/terminal-manage.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/store/terminal-manage/terminal-manage.component.ts ***!
  \********************************************************************/
/*! exports provided: TerminalManageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TerminalManageComponent", function() { return TerminalManageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TerminalManageComponent = /** @class */ (function () {
    function TerminalManageComponent(router) {
        this.router = router;
        this.tmpData = [
            {
                terminalNumber: '00001',
                storeName: '麦麦（幸福店）',
                cashier: 'SJWLZD',
                invitationCode: '9238eefywtwwjwwj',
                terminalStatus: '正常',
                recordDate: '2018-12-25 10:00',
                updateDate: '2018-12-26 10:00',
                operation: '修改 删除'
            },
            {
                terminalNumber: '00002',
                storeName: '麦麦（幸福店）',
                cashier: 'SJWLZD',
                invitationCode: '9238eefywtwwjwwj',
                terminalStatus: '正常',
                recordDate: '2018-12-25 10:00',
                updateDate: '2018-12-26 10:00',
                operation: '修改 删除'
            },
            {
                terminalNumber: '00003',
                storeName: '麦麦（幸福店）',
                cashier: 'SJWLZD',
                invitationCode: '9238eefywtwwjwwj',
                terminalStatus: '正常',
                recordDate: '2018-12-25 10:00',
                updateDate: '2018-12-26 10:00',
                operation: '修改 删除'
            },
            {
                terminalNumber: '00004',
                storeName: '麦麦（幸福店）',
                cashier: 'SJWLZD',
                invitationCode: '9238eefywtwwjwwj',
                terminalStatus: '正常',
                recordDate: '2018-12-25 10:00',
                updateDate: '2018-12-26 10:00',
                operation: '修改 删除'
            },
            {
                terminalNumber: '00005',
                storeName: '麦麦（幸福店）',
                cashier: 'SJWLZD',
                invitationCode: '9238eefywtwwjwwj',
                terminalStatus: '正常',
                recordDate: '2018-12-25 10:00',
                updateDate: '2018-12-26 10:00',
                operation: '修改 删除'
            }
        ];
    }
    TerminalManageComponent.prototype.ngOnInit = function () {
    };
    TerminalManageComponent.prototype.createTerminal = function (type) {
        console.log(type);
        this.router.navigate(['/home/store/terminal-manage/edit-terminal']);
    };
    TerminalManageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-terminal-manage',
            template: __webpack_require__(/*! ./terminal-manage.component.html */ "./src/app/store/terminal-manage/terminal-manage.component.html"),
            styles: [__webpack_require__(/*! ./terminal-manage.component.scss */ "./src/app/store/terminal-manage/terminal-manage.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], TerminalManageComponent);
    return TerminalManageComponent;
}());



/***/ }),

/***/ "./src/app/system/department-manage/department-manage.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/system/department-manage/department-manage.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"display: flex;justify-content: space-between;margin-bottom: 1rem\">\n  <div>\n    <input style=\"display: inline-block;width: 15rem\" nz-input placeholder=\"请输入订单号\" [(ngModel)]=\"searchCondition\">\n    <span style=\"margin-left: 1rem;display: inline-block;\">高级搜索</span>\n  </div>\n  <div>\n    <button style=\"width: 4rem;height: 2rem;\" nz-button nzType=\"primary\">新增</button>\n  </div>\n</div>\n<div style=\"margin-top: 0.5rem\">\n  <nz-table #borderedTable nzBordered [nzData]=\"tmpData\" [nzPageSize]=\"10\">\n    <thead>\n      <tr>\n        <th>编号</th>\n        <th>部门名称</th>\n        <th>操作</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let data of borderedTable.data\">\n        <td>{{data.departmentNumber}}</td>\n        <td>{{data.departmentName}}</td>\n        <td>{{data.departmentOperation}}</td>\n      </tr>\n    </tbody>\n  </nz-table>\n</div>"

/***/ }),

/***/ "./src/app/system/department-manage/department-manage.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/system/department-manage/department-manage.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N5c3RlbS9kZXBhcnRtZW50LW1hbmFnZS9kZXBhcnRtZW50LW1hbmFnZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/system/department-manage/department-manage.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/system/department-manage/department-manage.component.ts ***!
  \*************************************************************************/
/*! exports provided: DepartmentManageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepartmentManageComponent", function() { return DepartmentManageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DepartmentManageComponent = /** @class */ (function () {
    function DepartmentManageComponent() {
        this.tmpData = [
            {
                departmentNumber: '1',
                departmentName: '运营部',
                departmentOperation: '修改 删除'
            },
            {
                departmentNumber: '2',
                departmentName: '市场部',
                departmentOperation: '修改 删除'
            },
            {
                departmentNumber: '3',
                departmentName: '营销部',
                departmentOperation: '修改 删除'
            },
            {
                departmentNumber: '4',
                departmentName: '财务部',
                departmentOperation: '修改 删除'
            },
            {
                departmentNumber: '5',
                departmentName: '客服部',
                departmentOperation: '修改 删除'
            },
            {
                departmentNumber: '6',
                departmentName: '销售部',
                departmentOperation: '修改 删除'
            },
            {
                departmentNumber: '7',
                departmentName: '运维部',
                departmentOperation: '修改 删除'
            },
            {
                departmentNumber: '8',
                departmentName: '采购部',
                departmentOperation: '修改 删除'
            }
        ];
    }
    DepartmentManageComponent.prototype.ngOnInit = function () {
    };
    DepartmentManageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-department-manage',
            template: __webpack_require__(/*! ./department-manage.component.html */ "./src/app/system/department-manage/department-manage.component.html"),
            styles: [__webpack_require__(/*! ./department-manage.component.scss */ "./src/app/system/department-manage/department-manage.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DepartmentManageComponent);
    return DepartmentManageComponent;
}());



/***/ }),

/***/ "./src/app/system/role-accredit/role-accredit.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/system/role-accredit/role-accredit.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  role-accredit works!\n</p>\n"

/***/ }),

/***/ "./src/app/system/role-accredit/role-accredit.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/system/role-accredit/role-accredit.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N5c3RlbS9yb2xlLWFjY3JlZGl0L3JvbGUtYWNjcmVkaXQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/system/role-accredit/role-accredit.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/system/role-accredit/role-accredit.component.ts ***!
  \*****************************************************************/
/*! exports provided: RoleAccreditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleAccreditComponent", function() { return RoleAccreditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RoleAccreditComponent = /** @class */ (function () {
    function RoleAccreditComponent() {
    }
    RoleAccreditComponent.prototype.ngOnInit = function () {
    };
    RoleAccreditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-role-accredit',
            template: __webpack_require__(/*! ./role-accredit.component.html */ "./src/app/system/role-accredit/role-accredit.component.html"),
            styles: [__webpack_require__(/*! ./role-accredit.component.scss */ "./src/app/system/role-accredit/role-accredit.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], RoleAccreditComponent);
    return RoleAccreditComponent;
}());



/***/ }),

/***/ "./src/app/system/role-manage/role-manage.component.html":
/*!***************************************************************!*\
  !*** ./src/app/system/role-manage/role-manage.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"display: flex;justify-content: space-between;margin-bottom: 1rem\">\n  <div>\n    <input style=\"display: inline-block;width: 15rem\" nz-input placeholder=\"请输入订单号\" [(ngModel)]=\"searchCondition\">\n    <span style=\"margin-left: 1rem;display: inline-block;\">高级搜索</span>\n  </div>\n  <div>\n    <button style=\"width: 4rem;height: 2rem;\" nz-button nzType=\"primary\">新增</button>\n  </div>\n</div>\n<div style=\"margin-top: 0.5rem\">\n  <nz-table #borderedTable nzBordered [nzData]=\"tmpData\" [nzPageSize]=\"10\">\n    <thead>\n      <tr>\n        <th>序号</th>\n        <th>角色名称</th>\n        <th>操作</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let data of borderedTable.data\">\n        <td>{{data.roleNumber}}</td>\n        <td>{{data.roleName}}</td>\n        <td>{{data.roleOperation}}</td>\n      </tr>\n    </tbody>\n  </nz-table>\n</div>"

/***/ }),

/***/ "./src/app/system/role-manage/role-manage.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/system/role-manage/role-manage.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N5c3RlbS9yb2xlLW1hbmFnZS9yb2xlLW1hbmFnZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/system/role-manage/role-manage.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/system/role-manage/role-manage.component.ts ***!
  \*************************************************************/
/*! exports provided: RoleManageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleManageComponent", function() { return RoleManageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RoleManageComponent = /** @class */ (function () {
    function RoleManageComponent() {
        this.tmpData = [
            {
                roleNumber: '1',
                roleName: '系统管理员',
                roleOperation: '修改 删除'
            },
            {
                roleNumber: '2',
                roleName: '老板',
                roleOperation: '修改 删除'
            },
            {
                roleNumber: '3',
                roleName: '店长',
                roleOperation: '修改 删除'
            },
            {
                roleNumber: '4',
                roleName: '财务',
                roleOperation: '修改 删除'
            },
            {
                roleNumber: '5',
                roleName: '运营经理',
                roleOperation: '修改 删除'
            },
            {
                roleNumber: '6',
                roleName: '仓库管理员',
                roleOperation: '修改 删除'
            },
            {
                roleNumber: '7',
                roleName: '促销管理员',
                roleOperation: '修改 删除'
            },
            {
                roleNumber: '8',
                roleName: '收银操作员',
                roleOperation: '修改 删除'
            }
        ];
    }
    RoleManageComponent.prototype.ngOnInit = function () {
    };
    RoleManageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-role-manage',
            template: __webpack_require__(/*! ./role-manage.component.html */ "./src/app/system/role-manage/role-manage.component.html"),
            styles: [__webpack_require__(/*! ./role-manage.component.scss */ "./src/app/system/role-manage/role-manage.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], RoleManageComponent);
    return RoleManageComponent;
}());



/***/ }),

/***/ "./src/app/system/system-notice/system-notice.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/system/system-notice/system-notice.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  system-notice works!\n</p>\n"

/***/ }),

/***/ "./src/app/system/system-notice/system-notice.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/system/system-notice/system-notice.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N5c3RlbS9zeXN0ZW0tbm90aWNlL3N5c3RlbS1ub3RpY2UuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/system/system-notice/system-notice.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/system/system-notice/system-notice.component.ts ***!
  \*****************************************************************/
/*! exports provided: SystemNoticeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystemNoticeComponent", function() { return SystemNoticeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SystemNoticeComponent = /** @class */ (function () {
    function SystemNoticeComponent() {
    }
    SystemNoticeComponent.prototype.ngOnInit = function () {
    };
    SystemNoticeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-system-notice',
            template: __webpack_require__(/*! ./system-notice.component.html */ "./src/app/system/system-notice/system-notice.component.html"),
            styles: [__webpack_require__(/*! ./system-notice.component.scss */ "./src/app/system/system-notice/system-notice.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SystemNoticeComponent);
    return SystemNoticeComponent;
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

module.exports = __webpack_require__(/*! /Users/gm/Desktop/ResalePlatform/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map