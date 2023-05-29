import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http';
import { GoogleSigninComponent } from './google-signin/google-signin.component';
import {
  SocialLoginModule,
  SocialAuthServiceConfig,
} from '@abacritt/angularx-social-login';
import { GoogleLoginProvider } from '@abacritt/angularx-social-login';
import { LoginComponent } from './login/login.component';

let config: SocialAuthServiceConfig = {
  providers: [
    {
      id: GoogleLoginProvider.PROVIDER_ID,
      provider: new GoogleLoginProvider(''),
    },
  ],
};

@NgModule({
  declarations: [AppComponent, GoogleSigninComponent, LoginComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    AppRoutingModule,
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: config,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
