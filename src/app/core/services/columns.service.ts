import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {ColumnInterface} from "../interfaces/column.interface";

@Injectable({providedIn: 'root'})
export class ColumnsService{
  constructor(private http: HttpClient) {
  }

  getAll(): Observable<ColumnInterface[]> {
    const url = (environment.apiUrl + '/columns');
    return this.http.get<ColumnInterface[]>(url)
  }
}

