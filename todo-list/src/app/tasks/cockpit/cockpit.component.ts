import { ToDo } from './../todo.model';
import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output() taskWasAdded = new EventEmitter<ToDo>();

  @ViewChild('taskInput') taskInput: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  addTaskInput() {
    const taskName = this.taskInput.nativeElement.value;
    const dateAdded = new Date();

    if (taskName) {
      const newTask = new ToDo(taskName, dateAdded, null, false);
      this.taskWasAdded.emit(newTask);
      this.clearTaskInput();
    }
  }

  clearTaskInput() {
    this.taskInput.nativeElement.value = '';
  }

}
