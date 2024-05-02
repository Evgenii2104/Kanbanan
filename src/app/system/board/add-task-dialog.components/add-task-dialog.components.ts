import {Component, Inject, OnInit} from "@angular/core";
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
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule, Validators
} from "@angular/forms";

@Component({
  selector: 'kb-dialog',
  templateUrl: 'add-task-dialog.components.html',
  styleUrls: ['./add-task-dialog.components.scss'],
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
export class AddTaskDialogComponents implements OnInit{
  form: FormGroup

  constructor(
    public dialogRef: MatDialogRef<AddTaskDialogComponents>,
    @Inject(MAT_DIALOG_DATA) public columns: ColumnInterface[]
  ) {
  }

  ngOnInit() {
    this.form = new FormGroup<any>({
      textInput: new FormControl('', [Validators.required, Validators.maxLength(40)]),
      textArea: new FormControl('', [Validators.required, Validators.maxLength(400)]),
      colStatus: new FormControl('', Validators.required)
    })
  }

  addClick(): void {
    this.dialogRef.close(this.form);
  }

  onCancelClick(): void {
    this.dialogRef.close('empty');
  }

  submitForm() {

    //console.log('submitted', this.form)
  }
}
