import { Component, inject, Injector, OnInit, signal } from '@angular/core';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUserTie } from '@fortawesome/free-solid-svg-icons';
import { StoreServ } from '../../../services/storeserv';
import { AuthServ } from '../../../services/authserv';
import { Iinfo } from '../../../interfaces/info.interface';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-account',
  imports: [FontAwesomeModule ,UpperCasePipe],
  templateUrl: './account.html',
  styleUrl: './account.css'
})
export class Account implements OnInit {

  storeserv = inject(StoreServ);
  authserv = inject(AuthServ);
  userData = signal<Iinfo>({});

  constructor(private iconsLibrary : FaIconLibrary ,private injector : Injector) {
    this.iconsLibrary.addIcons(faUserTie);
  }
  async ngOnInit() {
    this.authserv.authstate$.subscribe(async (user) => {
      if(user) {
        const response = await this.storeserv.GetData(user.uid);
        this.userData.set(response.data()!);
      }else {
        return;
      }
    })
  }
  

  
}
