import {NgModule} from "@angular/core";
import {BoardComponent} from "./board.component";
import {BoardRoutingModule} from "./board-routing.module";
import {CommonModule} from "@angular/common";
import {BoardColumnComponent} from "./board-column/board.column.component";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {BoardTaskComponent} from "./board-task/board.task.component";
import {SystemModule} from "../system.module";
import {LoaderComponent} from "../../core/loader/loader.component";

@NgModule({
  imports: [
    CommonModule,
    BoardRoutingModule,
    MatCardModule,
    MatButtonModule
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
