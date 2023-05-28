import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'crypto-details',
    loadChildren: () =>
      import('./crypto-details/crypto-details.module').then(
        (m) => m.CryptoDetailsModule
      ),
  },
  { path: 'cryptos', loadChildren: () => import('./cryptos/cryptos.module').then(m => m.CryptosModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
