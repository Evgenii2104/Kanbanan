import {Component, Input, OnDestroy, OnInit} from "@angular/core";
import {ColumnInterface} from "../../core/interfaces/column.interface";
import {ColumnsService} from "../../core/services/columns.service";
import {Observable, Subscription} from "rxjs";


@Component({
  selector: 'kb-board',
  templateUrl: 'board.component.html',
  styleUrls: ['board.component.scss']
})

export class BoardComponent implements OnInit, OnDestroy{

   columns: ColumnInterface[] = []
  sub: Subscription

  constructor(private columnsService: ColumnsService) {
  }

  ngOnInit(): void {

    this.columnsService.getAll().subscribe((response: ColumnInterface) => {
      this.columns.push(response)
      console.log(response)
    })
  }

  ngOnDestroy() {
    this.sub.unsubscribe()
  }

}


