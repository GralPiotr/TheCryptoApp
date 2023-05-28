import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CryptoDetailsRoutingModule } from './crypto-details-routing.module';
import { CryptoDetailsComponent } from './components/crypto-details/crypto-details.component';
import { MatTableModule } from '@angular/material/table';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [CryptoDetailsComponent],
  imports: [
    CommonModule,
    CryptoDetailsRoutingModule,
    MatTableModule,
    NgChartsModule,
  ],
})
export class CryptoDetailsModule {}
