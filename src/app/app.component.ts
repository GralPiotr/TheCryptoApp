import { Component, OnInit } from '@angular/core';
import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'TheCryptoApp';
  user: SocialUser | null = null;

  constructor(private authService: SocialAuthService) {}

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      console.log(user);
    });
  }
  signOut(): void {
    this.authService.signOut();
  }
}
