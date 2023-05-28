import { Component, OnInit } from '@angular/core';
import { CachingService } from '../caching.service';

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

  constructor(private cachingService: CachingService) {}

  ngOnInit() {
    this.cachingService
      .get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd')
      .subscribe((data: Crypto[]) => {
        this.cryptos = data;
      });
  }
}
