import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ITodo } from '../interfaces/todo.interface';
import { environment } from 'src/environments/environment';

@Injectable()
export class TodosService {
  private url = environment.apiUrl;
  constructor(private httpClient: HttpClient) {}

  getTodos(): Observable<ITodo[]> {
    return this.httpClient.get<ITodo[]>(`${this.url}/todos`);
  }
}
