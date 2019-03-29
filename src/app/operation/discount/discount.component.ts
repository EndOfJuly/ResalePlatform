import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-discount',
  templateUrl: './discount.component.html',
  styleUrls: ['./discount.component.scss']
})
export class DiscountComponent implements OnInit {

  tmpData = [
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

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }


  editDiscount(type) {
    this.router.navigate(['/home/operation/discount/edit-discount']);
  }


}
