import {Component, Input} from "@angular/core";
import {TaskInterface} from "../../../core/interfaces/task.interface";
import {ColumnInterface} from "../../../core/interfaces/column.interface";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {DialogOverviewComponent} from "../dialog-overview/dialog.overview.component";
import {MatButtonModule} from "@angular/material/button";
import {FormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";

@Component({
  selector: 'kb-board-column',
  templateUrl: 'board.column.component.html',
  styleUrls: ['board.column.component.scss'],
  // standalone: true,
  // imports: [MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule]
})

export class BoardColumnComponent {
  @Input() column: ColumnInterface
  @Input() tasks: TaskInterface[]
  // animal: string;
  // name: string;
constructor(public dialog: MatDialog) {
}
  openDialog(){
    const dialogRef = this.dialog.open(DialogOverviewComponent

      //{data: {name: this.name, animal: this.animal},}
    );

    dialogRef.afterClosed().subscribe(result => {
      console.log(`The dialog was closed ${result}`);
      //this.animal = result;
    });
  }

}
