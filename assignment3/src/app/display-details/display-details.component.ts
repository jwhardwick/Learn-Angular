import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-details',
  templateUrl: './display-details.component.html',
  styleUrls: ['./display-details.component.css']
})
export class DisplayDetailsComponent implements OnInit {

  displayDetails = false;
  clickCount = 0;
  logs = [];

  toggleDetails() {
    this.displayDetails = !this.displayDetails;
    this.logClick();
  }

  logClick() {
    this.clickCount++;
    this.logs.push(this.clickCount);
  }

  constructor() { }

  ngOnInit() {
  }



}
