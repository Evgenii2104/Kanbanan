import {RouterModule, Routes} from "@angular/router";
import {BoardComponent} from "./board.component";
import {NgModule} from "@angular/core";
import {TaskComponent} from "./board-task/task.component/task.component";

const routes: Routes = [
  {path: '', component: BoardComponent},
  {path: 'board/:id', component: TaskComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class BoardRoutingModule {}
