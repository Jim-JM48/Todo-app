import { Component, inject, signal } from '@angular/core';
import { Tabledata } from "../../shared/tabledata/tabledata";
import { TodoServ } from '../../../services/todoserv';
import { Message } from "../../shared/message/message";
import { IQuest } from '../../../interfaces/quest.interface';

@Component({
  selector: 'app-quest',
  imports: [Tabledata, Message],
  templateUrl: './quest.html',
  styleUrl: './quest.css'
})
export class Quest {
  showMessage = signal<string>('none');
  
  todoserv = inject(TodoServ);
  getQuest = signal<IQuest>({});
  
  quests() {
    return this.todoserv.showQuests();
  }

  editItem(id : number ,value : string) {
    this.todoserv.editQuest(id ,value);
    this.showMessage.set('none')
  }
  
  removeItem(id:number) {
    this.todoserv.removeQuest(id);
  }
}
