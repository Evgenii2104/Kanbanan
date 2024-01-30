import {Component, Input, OnInit} from "@angular/core";
import {SystemComponent} from "../system.component";

@Component({
  selector: 'kb-board',
  templateUrl: 'board.component.html',
  styleUrls: ['board.component.scss']
})

export class BoardComponent implements OnInit {
  //@Input() column: { title: string }
   //columns: any = []
  @Input() columns: { title: string }[]

  constructor(
    //private col: SystemComponent
  ) {
  }
  ngOnInit() {
    //this.col.columns.forEach((el: any) => this.columns.push(el))
  }
}


