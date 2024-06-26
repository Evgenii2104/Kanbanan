import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {TaskComponent} from "./board-task/task.component/task.component";

const routes: Routes = [
  {path: 'board/:id', component: TaskComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class BoardRoutingModule {}
