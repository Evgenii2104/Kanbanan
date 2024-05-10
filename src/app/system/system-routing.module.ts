import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {SystemComponent} from "./system.component";
import {BoardComponent} from "./board/board.component";

const routes: Routes = [
  {path: 'system', component: SystemComponent, children:[
      {path: '', redirectTo: 'board', pathMatch: 'full'},
      {path: 'board', component: BoardComponent}
    ]}
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class SystemRoutingModule {

}
