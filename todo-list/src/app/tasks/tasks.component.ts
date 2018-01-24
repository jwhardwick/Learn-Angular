import { ToDo } from './todo.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: ToDo[] = [
    new ToDo('Completed Task 1', new Date(), null, true),
    new ToDo('Completed Task 2', new Date(), null, true),
    new ToDo('unCompleted Task 1', new Date(), null, false),
    new ToDo('unCompleted Task 2', new Date(), null, false)
  ];

  archivedTasks: ToDo[] = [new ToDo('Archived Task 1', new Date(), null, true)];
  selectedPage = 'current';

  onShowPage(pageToShow: string) {
    this.selectedPage = pageToShow;
  }

  incompleteTasks() {
    return this.tasks.filter(task => task.completed === false);
  }

  completeTasks() {
    const completedTasks = this.tasks.filter(task => task.completed === true);
    return completedTasks.sort( (a, b) =>
      new Date(a.dateCompleted).getTime() - new Date(b.dateCompleted).getTime()
    );
  }

  onTaskDelete(taskToDelete: ToDo) {
    const index = this.tasks.indexOf(taskToDelete);
    this.tasks.splice(index, 1);
  }

  onTaskArchive(taskToArchive: ToDo) {
    this.archivedTasks.push(taskToArchive);
    const index = this.tasks.indexOf(taskToArchive);
    this.tasks.splice(index, 1);
  }

  constructor() { }

  ngOnInit() {
  }

}
