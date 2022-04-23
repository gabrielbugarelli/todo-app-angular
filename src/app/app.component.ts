import { Component } from '@angular/core';
import { Todo } from 'src/models/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public todos: Todo[] = [];
  public title: string = "Lista de Tarefas";

  constructor() {
    this.todos.push(new Todo(1, "Passear com o Perseu", false));
    this.todos.push(new Todo(2, "Estudar uma hora de Angular 2 com Typescript", false));
    this.todos.push(new Todo(3, "Concluir o primeiro módulo do curso de Angular", false));
  }
}
