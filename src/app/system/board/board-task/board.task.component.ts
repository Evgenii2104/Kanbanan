import {Component, Input} from "@angular/core";
import {TaskInterface} from "../../../core/interfaces/task.interface";


@Component({
  selector: 'kb-board-task',
  templateUrl: 'board.task.component.html',
  styleUrls: ['board.task.component.scss']
})

export class BoardTaskComponent {
  @Input() task: TaskInterface
  constructor() {
  }


}
