import { NgStyle } from '@angular/common';
import { Component, input, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-message',
  imports: [FontAwesomeModule ,NgStyle ,FormsModule],
  templateUrl: './message.html',
  styleUrl: './message.css'
})
export class Message {
  isDisplayed = input<string>('');
  closeBtn = output<string>();

  allowInput = input<boolean>(false);
  confirmEdits = output<string>();

  taskName = input<string>('');
  currentValue = signal<string>("Todo");
  
  constructor(private iconsLibrary : FaIconLibrary) {
    this.iconsLibrary.addIcons(faXmark);
  }

  options = [
    { value: 'Todo', label: 'Todo' },
    { value: 'InProgress', label: 'In Progress' },
    { value: 'Complete', label: 'Complete' },
  ]

  
}
