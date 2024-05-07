import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {TaskInterface} from "../interfaces/task.interface";
import {environment} from "../../../environments/environment";
import {map} from "rxjs"

@Injectable({providedIn: 'root'})
export class TasksService{
  constructor(private http: HttpClient) {
  }

  getAll(): Observable<TaskInterface[]>{
    const url = environment.apiUrl + '/tasks';
    return this.http.get<TaskInterface[]>(url)
  }

  addTask(title: string, description: string, status: string): Observable<any> {
    const  params =  {
        title: title,
        description: description,
        status: status,
        id: Date.now()
      }
    const url = environment.apiUrl + '/tasks';
    return this.http.post<any>(url, params)
  }
}
