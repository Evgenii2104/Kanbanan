import {Component, Inject} from "@angular/core";
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent, MatDialogModule,
  MatDialogRef,
  MatDialogTitle
} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";

export interface DialogData {
  animal: string;
  name: string;
}


// @Component({
//   selector: 'kb-dialog',
//   templateUrl: 'dialog.overview.component.html',
//   //standalone: true,
  // imports: [
  //   MatFormFieldModule,
  //   MatInputModule,
  //   FormsModule,
  //   MatButtonModule,
  //   MatDialogTitle,
  //   MatDialogContent,
  //   MatDialogActions,
  //   MatDialogClose,
  //   MatDialogModule,
  // ],
// })
// export class DialogOverviewComponent {
  // constructor(
  //   public dialogRef: MatDialogRef<DialogOverviewComponent>,
  //   @Inject(MAT_DIALOG_DATA) public data: DialogData,
  // ) {}
  //
  // onNoClick(): void {
  //   this.dialogRef.close();
  // }
//}

