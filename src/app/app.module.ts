import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './normal/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { DataViewComponent } from './statistics/data-view/data-view.component';
import { SummarizingComponent } from './resale/summarizing/summarizing.component';
import { TransactionDetailComponent } from './resale/transaction-detail/transaction-detail.component';
import { MemberTypeComponent } from './member/member-type/member-type.component';
import { MemberListComponent } from './member/member-list/member-list.component';
import { StoreManageComponent } from './store/store-manage/store-manage.component';
import { StaffAccountComponent } from './store/staff-account/staff-account.component';
import { TerminalManageComponent } from './store/terminal-manage/terminal-manage.component';
import { DepartmentManageComponent } from './system/department-manage/department-manage.component';
import { RoleManageComponent } from './system/role-manage/role-manage.component';
import { RoleAccreditComponent } from './system/role-accredit/role-accredit.component';
import { SystemNoticeComponent } from './system/system-notice/system-notice.component';
import { DiscountComponent } from './operation/discount/discount.component';
import { MarketingMethodComponent } from './operation/marketing-method/marketing-method.component';
import { HomeComponent } from './normal/home/home.component';

import { NgxEchartsModule } from 'ngx-echarts';
import { NewDiscountComponent } from './operation/new-discount/new-discount.component';
import { NewMarketingMethodComponent } from './operation/new-marketing-method/new-marketing-method.component';
import { EditStoreComponent } from './store/edit-store/edit-store.component';
import { EditStaffComponent } from './store/edit-staff/edit-staff.component';
import { EditTerminalComponent } from './store/edit-terminal/edit-terminal.component';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DataViewComponent,
    SummarizingComponent,
    TransactionDetailComponent,
    MemberTypeComponent,
    MemberListComponent,
    StoreManageComponent,
    StaffAccountComponent,
    TerminalManageComponent,
    DepartmentManageComponent,
    RoleManageComponent,
    RoleAccreditComponent,
    SystemNoticeComponent,
    DiscountComponent,
    MarketingMethodComponent,
    HomeComponent,
    NewDiscountComponent,
    NewMarketingMethodComponent,
    EditStoreComponent,
    EditStaffComponent,
    EditTerminalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgZorroAntdModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxEchartsModule
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule { }
