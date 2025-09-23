import { inject, Injectable } from '@angular/core';
import { Auth ,authState,createUserWithEmailAndPassword ,signInWithEmailAndPassword ,signOut } from "@angular/fire/auth";
import { IUser } from '../interfaces/user.Interface';

@Injectable({
  providedIn: 'root'
})
export class AuthServ {

  #auth = inject(Auth);
  authstate$ = authState(this.#auth);
  
  async CreateUser(UserData : IUser) {
    const userCred = await createUserWithEmailAndPassword(
      this.#auth,
      UserData.email,
      UserData.password
    )
    return userCred.user.uid;
  }

  async SignUser(UserData : IUser) {
      await signInWithEmailAndPassword(
        this.#auth,
        UserData.email,
        UserData.password
      )
  }

  async Logout() {
    await signOut(this.#auth);
  }

}
