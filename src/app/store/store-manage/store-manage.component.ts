import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-store-manage',
  templateUrl: './store-manage.component.html',
  styleUrls: ['./store-manage.component.scss']
})
export class StoreManageComponent implements OnInit {

  tmpData = [
    {
      storeNumber: '1',
      storeName: '麦麦（幸福店）',
      storeContact: '麦麦',
      contactTel: '188888888888',
      region: '浙江省／杭州市／西湖区',
      address: '幸福村幸福街66号',
      storeStatus: '正常',
      storeOperation: '查看 修改'
    },
    {
      storeNumber: '2',
      storeName: '麦麦（幸福店）',
      storeContact: '麦麦',
      contactTel: '188888888888',
      region: '浙江省／杭州市／西湖区',
      address: '幸福村幸福街66号',
      storeStatus: '正常',
      storeOperation: '查看 修改'
    },
    {
      storeNumber: '3',
      storeName: '麦麦（幸福店）',
      storeContact: '麦麦',
      contactTel: '188888888888',
      region: '浙江省／杭州市／西湖区',
      address: '幸福村幸福街66号',
      storeStatus: '正常',
      storeOperation: '查看 修改'
    },
    {
      storeNumber: '4',
      storeName: '麦麦（幸福店）',
      storeContact: '麦麦',
      contactTel: '188888888888',
      region: '浙江省／杭州市／西湖区',
      address: '幸福村幸福街66号',
      storeStatus: '正常',
      storeOperation: '查看 修改'
    }
  ];

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  createStoreClick(type) {
    console.log(type);
    this.router.navigate(['/home/store/store-manage/edit-store']);
  }

}
