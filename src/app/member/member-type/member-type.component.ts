import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-member-type',
  templateUrl: './member-type.component.html',
  styleUrls: ['./member-type.component.scss']
})
export class MemberTypeComponent implements OnInit {
  tmpData = [
    {
      memberTypeNumber: '1',
      memberLevel: '注册会员',
      needsScore: '0',
      memberPrice: '支持',
      multipleScore: '1.0',
      operation: '修改 删除'
    },
    {
      memberTypeNumber: '2',
      memberLevel: '白银会员',
      needsScore: '500',
      memberPrice: '支持',
      multipleScore: '1.2',
      operation: '修改 删除'
    },
    {
      memberTypeNumber: '3',
      memberLevel: '黄金会员',
      needsScore: '2000',
      memberPrice: '支持',
      multipleScore: '1.5',
      operation: '修改 删除'
    },
    {
      memberTypeNumber: '4',
      memberLevel: '钻石会员',
      needsScore: '10000',
      memberPrice: '支持',
      multipleScore: '2.0',
      operation: '修改 删除'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
