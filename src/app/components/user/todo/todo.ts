import { Component, inject, OnInit, signal } from '@angular/core';
import { TodoServ } from '../../../services/todoserv';
import { Message } from "../../shared/message/message";

@Component({
  selector: 'app-todo',
  imports: [Message],
  templateUrl: './todo.html',
  styleUrl: './todo.css'
})
export class Todo {
  todoserv = inject(TodoServ);

  showMessage = signal<string>('none');
  #id : number = 0;


  addTask(task : string) {
    this.#id = Math.ceil(Math.random() * 100);
    this.todoserv.addQuest(
    {
      id : this.#id,
      name : task,
      status : "Todo"
    });
  }
}
