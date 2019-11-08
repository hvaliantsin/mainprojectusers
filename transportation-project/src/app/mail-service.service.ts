import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MailServiceService {
  private baseUrl = 'http://localhost:8080/mail';
  constructor(private http:HttpClient) { }

  postComplain(client: object): Observable<any>{
      return this.http.post(`${this.baseUrl}`+'/complain',client)
  }
}
