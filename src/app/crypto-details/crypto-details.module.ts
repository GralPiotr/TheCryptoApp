import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CryptoDetailsRoutingModule } from './crypto-details-routing.module';
import { CryptoDetailsComponent } from './crypto-details.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [CryptoDetailsComponent],
  imports: [CommonModule, CryptoDetailsRoutingModule, MatTableModule],
})
export class CryptoDetailsModule {}
