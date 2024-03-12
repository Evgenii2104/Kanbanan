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
   result: any[]

  constructor(private columnsService: ColumnsService, private tasksService: TasksService) {
  }

  ngOnInit() {
     this.sub1 = forkJoin([this.columnsService.getAll(), this.tasksService.getAll()])
       .subscribe({
         next:([response, response2]) => {
           //console.log(response, response2)
           this.columns = response;
           this.tasks = response2
         },
         error: err => {
           console.error("Error", err)
         }
       });
     this.combination()
  }

  combination() {
     this.result = this.tasks.reduce((acc, task) => {
       const column = this.columns.find(col => col.status === task.status);
       if (column) {
         const key = column.status.toLowerCase();
         // @ts-ignore
         acc[key] = acc[key] || [];
         // @ts-ignore
         acc[key].push(task);
       }
       return acc;
     }, [{}]);
    console.log(this.result)
     return this.result
  }


  ngOnDestroy() {
    this.sub1.unsubscribe()
  }

}


