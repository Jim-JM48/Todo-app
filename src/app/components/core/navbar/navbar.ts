import { NgClass ,AsyncPipe } from "@angular/common";
import { Component ,inject,OnInit,signal } from '@angular/core';
import { RouterLinkActive ,RouterLink, Router } from "@angular/router";
import { AuthServ } from '../../../services/authserv';
import { FaIconLibrary, FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-navbar',
  imports: [NgClass, RouterLinkActive ,RouterLink ,AsyncPipe ,FontAwesomeModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar implements OnInit{
  linksvisbility = signal(true);

  authserv = inject(AuthServ);
  router = inject(Router);

  constructor(private iconsLibrary : FaIconLibrary ) {
    this.iconsLibrary.addIcons(faRightFromBracket)
  }

  ngOnInit(): void {
    this.authserv.authstate$.subscribe((user) => {
      let url = this.router.url;
      let match = "/dashboard";
      if(user && !url.startsWith(match)) {
        this.router.navigateByUrl(match);
      }
    })
  }
  changeLinksStates() {
    this.linksvisbility.set(!this.linksvisbility());
  }

  async logout() {
    await this.authserv.Logout();
    this.router.navigateByUrl('/');
  }

}
