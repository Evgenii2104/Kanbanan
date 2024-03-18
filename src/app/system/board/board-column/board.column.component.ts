import {Component, Input} from "@angular/core";
import {TaskInterface} from "../../../core/interfaces/task.interface";
import {ColumnInterface} from "../../../core/interfaces/column.interface";
import {MatDialog} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {FormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
//import {DialogOverviewComponent} from "../dialog-overview/dialog.overview.component";

@Component({
  selector: 'kb-board-column',
  templateUrl: 'board.column.component.html',
  styleUrls: ['board.column.component.scss'],

})

export class BoardColumnComponent {
  @Input() column: ColumnInterface
  @Input() tasks: TaskInterface[]
  // animal: string;
  // name: string;
// constructor(public dialog: MatDialog) {
// }
  openDialog(){
    // const dialogRef = this.dialog.open(DialogOverviewComponent, {
    //   data: {name: this.name, animal: this.animal},
    // });
    //
    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    //   this.animal = result;
    // });
  }

}
