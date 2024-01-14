import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {SystemComponent} from "./system.component";
import {SystemRoutingModule} from "./system-routing.module";
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";

@NgModule({
  imports: [
    CommonModule,
    SystemRoutingModule,
    MatToolbarModule,
    MatIconModule
  ],
  declarations: [
    SystemComponent
  ]
})

export class SystemModule {

}
