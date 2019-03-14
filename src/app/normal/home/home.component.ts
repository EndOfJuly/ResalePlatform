import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  content = 'data-view';

  constructor() { }

  ngOnInit() {
  }

  itemClick(content) {
    console.log(content);
    this.content = content;

  }
}
