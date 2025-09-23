import { Component ,inject, signal } from '@angular/core';
import { ReactiveFormsModule ,FormBuilder ,Validators } from "@angular/forms"
import { Inputs } from '../../shared/inputs/inputs';
import { Match } from './match.validator';
import { RouterLink } from "@angular/router";
import { AuthServ } from '../../../services/authserv';
import { StoreServ } from '../../../services/storeserv';

@Component({
  selector: 'app-signup',
  imports: [ReactiveFormsModule, Inputs, RouterLink],
  templateUrl: './signup.html',
  styleUrl: './signup.css'
})
export class Signup {
  #uid !: string ;

  fb = inject(FormBuilder);
  authserv = inject(AuthServ);
  storeserv = inject(StoreServ);

  isSign = signal<boolean>(false);

  form = this.fb.nonNullable.group({
    fName : ['' ,[Validators.required]],
    email : ['' ,[Validators.required ,Validators.email]],
    phone : ['+00 ' ,[Validators.required ]],
    password : ['' ,[Validators.required ,Validators.minLength(8)]],
    confirmPassword : ['' ,[Validators.required ,Validators.maxLength(8)]]
  },
    {validators : [Match('password' ,'confirmPassword')],}
  )

  async signUp() {
    try {
      this.#uid = await this.authserv.CreateUser(this.form.getRawValue());

      try {
        await this.storeserv.StoreData(this.form.getRawValue() ,this.#uid!);
      }catch(err) {
        console.log("Problem Sending Data");
      }
      
    }catch(err) {
      console.error("An Problem In Creating Account");
    }
  }
}
