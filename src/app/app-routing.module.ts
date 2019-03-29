import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './normal/login/login.component';
import { HomeComponent } from './normal/home/home.component';
import { DataViewComponent } from './statistics/data-view/data-view.component';
import { SummarizingComponent } from './resale/summarizing/summarizing.component';
import { TransactionDetailComponent } from './resale/transaction-detail/transaction-detail.component';
import { StoreManageComponent } from './store/store-manage/store-manage.component';
import { StaffAccountComponent } from './store/staff-account/staff-account.component';
import { TerminalManageComponent } from './store/terminal-manage/terminal-manage.component';
import { MemberTypeComponent } from './member/member-type/member-type.component';
import { MemberListComponent } from './member/member-list/member-list.component';
import { DiscountComponent } from './operation/discount/discount.component';
import { MarketingMethodComponent } from './operation/marketing-method/marketing-method.component';
import { DepartmentManageComponent } from './system/department-manage/department-manage.component';
import { RoleManageComponent } from './system/role-manage/role-manage.component';
import { RoleAccreditComponent } from './system/role-accredit/role-accredit.component';
import { SystemNoticeComponent } from './system/system-notice/system-notice.component';
import { EditStoreComponent } from './store/edit-store/edit-store.component';
import { EditStaffComponent } from './store/edit-staff/edit-staff.component';
import { EditTerminalComponent } from './store/edit-terminal/edit-terminal.component';
import { EditDiscountComponent } from './operation/edit-discount/edit-discount.component';
import { EditMarketingMethodComponent } from './operation/edit-marketing-method/edit-marketing-method.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'home', component: HomeComponent,
    children: [
      {
        path: 'statistics', data: { breadcrumb: '统计' },
        children: [
          { path: 'data-view', component: DataViewComponent, data: { breadcrumb: '数据概览' } }
        ]
      },
      {
        path: 'resale', data: { breadcrumb: '零售' },
        children: [
          { path: 'summarizing', component: SummarizingComponent, data: { breadcrumb: '销售汇总' } },
          { path: 'transaction-detail', component: TransactionDetailComponent, data: { breadcrumb: '交易明细' } }
        ]
      },
      {
        path: 'store', data: { breadcrumb: '门店' },
        children: [
          { path: 'store-manage', component: StoreManageComponent, data: { breadcrumb: '门店管理' } },
          { path: 'store-manage/edit-store', component: EditStoreComponent, data: { breadcrumb: '新增门店' } },
          { path: 'staff-account', component: StaffAccountComponent, data: { breadcrumb: '员工账号' } },
          { path: 'staff-account/edit-staff', component: EditStaffComponent, data: { breadcrumb: '新增员工' } },
          { path: 'terminal-manage', component: TerminalManageComponent, data: { breadcrumb: '终端管理' } },
          { path: 'terminal-manage/edit-terminal', component: EditTerminalComponent, data: { breadcrumb: '新增终端' } }
        ]
      },
      {
        path: 'member', data: { breadcrumb: '会员' },
        children: [
          { path: 'member-type', component: MemberTypeComponent, data: { breadcrumb: '会员类别' } },
          { path: 'member-list', component: MemberListComponent, data: { breadcrumb: '会员列表' } }
        ]
      },
      {
        path: 'operation', data: { breadcrumb: '营销' },
        children: [
          { path: 'discount', component: DiscountComponent, data: { breadcrumb: '优惠券' } },
          { path: 'discount/edit-discount', component: EditDiscountComponent, data: { breadcrumb: '新增优惠券' } },
          { path: 'marketing-method', component: MarketingMethodComponent, data: { breadcrumb: '线下活动' } },
          { path: 'marketing-method/edit-marketing-method', component: EditMarketingMethodComponent, data: { breadcrumb: '新增活动' } }
        ]
      },
      {
        path: 'system', data: { breadcrumb: '系统' },
        children: [
          { path: 'department-manage', component: DepartmentManageComponent, data: { breadcrumb: '部门设置' } },
          { path: 'role-manage', component: RoleManageComponent, data: { breadcrumb: '角色管理' } },
          { path: 'role-accredit', component: RoleAccreditComponent, data: { breadcrumb: '角色授权' } },
          { path: 'system-notice', component: SystemNoticeComponent, data: { breadcrumb: '升级公告' } },
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
