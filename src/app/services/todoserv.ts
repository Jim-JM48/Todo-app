import { inject, Injectable } from '@angular/core';
import { IQuest } from '../interfaces/quest.interface';
import { LocalStoreServ } from './localstoreserv';

@Injectable({
  providedIn: 'root'
})
export class TodoServ {

  localserv = inject(LocalStoreServ);
  #quest : IQuest[] = [];

  addQuest(quest : IQuest) {
    if(this.localserv.getFromLocal() && this.#quest.length === 0) {
      this.#quest.push(...this.localserv.getFromLocal()!);
    }
    this.#quest.push(quest);
    this.localserv.addToLocal(this.#quest);
  }

  showQuests() : IQuest[] {
    if(this.localserv.getFromLocal() && this.#quest.length === 0) {
      this.#quest.push(...this.localserv.getFromLocal()!);
    }
    return this.#quest;
  }

  editQuest(id:number ,value : string) {
    this.#quest.map((item) => {
      if(item.id === id) {
        item.status = value;
        this.localserv.addToLocal(this.#quest);
      }
      return;
    })
  }

  removeQuest(id:number) {
    const newQuests = this.#quest.filter((item) => {
      return item.id != id;
    });
    this.#quest = newQuests;
    this.localserv.addToLocal(this.#quest);
  }
}
