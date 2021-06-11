import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ComicsApiService {

  PUCLIC_KEY = '56dfe9c13876bad301ae2d7843fc8885'
  HASH = '86b8e6d9c8afb9d2ceecfd7df01db315'
  URL_API = `http://gateway.marvel.com/v1/public/comics?ts=1&apikey=${this.PUCLIC_KEY}&hash=${this.HASH}`

  constructor(private http: HttpClient) { }

  getAllComics(): Observable<any> {
    return this.http.get<any>(this.URL_API)
      .pipe(map((data: any) => data.data.results))
  }

}


