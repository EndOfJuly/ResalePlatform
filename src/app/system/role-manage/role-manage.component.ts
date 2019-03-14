import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-role-manage',
  templateUrl: './role-manage.component.html',
  styleUrls: ['./role-manage.component.scss']
})
export class RoleManageComponent implements OnInit {

  tmpData = [
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

  constructor() { }

  ngOnInit() {
  }

}
