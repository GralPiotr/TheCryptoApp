import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CryptosRoutingModule } from './cryptos-routing.module';
import { CryptosComponent } from './components/cryptos-list/cryptos.component';
import { MatTableModule } from '@angular/material/table';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [CryptosComponent],
  imports: [
    CommonModule,
    CryptosRoutingModule,
    MatTableModule,
    FlexLayoutModule,
  ],
})
export class CryptosModule {}
