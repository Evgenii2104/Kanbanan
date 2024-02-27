import {Component, Input} from "@angular/core";
import {ColumnInterface} from "../../core/interfaces/column.interface";


@Component({
  selector: 'kb-board',
  templateUrl: 'board.component.html',
  styleUrls: ['board.component.scss']
})

export class BoardComponent {

  @Input() columns: ColumnInterface[]

  constructor() {}
}


