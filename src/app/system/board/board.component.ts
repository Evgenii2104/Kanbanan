import {Component, Input} from "@angular/core";

@Component({
  selector: 'kb-board',
  templateUrl: 'board.component.html',
  styleUrls: ['board.component.scss']
})

export class BoardComponent {

  @Input() columnTitle: { title: string }

}


