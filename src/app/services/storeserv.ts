import { inject, Injectable } from '@angular/core';
import { Firestore ,doc ,getDoc ,setDoc } from "@angular/fire/firestore"
import { IUser } from '../interfaces/user.Interface';
import { Auth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class StoreServ {
  #auth = inject(Auth)
  #firestore = inject(Firestore);

  async StoreData(userData : IUser ,uid : string ,role:string = 'user') {
    await setDoc(doc(this.#firestore ,"user" ,uid) ,{
      name : userData.fName,
      role,
      email : userData.email,
      phone : userData.phone
    })
  }

  async GetData(uid:string) {
    return await getDoc(doc(this.#firestore ,'user' ,uid));
  }
  
}
