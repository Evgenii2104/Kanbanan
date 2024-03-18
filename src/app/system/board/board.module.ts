import {NgModule} from "@angular/core";
import {BoardComponent} from "./board.component";
import {BoardRoutingModule} from "./board-routing.module";
import {CommonModule} from "@angular/common";
import {BoardColumnComponent} from "./board-column/board.column.component";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {BoardTaskComponent} from "./board-task/board.task.component";
import {LoaderComponent} from "../../core/loader/loader.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";


@NgModule({
  imports: [
    CommonModule,
    BoardRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    //MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule
  ],
  declarations: [
    BoardComponent,
    BoardColumnComponent,
    BoardTaskComponent,
    LoaderComponent
  ],
  exports: [
    BoardComponent,
    BoardColumnComponent,
    LoaderComponent
  ],
  providers: []
})

export class BoardModule {}
