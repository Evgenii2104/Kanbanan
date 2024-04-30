import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit} from "@angular/core";
import {TaskInterface} from "../../../core/interfaces/task.interface";
import {ColumnInterface} from "../../../core/interfaces/column.interface";
import {MatDialog} from "@angular/material/dialog";
import {DialogOverviewComponent} from "../dialog-overview/dialog.overview.component";

@Component({
  selector: 'kb-board-column',
  templateUrl: 'board.column.component.html',
  styleUrls: ['board.column.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class BoardColumnComponent{
  @Input() column: ColumnInterface;
  @Input() tasks: TaskInterface[];

  constructor(public dialog: MatDialog,
              private ref: ChangeDetectorRef) {
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogOverviewComponent, { data: this.column });

    dialogRef.afterClosed()
      .subscribe((task: TaskInterface) => {
        this.ref.detectChanges()
        //this.tasks.push(task);
        //this.changeList()
        // setTimeout(() => {
        //   this.changeList()
        // this.ref.markForCheck()
        // }, 2000)
        console.log('The dialog was closed', task);
      });
  }

  // private changeList() {
  //   this.ref.detectChanges()
  // }

}
