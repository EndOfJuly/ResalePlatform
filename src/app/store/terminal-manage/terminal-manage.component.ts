import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-terminal-manage',
  templateUrl: './terminal-manage.component.html',
  styleUrls: ['./terminal-manage.component.scss']
})
export class TerminalManageComponent implements OnInit {

  tmpData = [
    {
      terminalNumber: '00001',
      storeName: '麦麦（幸福店）',
      cashier: 'SJWLZD',
      invitationCode: '9238eefywtwwjwwj',
      terminalStatus: '正常',
      recordDate: '2018-12-25 10:00',
      updateDate: '2018-12-26 10:00',
      operation: '修改 删除'
    },
    {
      terminalNumber: '00002',
      storeName: '麦麦（幸福店）',
      cashier: 'SJWLZD',
      invitationCode: '9238eefywtwwjwwj',
      terminalStatus: '正常',
      recordDate: '2018-12-25 10:00',
      updateDate: '2018-12-26 10:00',
      operation: '修改 删除'
    },
    {
      terminalNumber: '00003',
      storeName: '麦麦（幸福店）',
      cashier: 'SJWLZD',
      invitationCode: '9238eefywtwwjwwj',
      terminalStatus: '正常',
      recordDate: '2018-12-25 10:00',
      updateDate: '2018-12-26 10:00',
      operation: '修改 删除'
    },
    {
      terminalNumber: '00004',
      storeName: '麦麦（幸福店）',
      cashier: 'SJWLZD',
      invitationCode: '9238eefywtwwjwwj',
      terminalStatus: '正常',
      recordDate: '2018-12-25 10:00',
      updateDate: '2018-12-26 10:00',
      operation: '修改 删除'
    },
    {
      terminalNumber: '00005',
      storeName: '麦麦（幸福店）',
      cashier: 'SJWLZD',
      invitationCode: '9238eefywtwwjwwj',
      terminalStatus: '正常',
      recordDate: '2018-12-25 10:00',
      updateDate: '2018-12-26 10:00',
      operation: '修改 删除'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
