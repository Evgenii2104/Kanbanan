import {Component, Input} from "@angular/core";


@Component({
  selector: 'kb-board-task',
  templateUrl: 'board.task.component.html',
  styleUrls: ['board.task.component.scss']
})

export class BoardTaskComponent {
  @Input() task: { title: string; description: string; status: string }
  constructor() {
  }


}
