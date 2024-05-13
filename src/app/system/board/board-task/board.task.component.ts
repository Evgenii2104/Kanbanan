import {Component, Input} from "@angular/core";
import {TaskInterface} from "../../../core/interfaces/task.interface";
import {CdkDrag, CdkDragDrop, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";


@Component({
  selector: 'kb-board-task',
  templateUrl: 'board.task.component.html',
  styleUrls: ['board.task.component.scss'],
  //standalone: true
})


export class BoardTaskComponent {
  @Input() task: TaskInterface
  constructor() {
  }

  drop(event: CdkDragDrop<any>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }


}
