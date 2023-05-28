import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CryptoDetailsComponent } from './components/crypto-details/crypto-details.component';

const routes: Routes = [{ path: '', component: CryptoDetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CryptoDetailsRoutingModule {}
