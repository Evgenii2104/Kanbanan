import {Component} from "@angular/core";
import {ColumnInterface} from "../core/interfaces/column.interface";


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

