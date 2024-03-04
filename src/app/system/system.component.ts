import {Component, OnInit} from "@angular/core";
import {ColumnInterface} from "../core/interfaces/column.interface";
import {ColumnsService} from "../core/services/columns.service";


@Component({
  selector: 'kb-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.scss']
})

export class SystemComponent {

   columns: ColumnInterface[] = [
    {title: 'aaaaa'},
    {title: 'ssssss'},
    {title: 'ddddd'},
    {title: 'ooooo'}
  ]

}

