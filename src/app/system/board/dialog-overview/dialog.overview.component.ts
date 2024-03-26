import {Component, Inject} from "@angular/core";
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef
} from "@angular/material/dialog";
import { ColumnInterface } from '../../../core/interfaces/column.interface';
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule, NgForm, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'kb-dialog',
  templateUrl: 'dialog.overview.component.html',
  styleUrls: ['./dialog.overview.component.scss'],
  standalone: true,
  imports: [
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule
  ],
})
export class DialogOverviewComponent{


  constructor(
    public dialogRef: MatDialogRef<DialogOverviewComponent>,
    @Inject(MAT_DIALOG_DATA) public column: ColumnInterface,
  ) {}

  onSaveClick(): void {
    this.dialogRef.close('data to save');
    // @ts-ignore
    this.submitForm()
  }

  onCancelClick(): void {
    this.dialogRef.close('ger');
  }

  submitForm(form: NgForm){
    console.log('submitted', form)
  }
}

