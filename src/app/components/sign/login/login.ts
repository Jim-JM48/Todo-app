import { Component, inject } from '@angular/core';
import { Inputs } from '../../shared/inputs/inputs';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from "@angular/router";
import { AuthServ } from '../../../services/authserv';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, Inputs, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  fb = inject(FormBuilder);
  authserv = inject(AuthServ)
  router = inject(Router)

  form = this.fb.nonNullable.group({
    email: ['' ,[Validators.required ,Validators.email]],
    password: ['' ,[Validators.required ,Validators.minLength(8)]]
  })

  async logIn() {
    await this.authserv.SignUser(this.form.getRawValue())
    this.router.navigateByUrl('/dashboard');
  }
}
