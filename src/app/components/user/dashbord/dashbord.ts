import { Component, inject } from '@angular/core';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Router ,RouterOutlet ,RouterLink ,RouterLinkActive } from "@angular/router";
import { faAddressCard, faArrowRightFromBracket, faFile, faFilePen, faLayerGroup } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashbord',
  imports: [FontAwesomeModule, RouterOutlet, RouterLinkActive, RouterLink],
  templateUrl: './dashbord.html',
  styleUrl: './dashbord.css'
})
export class Dashbord  {
  router = inject(Router);

  constructor(private iconsLibrary : FaIconLibrary) {
    this.iconsLibrary.addIcons(faAddressCard ,faFilePen ,faLayerGroup ,faFile ,faArrowRightFromBracket);

    // this.router.events.pipe(
    //   filter((event) => event instanceof NavigationEnd)
    // ).subscribe(console.log);
  }
}
