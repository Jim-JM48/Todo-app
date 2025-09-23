import { Injectable } from '@angular/core';
import { IQuest } from '../interfaces/quest.interface';

@Injectable({
  providedIn: 'root'
})
export class LocalStoreServ {
  addToLocal(todo : IQuest[]) {
    localStorage.setItem('todo' ,JSON.stringify(todo));
  }

  getFromLocal() : IQuest[] | null {
    let value = localStorage.getItem('todo');
    return value ? JSON.parse(value) : null;
  }
}
