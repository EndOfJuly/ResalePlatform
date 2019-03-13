import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transaction-detail',
  templateUrl: './transaction-detail.component.html',
  styleUrls: ['./transaction-detail.component.scss']
})
export class TransactionDetailComponent implements OnInit {
  tmpData = [
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

  constructor() { }

  ngOnInit() {
  }

}
