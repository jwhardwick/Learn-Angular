import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-details',
  templateUrl: './display-details.component.html',
  styles: [`
    .threshold {
      color: white;
    }
  `]
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

  getColor(i) {
    return i >= 5 ? 'blue' : 'white';
  }

  constructor() { }

  ngOnInit() {
  }



}
