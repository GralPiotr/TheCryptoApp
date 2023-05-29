import { Component, OnInit } from '@angular/core';
import {
  GoogleLoginProvider,
  SocialAuthService,
  SocialUser,
} from '@abacritt/angularx-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private authService: SocialAuthService) {}
  user: SocialUser | null = null;

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      console.log(user);
    });
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
  signOut(): void {
    this.authService.signOut();
  }
}
