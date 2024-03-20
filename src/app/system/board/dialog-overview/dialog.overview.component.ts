import {Component, Inject} from "@angular/core";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import { ColumnInterface } from '../../../core/interfaces/column.interface';

@Component({
  selector: 'kb-dialog',
  templateUrl: 'dialog.overview.component.html',
  styleUrls: ['./dialog.overview.component.scss']
})
export class DialogOverviewComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewComponent>,
    @Inject(MAT_DIALOG_DATA) public column: ColumnInterface,
  ) {}

  onSaveClick(): void {
    this.dialogRef.close('data to save');
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }
}

