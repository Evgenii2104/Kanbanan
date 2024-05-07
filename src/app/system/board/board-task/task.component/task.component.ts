import {Component, Input, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {TaskInterface} from "../../../../core/interfaces/task.interface";

@Component({
  selector: 'kb-task',
  templateUrl: 'task.component.html',
  styleUrls: ['task.component.scss']
})

export class TaskComponent implements OnInit{

  id: number;
  title: string;
  description: string;
  status: string
  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.id = +this.route.snapshot.params['id'];
    this.title = this.route.snapshot.queryParams['title'];
    this.description = this.route.snapshot.queryParams['description'];
    this.status = this.route.snapshot.queryParams['status']
  }
}
