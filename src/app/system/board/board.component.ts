import {Component, OnDestroy, OnInit} from "@angular/core";
import {ColumnInterface} from "../../core/interfaces/column.interface";
import {ColumnsService} from "../../core/services/columns.service";
import {forkJoin, Subscription} from "rxjs";
import {TasksService} from "../../core/services/tasks.service";
import {TaskInterface} from "../../core/interfaces/task.interface";


@Component({
  selector: 'kb-board',
  templateUrl: 'board.component.html',
  styleUrls: ['board.component.scss']
})

export class BoardComponent implements OnInit, OnDestroy{

   columns: ColumnInterface[];
   tasks: TaskInterface[];
   sub1: Subscription;
   sub2: Subscription

  constructor(private columnsService: ColumnsService, private tasksService: TasksService) {
  }

  ngOnInit() {

    this.sub1 = this.columnsService.getAll().subscribe((response: ColumnInterface[]) => {
      this.columns = response
    })
    this.sub2 = this.tasksService.getAll().subscribe((response: TaskInterface[]) => {
      this.tasks = response
    })
    this.combination()
  }

  combination() {
     const observable = forkJoin([
       this.columns,
       this.tasks
     ])
    observable.subscribe({
      next: value => console.log(value),
      complete: () => console.log('end')
    })
    console.log(observable)
  }


  ngOnDestroy() {
    this.sub1.unsubscribe();
    this.sub2.unsubscribe()
  }

}


