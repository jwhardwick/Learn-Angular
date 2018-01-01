import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-username-input',
  templateUrl: './username-input.component.html',
  styleUrls: ['./username-input.component.css']
})
export class UsernameInputComponent implements OnInit {

  username = '';

  constructor() { }

  ngOnInit() {
  }

  isUsernameEmpty() {
    return this.username === '';
  }

  resetUsername() {
    this.username = '';
  }

}
