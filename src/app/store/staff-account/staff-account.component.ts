import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-staff-account',
  templateUrl: './staff-account.component.html',
  styleUrls: ['./staff-account.component.scss']
})
export class StaffAccountComponent implements OnInit {

  tmpData = [
    {
      staffNumber: '0001',
      staffName: '麦麦（幸福店）',
      storeContact: '麦麦',
      contactTele: '188888888888',
      region: '浙江省／杭州市／西湖区',
      address: '幸福村幸福街66号',
      storeStatus: '正常',
      storeOperation: '查看 修改'
    }
  ];


  constructor() { }

  ngOnInit() {
  }

}
