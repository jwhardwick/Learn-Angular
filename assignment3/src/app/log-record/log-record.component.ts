import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-log-record',
  templateUrl: './log-record.component.html',
  styleUrls: ['./log-record.component.css']
})
export class LogRecordComponent implements OnInit {

  @Input() name: string;

  constructor() { }

  ngOnInit() {
  }

}
