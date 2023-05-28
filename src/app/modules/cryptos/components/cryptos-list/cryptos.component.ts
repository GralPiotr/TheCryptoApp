import { Component, OnInit } from '@angular/core';
import { CryptosService } from '../../../../services/cryptos.service';

export interface Crypto {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
}

@Component({
  selector: 'app-cryptos',
  templateUrl: './cryptos.component.html',
  styleUrls: ['./cryptos.component.scss'],
})
export class CryptosComponent implements OnInit {
  cryptos: Crypto[] = [];
  displayedColumns: string[] = ['icon', 'id', 'name', 'price', 'marketCap'];

  constructor(private cryptosService: CryptosService) {}

  ngOnInit(): void {
    this.cryptosService.getCryptos().subscribe((cryptos) => {
      this.cryptos = cryptos; // assign the result to your cryptos variable
    });
  }
}
