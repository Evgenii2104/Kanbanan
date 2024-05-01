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
import { DialogOverviewComponent } from './dialog-overview/dialog.overview.component';



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
    //DialogOverviewComponent,
  ],
  exports: [
    BoardComponent,
    BoardColumnComponent,
    LoaderComponent
  ],
  providers: []
})

export class BoardModule {}
