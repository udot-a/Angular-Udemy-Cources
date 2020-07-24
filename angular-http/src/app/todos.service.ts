import { Injectable } from '@angular/core';
import {HttpClient, HttpEventType, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError, delay, map, tap} from "rxjs/operators";

export interface Todo {
  completed: boolean,
  title: string,
  id?: string
}

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  url = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private http: HttpClient) { }

  addTodo = (todo: Todo): Observable<Todo> => this.http.post<Todo>(
      this.url,
      todo,
      {
        headers: new HttpHeaders({
          'MyCustomHeader': Math.random().toString()
        })
      });

  fetchTodos = (): Observable<Todo[]> => {
    const params = new HttpParams().set('_limit', '5');
    return this.http.get<Todo[]>(
        this.url,
        {
            params,
            observe: "response"
        })
        .pipe(
            map(response => {
                return response.body
            }),
            delay(1500),
            catchError((error) => {
              console.log(error.message);
              return throwError(error);
            })
        );
  }

  removeTodo = (id: string): Observable<any> => this.http.delete<void>(
      `${this.url}/${id}`,
      {observe: "events"}
  )
      .pipe(
          tap(event => {
              if (event.type === HttpEventType.Sent) {
                  console.log('SENT ', event);
              }

              if (event.type === HttpEventType.Response) {
                  console.log('Response ', event);
              }
          })
      );

  completeTodo = (id: string): Observable<Todo> => this.http.put<Todo>(`${this.url}/${id}`, {
    completed: true
  });

}

