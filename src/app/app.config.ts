import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth ,getAuth } from "@angular/fire/auth";
import { provideFirestore ,getFirestore } from "@angular/fire/firestore";
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {


  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideFirebaseApp(() => initializeApp({
      apiKey: "AIzaSyCL2-83vM3tz7IVDSPsX70iQ399aVbClLs",
      authDomain: "todoapp-a2770.firebaseapp.com",
      projectId: "todoapp-a2770",
      storageBucket: "todoapp-a2770.firebasestorage.app",
      messagingSenderId: "231665406391",
      appId: "1:231665406391:web:4cf9b3d31b3ea7817c1832",
      measurementId: "G-SYT89S9873"
    })),
    provideAuth(() => getAuth()),
		provideFirestore(() => getFirestore() ),
    provideRouter(routes)
  ]
};
