import {NgModule} from "@angular/core";
import {BoardComponent} from "./board.component";
import {BoardRoutingModule} from "./board-routing.module";
import {CommonModule} from "@angular/common";
import {BoardColumnComponent} from "./board-column/board.column.component";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";

@NgModule({
  imports: [
    CommonModule,
    BoardRoutingModule,
    MatCardModule,
    MatButtonModule
  ],
  declarations: [
    BoardComponent,
    BoardColumnComponent
  ],
  exports: [
    BoardComponent,
    BoardColumnComponent
  ],
  providers: []
})

export class BoardModule {}
