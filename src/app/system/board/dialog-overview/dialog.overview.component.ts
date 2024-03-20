import {Component, Inject, OnInit} from "@angular/core";
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose, MatDialogContent, MatDialogModule,
  MatDialogRef,
  MatDialogTitle
} from "@angular/material/dialog";
import { ColumnInterface } from '../../../core/interfaces/column.interface';
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'kb-dialog',
  templateUrl: 'dialog.overview.component.html',
  styleUrls: ['./dialog.overview.component.scss'],
  standalone: true,
  imports: [
    MatDialogModule,
    //MatFormFieldModule,
    //MatInputModule,
    //FormsModule,
    MatButtonModule
  ],
})
export class DialogOverviewComponent{
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewComponent>,
    @Inject(MAT_DIALOG_DATA) public column: ColumnInterface,
  ) {}

  onSaveClick(): void {
    this.dialogRef.close('data to save');
  }

  onCancelClick(): void {
    this.dialogRef.close('ger');
  }
}

