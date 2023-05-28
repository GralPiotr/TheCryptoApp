import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
