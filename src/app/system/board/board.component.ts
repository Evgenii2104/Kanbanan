import {ChangeDetectorRef, Component, OnDestroy, OnInit} from "@angular/core";
import {ColumnInterface} from "../../core/interfaces/column.interface";
import {ColumnsService} from "../../core/services/columns.service";
import {delay, forkJoin, Subscription, switchMap} from "rxjs";
import {TasksService} from "../../core/services/tasks.service";
import {TaskInterface} from "../../core/interfaces/task.interface";
import {MatDialog} from "@angular/material/dialog";
import {AddTaskDialogComponents} from "./add-task-dialog.components/add-task-dialog.components";


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
   sortTasks: {[status: string]:TaskInterface[]};
   isLoaded = false

  constructor(
    private columnsService: ColumnsService,
    private tasksService: TasksService,
    public dialog: MatDialog,
  ) {
  }

  ngOnInit() {
       this.sub1 = forkJoin([this.columnsService.getAll(), this.tasksService.getAll()])
         .pipe(delay(1000))
         .subscribe({
           next:([response, response2]) => {
             this.columns = response;
             this.tasks = response2;
             this.isLoaded = true
             this.sortTasks = this.combination(this.tasks, this.columns);
           },
           error: err => {
             console.error("Error", err)
           }
         });
  }

  combination(tasks: TaskInterface[], columns: ColumnInterface[]): {[status: string]:TaskInterface[]} {
    return tasks.reduce((acc: {[status: string]:TaskInterface[]}, task: TaskInterface) => {
       const column = columns.find(col => col.status === task.status);
       if (column) {
         const key = column.status;
         acc[key] = acc[key] || [];
         acc[key].push(task);
       }
       return acc;
     }, {} as {[status: string]:TaskInterface[]});
  }

  openDialog() {
    const dialogRef = this.dialog.open(AddTaskDialogComponents, { data: this.columns });

    console.log(this.sub2)
    this.sub2 = dialogRef.afterClosed().pipe(
      switchMap((formValue: any) => {
        return this.tasksService.addTask(formValue.value.textInput, formValue.value.textArea, formValue.value.colStatus)
      }),
      switchMap(() => {
        return this.tasksService.getAll()
      })
    ).subscribe( {
      next: data => {
        this.tasks = data;
        this.sortTasks = this.combination(this.tasks, this.columns);
        },
      error: err => {console.error("Error", err)}
      })
    console.log(this.sub2)
  }

  ngOnDestroy() {
    this.sub1.unsubscribe();
    if(this.sub2 !== undefined) {
      this.sub2.unsubscribe()
    }
  }

}


