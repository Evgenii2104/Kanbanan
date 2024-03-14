import {Component, OnDestroy, OnInit} from "@angular/core";
import {ColumnInterface} from "../../core/interfaces/column.interface";
import {ColumnsService} from "../../core/services/columns.service";
import {delay, forkJoin, Subscription} from "rxjs";
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
   sortTasks: {[status: string]:TaskInterface[]};
   isLoaded = false

  constructor(private columnsService: ColumnsService, private tasksService: TasksService) {
  }

  ngOnInit() {
       this.sub1 = forkJoin([this.columnsService.getAll(), this.tasksService.getAll()])
         .pipe(delay(3000))
         .subscribe({
           next:([response, response2]) => {
             this.columns = response;
             this.tasks = response2;
             this.isLoaded = true
             this.combination()
           },
           error: err => {
             console.error("Error", err)
           }
         });
  }

  combination() {
     this.sortTasks = this.tasks.reduce((acc: {[status: string]:TaskInterface[]}, task: TaskInterface) => {
       const column = this.columns.find(col => col.status === task.status);
       if (column) {
         const key = column.status;
         acc[key] = acc[key] || [];
         acc[key].push(task);
       }
       return acc;
     }, {} as {[status: string]:TaskInterface[]});
    console.log(this.sortTasks)
     return this.sortTasks
  }


  ngOnDestroy() {
    this.sub1.unsubscribe()
  }

}


