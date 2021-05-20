import { Component, OnInit } from '@angular/core';
import { faPlus, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Task } from '../../Task';
import { TASKS } from '../../mock-tasks';
import { toDo } from '../to-do-list/to-do-list.component';

@Component({
  selector: 'app-slice',
  templateUrl: './slice.component.html',
  styleUrls: ['./slice.component.css']
})
export class SliceComponent implements OnInit {

  faTrashAlt = faTrashAlt
  constructor() { }

  ngOnInit(): void {
  }

}
