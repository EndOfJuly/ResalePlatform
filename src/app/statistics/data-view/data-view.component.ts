import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-view',
  templateUrl: './data-view.component.html',
  styleUrls: ['./data-view.component.scss']
})
export class DataViewComponent implements OnInit {

  chartOption: any;

  data = [
    ['发布日期', '数量'],
    ['2018-03-25', 100],
    ['2018-04-04', 200],
    ['2018-04-09', 550],
    ['2018-04-14', 330],
    ['2018-04-17', 990],
    ['2018-04-18', 330],
    ['2018-04-19', 999],
    ['2018-04-20', 363],
    ['2018-04-21', 900],
    ['2018-04-22', 383],
    ['2018-04-23', 999],
    ['2018-05-01', 533],
    ['2018-05-10', 620],
    ['2018-05-14', 340],
    ['2018-05-17', 800]
  ];

  constructor() { }

  ngOnInit() {
    this.chartOption = {
      color: ['#59a1f8', '#78c87d', '#f6d464', '#445285', '#8e67de', '#e36f7e', '#70c9ca', '#d396c6', '#b09e6c', '#4f58d5', '#96a36f'],
      legend: {},
      tooltip: {},
      dataset: {
        source: this.data
      },
      xAxis: { type: 'category' },
      yAxis: {},
      series: [
        { type: 'bar' }
      ]
    };
  }

}
