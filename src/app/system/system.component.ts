import {Component} from "@angular/core";
import {ColumnInterface} from "../core/column.interface";

@Component({
  selector: 'kb-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.scss']
})

export class SystemComponent {
  columns: Array<{ title: string }> = [
    {title: 'aaaaa'},
    {title: 'ssssss'},
    {title: 'ddddd'},
    {title: 'ooooo'},
    {title: 'rrrrr'}
  ]
}

