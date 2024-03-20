import {Component, Input} from "@angular/core";
import {TaskInterface} from "../../../core/interfaces/task.interface";
import {ColumnInterface} from "../../../core/interfaces/column.interface";
import {MatDialog} from "@angular/material/dialog";
import {DialogOverviewComponent} from "../dialog-overview/dialog.overview.component";

@Component({
  selector: 'kb-board-column',
  templateUrl: 'board.column.component.html',
  styleUrls: ['board.column.component.scss'],
})

export class BoardColumnComponent {
  @Input() column: ColumnInterface;
  @Input() tasks: TaskInterface[];

  constructor(public dialog: MatDialog) {
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogOverviewComponent, { data: this.column });

    dialogRef.afterClosed()
      .subscribe(result => {
        console.log('The dialog was closed', result);
      });
  }

}
