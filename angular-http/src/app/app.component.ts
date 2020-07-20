import {Component, OnInit} from '@angular/core';
import * as uuid from 'uuid';
import {Todo, TodosService} from "./todos.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  todos: Todo[] = [];
  todoTitle = '';
  loading = false;
  error = '';

  constructor(private todosService: TodosService) {}

  ngOnInit(): void {
    this.fetchTodos();
  }

  addTodo(event: KeyboardEvent) {
    if (!this.todoTitle.trim()) {
      return;
    }

    if (!event || event.key === 'Enter') {
      const newTodo: Todo = {
        title: this.todoTitle,
        completed: false,
        id: uuid.v4()
      };

      this.todosService.addTodo( newTodo)
          .subscribe(todo => {
            this.todos.push(newTodo);
            this.todoTitle = '';
          });
    }

  }

  fetchTodos() {
    this.loading = true;

    this.todosService.fetchTodos()
        .subscribe((response) => {
          this.todos = response;

          this.loading = false;
        }, (error => this.error = error.message));
  }

  removeTodo(id: string) {
    this.todosService.removeTodo(id)
        .subscribe(todo => console.log(todo));
    this.todos = this.todos.filter(item => item.id !== id);
  }

  completeTodo(id: string) {
    this.todosService.completeTodo(id)
        .subscribe(resp => {
          console.log(resp);
          this.todos.find(i => i.id === id).completed = true;
          // this.todos = this.todos.map(t => {
          //   if (t.id === id) {
          //     t.completed = !t.completed;
          //   }
          //
          //   return t;
          // });
        });
  }
}
