import {NgModule} from "@angular/core";
import {BoardComponent} from "./board.component";
import {BoardRoutingModule} from "./board-routing.module";
import {CommonModule} from "@angular/common";
import {BoardColumnComponent} from "./board-column/board.column.component";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {BoardTaskComponent} from "./board-task/board.task.component";
import {LoaderComponent} from "../../core/loader/loader.component";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import { MatDialogModule } from '@angular/material/dialog';
import { AddTaskDialogComponents } from './add-task-dialog.components/add-task-dialog.components';
import {TaskComponent} from "./board-task/task.component/task.component";



@NgModule({
  imports: [
    CommonModule,
    BoardRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule
  ],
  declarations: [
    BoardComponent,
    BoardColumnComponent,
    BoardTaskComponent,
    LoaderComponent,
    TaskComponent
    //AddTaskDialogComponents,
  ],
  exports: [
    BoardComponent,
    BoardColumnComponent,
    LoaderComponent,
    TaskComponent
  ],
  providers: []
})

export class BoardModule {}
