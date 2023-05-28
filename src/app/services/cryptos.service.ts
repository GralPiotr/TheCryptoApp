import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CryptosService {
  private cryptosUrl =
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd'; // replace with your actual API url
  private cache = new Map<string, any>();
  private apiUrl = 'https://api.coingecko.com/api/v3/';

  constructor(private http: HttpClient) {}

  getCryptos(): Observable<any> {
    const cachedResponse = this.cache.get(this.cryptosUrl);
    if (cachedResponse) {
      return of(cachedResponse);
    } else {
      return this.http
        .get<any>(this.cryptosUrl)
        .pipe(tap((response) => this.cache.set(this.cryptosUrl, response)));
    }
  }

  getCryptoById(id: string): Observable<any> {
    const cachedResponse = this.cache.get(id);
    const url = `${this.apiUrl}coins/${id}?vs_currency=usd`;
    if (cachedResponse) {
      return of(cachedResponse);
    } else {
      return this.http
        .get<any>(url)
        .pipe(tap((response) => this.cache.set(id, response)));
    }
  }

  getCryptoMarketChartById(
    id: string,
    currency: string = 'usd',
    days: number = 30
  ): Observable<any> {
    return this.http.get(
      `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currency}&days=${days}`
    );
  }
}
