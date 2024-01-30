import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {SystemComponent} from "./system.component";
import {SystemRoutingModule} from "./system-routing.module";
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import {BoardModule} from "./board/board.module";
import {FormsModule} from "@angular/forms";

@NgModule({
    imports: [
        CommonModule,
        SystemRoutingModule,
        MatToolbarModule,
        MatIconModule,
        BoardModule,
        FormsModule
    ],
  declarations: [
    SystemComponent
  ]
})

export class SystemModule {

}
