import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {TaskInterface} from "../interfaces/task.interface";
import {environment} from "../../../environments/environment";

@Injectable({providedIn: 'root'})
export class TasksService{
  constructor(private http: HttpClient) {
  }

  getAll(): Observable<TaskInterface[]>{
    const url = environment.apiUrl + '/tasks';
    return this.http.get<TaskInterface[]>(url)
  }
}
