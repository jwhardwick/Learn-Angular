import { ToDo } from './../todo.model';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input() taskItem: ToDo;
  @Output() taskWasDeleted = new EventEmitter<ToDo>();
  @Output() taskWasArchived = new EventEmitter<ToDo>();

  constructor() { }

  ngOnInit() {
  }

  deleteTask() {
    this.taskWasDeleted.emit(this.taskItem);
  }

  completeTask() {
    this.taskItem.completed = true;
    this.taskItem.dateCompleted = new Date();
  }

  archiveTask() {
    this.taskWasArchived.emit(this.taskItem);
  }

}
