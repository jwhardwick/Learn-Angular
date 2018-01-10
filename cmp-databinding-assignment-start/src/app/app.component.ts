import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  intervals: number[] = [];

  onIntervalReached(intervalData: {message: string, value: number}) {
    this.intervals.push(intervalData.value);
  }
}
