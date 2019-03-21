import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-summarizing',
  templateUrl: './summarizing.component.html',
  styleUrls: ['./summarizing.component.scss']
})
export class SummarizingComponent implements OnInit {

  tmpData = [
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

  searchCondition;

  constructor() { }

  ngOnInit() {
  }

}
