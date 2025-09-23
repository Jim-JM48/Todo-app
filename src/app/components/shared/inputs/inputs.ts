import { Component, input } from '@angular/core';
import { FormControl ,ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-inputs',
  imports: [ReactiveFormsModule],
  templateUrl: './inputs.html',
  styleUrl: './inputs.css'
})
export class Inputs {
  control = input.required<FormControl>();
  type = input.required<string>();
  id = input.required<string>()
}
