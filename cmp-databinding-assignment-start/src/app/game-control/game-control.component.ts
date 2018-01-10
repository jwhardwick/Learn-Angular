import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  gameStarted: Boolean = true;
  intervalCounter = 0;
  interval = 1000;
  intervalRef;

  @Output() intervalReached = new EventEmitter<{message: string, value: number}>();

  onStartGame() {
    this.gameStarted = false;
    // this.intervalRef = setInterval(() => {
    //   console.log('Emitting Event from GameControl');
    //   this.intervalReached.emit({
    //     message: 'Event: intervalReached',
    //     value: this.intervalCounter
    //   });
    //   this.intervalCounter++;
    // }, this.interval);

    this.intervalRef = setInterval( () => this.playGame(), this.interval);
  }

  onStopGame() {
    this.gameStarted = false;
    clearInterval(this.intervalRef);
  }

  playGame() {
    this.intervalReached.emit({
      message: 'Event: intervalReached',
      value: this.intervalCounter
    });
    this.intervalCounter++;
  }


  constructor() { }

  ngOnInit() {
  }

}
