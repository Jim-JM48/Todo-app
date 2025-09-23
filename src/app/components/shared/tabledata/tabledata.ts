import { SlicePipe } from '@angular/common';
import { Component, inject, input, output } from '@angular/core';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tabledata',
  imports: [FontAwesomeModule ,SlicePipe],
  templateUrl: './tabledata.html',
  styleUrl: './tabledata.css'
})
export class Tabledata {
  iconsLibrary = inject(FaIconLibrary);
  id = input<number>(0);
  name = input<string>('');
  status = input<string>('');

  removeBtn = output();
  editBtn = output();

  
  constructor() {
    this.iconsLibrary.addIcons(faPen ,faTrash);
  }

  
}
