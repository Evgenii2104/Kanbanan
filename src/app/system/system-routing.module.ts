import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {SystemComponent} from "./system.component";

const routes: Routes = [
  {path: 'system/board', component: SystemComponent}
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class SystemRoutingModule {

}
