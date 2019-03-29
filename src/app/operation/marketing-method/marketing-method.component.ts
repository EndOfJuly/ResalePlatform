import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-marketing-method',
  templateUrl: './marketing-method.component.html',
  styleUrls: ['./marketing-method.component.scss']
})
export class MarketingMethodComponent implements OnInit {

  tmpData = [
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

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }


  editMarketingMethod(type) {
    this.router.navigate(['/home/operation/marketing-method/edit-marketing-method']);
  }

}
