import { Component, OnInit } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
import { faPlus, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Task } from '../../Task';
import { TASKS } from '../../mock-tasks';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})


export class ToDoListComponent implements OnInit {
  task: string
  toDo: Task[] = TASKS
  faPlus = faPlus
  faTrashAlt = faTrashAlt
  today = new Date

  constructor() { }

  ngOnInit(): void {
  }

  onClick(task) {
    if (!this.toDo.includes(task)) { this.toDo.push(task); }

  }

  delTask(x) {
    this.toDo.splice(x, 1);
  }

}
