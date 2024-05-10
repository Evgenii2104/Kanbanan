import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {TasksService} from "../../../../core/services/tasks.service";
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'kb-task',
  templateUrl: 'task.component.html',
  styleUrls: ['task.component.scss']
})

export class TaskComponent implements OnInit{

  id: number;
  task: any
  constructor(
    private route: ActivatedRoute,
    private tasksService: TasksService,) {
  }

  ngOnInit() {
    this.id = +this.route.snapshot.params['id'];
    this.tasksService.getTask(this.id)
      .pipe(untilDestroyed(this))
      .subscribe({
      next:(res) => {
        this.task = res;
        this.task = this.task[0]
      },
      error: err => {
        console.error("Error", err)
      }
      })
  }
}
