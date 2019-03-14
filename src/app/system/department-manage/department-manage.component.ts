import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-department-manage',
  templateUrl: './department-manage.component.html',
  styleUrls: ['./department-manage.component.scss']
})
export class DepartmentManageComponent implements OnInit {

  tmpData = [
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

  constructor() { }

  ngOnInit() {
  }

}
