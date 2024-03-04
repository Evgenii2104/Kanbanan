import {Component, Input, OnInit} from "@angular/core";
import {ColumnInterface} from "../../core/interfaces/column.interface";
import {ColumnsService} from "../../core/services/columns.service";


@Component({
  selector: 'kb-board',
  templateUrl: 'board.component.html',
  styleUrls: ['board.component.scss']
})

export class BoardComponent implements OnInit{

  @Input() columns: ColumnInterface[]

  constructor(private columnsService: ColumnsService) {
  }

  ngOnInit() {
    this.columnsService.getAll().subscribe((response: any) => {
      this.columns = response
    })
  }
}


