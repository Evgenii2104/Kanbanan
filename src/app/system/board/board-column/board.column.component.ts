import {Component, Input} from "@angular/core";

@Component({
  selector: 'kb-board-column',
  templateUrl: 'board.column.component.html',
  styleUrls: ['board.column.component.scss']
})

export class BoardColumnComponent {
  @Input() column: { title: string }

}
