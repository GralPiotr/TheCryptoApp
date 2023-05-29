import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: 'crypto-details/:id',
    loadChildren: () =>
      import('./modules/crypto-details/crypto-details.module').then(
        (m) => m.CryptoDetailsModule
      ),
  },
  {
    path: 'cryptos',
    loadChildren: () =>
      import('./modules/cryptos/cryptos.module').then((m) => m.CryptosModule),
  },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
