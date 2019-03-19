import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-staff-account',
  templateUrl: './staff-account.component.html',
  styleUrls: ['./staff-account.component.scss']
})
export class StaffAccountComponent implements OnInit {

  tmpData = [
    {
      staffNumber: '0001',
      staffName: '麦麦',
      staffTel: '188888888888',
      store: '麦麦（幸福店）',
      loginCount: '10',
      lastLoginTime: '2018-12-25 10:00',
      lastLoginIP: '119.129.229.111',
      what: '---'
    },
    {
      staffNumber: '0002',
      staffName: '麦麦',
      staffTel: '188888888888',
      store: '麦麦（幸福店）',
      loginCount: '10',
      lastLoginTime: '2018-12-25 10:00',
      lastLoginIP: '119.129.229.111',
      what: '---'
    },
    {
      staffNumber: '0003',
      staffName: '麦麦',
      staffTel: '188888888888',
      store: '麦麦（幸福店）',
      loginCount: '10',
      lastLoginTime: '2018-12-25 10:00',
      lastLoginIP: '119.129.229.111',
      what: '---'
    },
    {
      staffNumber: '0004',
      staffName: '麦麦',
      staffTel: '188888888888',
      store: '麦麦（幸福店）',
      loginCount: '10',
      lastLoginTime: '2018-12-25 10:00',
      lastLoginIP: '119.129.229.111',
      what: '---'
    },
    {
      staffNumber: '0005',
      staffName: '麦麦',
      staffTel: '188888888888',
      store: '麦麦（幸福店）',
      loginCount: '10',
      lastLoginTime: '2018-12-25 10:00',
      lastLoginIP: '119.129.229.111',
      what: '---'
    }
  ];


  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }


  editStore(type) {
    this.router.navigate(['/home/store/staff-account/edit-staff']);
  }

}
