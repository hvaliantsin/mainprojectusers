import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http:HttpClient) { }

  getNews():Observable<any> {
    return this.http.get(`https://newsapi.org/v2/everything?q=logistics&apiKey=8d6c3270cce5419fb7f1d808d80eaabe`);
  }
}
