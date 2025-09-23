import { Component, signal } from '@angular/core';
import { Main } from "./components/core/main/main";
import { Navbar } from "./components/core/navbar/navbar";
;

@Component({
  selector: 'app-root',
  imports: [Main, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('todo-app');
}
