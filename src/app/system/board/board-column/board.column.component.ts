import {Component, Input} from "@angular/core";

@Component({
  selector: 'kb-board-column',
  templateUrl: 'board.column.component.html',
  styleUrls: ['board.column.component.scss']
})

export class BoardColumnComponent {
  @Input() column: { title: string }
  tasks: Array<{  title: string, description: string, status: string }> = [
    {title: 'aaaaa', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elitendis repellendus.', status: 'add'},
    {title: 'ssssss', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elitendis repellendus.t111', status: 'delete'},
    {title: 'ddddd', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elitendis repellendus.222', status: 'push' },
    {title: 'ooooo', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elitendis repellendus.333', status: 'pull'}
  ]


}
