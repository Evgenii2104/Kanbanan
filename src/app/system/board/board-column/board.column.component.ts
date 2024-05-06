import {Component, Input} from "@angular/core";
import {TaskInterface} from "../../../core/interfaces/task.interface";
import {ColumnInterface} from "../../../core/interfaces/column.interface";

@Component({
  selector: 'kb-board-column',
  templateUrl: 'board.column.component.html',
  styleUrls: ['board.column.component.scss']
})

export class BoardColumnComponent{
  @Input() column: ColumnInterface;
  @Input() tasks: TaskInterface[];

  constructor() {}
}
