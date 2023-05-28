import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { shareReplay, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CachingService {
  private cache = new Map<string, any>();

  constructor(private http: HttpClient) {}

  get(url: string) {
    if (this.cache.has(url)) {
      return this.cache.get(url);
    } else {
      const response$ = this.http.get(url).pipe(
        shareReplay(1), // this will cache the latest response
        tap(() => {
          this.cache.set(url, response$); // cache the response
        })
      );
      return response$;
    }
  }
}
