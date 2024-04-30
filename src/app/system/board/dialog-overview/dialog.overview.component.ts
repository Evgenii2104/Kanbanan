import {ChangeDetectorRef, Component, Inject} from "@angular/core";
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
  FormGroup,
  FormsModule,
  NgForm,
  ReactiveFormsModule
} from "@angular/forms";
import {TasksService} from "../../../core/services/tasks.service";

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
export class DialogOverviewComponent {
  form: NgForm

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewComponent>,
    @Inject(MAT_DIALOG_DATA) public column: ColumnInterface,
    private taskService: TasksService
  ) {
  }

  addClick(form: NgForm): void {
    this.taskService.addTask(form.value.textInput, form.value.textArea, this.column.status)
      .subscribe((res) => {
        //console.log(res)
      })
    this.dialogRef.close('data to save');
  }

  onCancelClick(): void {
    this.dialogRef.close('ger');
  }

  submitForm(form: NgForm) {

    //console.log('submitted', form.value)
  }
}
