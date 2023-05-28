import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CryptosComponent } from './components/cryptos-list/cryptos.component';

const routes: Routes = [{ path: '', component: CryptosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CryptosRoutingModule {}
