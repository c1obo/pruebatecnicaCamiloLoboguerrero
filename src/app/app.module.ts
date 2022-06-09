import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { LoginComponent } from './project/pages/login/login.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAnalytics,getAnalytics,ScreenTrackingService,UserTrackingService } from '@angular/fire/analytics';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideFunctions,getFunctions } from '@angular/fire/functions';
import { provideMessaging,getMessaging } from '@angular/fire/messaging';
import { providePerformance,getPerformance } from '@angular/fire/performance';
import { provideRemoteConfig,getRemoteConfig } from '@angular/fire/remote-config';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { AngularFireModule } from '@angular/fire/compat';
import { TablaComponent } from './project/pages/tabla/tabla.component';


/*const firebaseConfig = {
  apiKey: "AIzaSyBD9_nmY7fPcslUZJbXz6r_BgvRHI4sOD0",
  authDomain: "fukl-48022-g51-2021-2-test1.firebaseapp.com",
  projectId: "fukl-48022-g51-2021-2-test1",
  storageBucket: "fukl-48022-g51-2021-2-test1.appspot.com",
  messagingSenderId: "84075030091",
  appId: "1:84075030091:web:cc21c5c9bcb2a5b4a74fce",
  measurementId: "G-NFR9LG1VMP"
};*/

const firebaseConfig = {
  apiKey: "AIzaSyBD9_nmY7fPcslUZJbXz6r_BgvRHI4sOD0",
  authDomain: "fukl-48022-g51-2021-2-test1.firebaseapp.com",
  projectId: "fukl-48022-g51-2021-2-test1",
  storageBucket: "fukl-48022-g51-2021-2-test1.appspot.com",
  messagingSenderId: "84075030091",
  appId: "1:84075030091:web:bbec05cdb921f0bca74fce",
  measurementId: "G-TH571XYT3B"
};

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAnalytics(() => getAnalytics()),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    provideFunctions(() => getFunctions()),
    provideMessaging(() => getMessaging()),
    providePerformance(() => getPerformance()),
    provideRemoteConfig(() => getRemoteConfig()),
    provideStorage(() => getStorage())
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    LoginComponent,
    TablaComponent
  ],
  providers: [
    ScreenTrackingService,UserTrackingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
