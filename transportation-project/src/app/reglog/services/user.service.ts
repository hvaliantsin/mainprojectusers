import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userUrl = 'http://localhost:8080/test/user';
  private clientUrl = 'http://localhost:8080/test/client'
  private tcUrl = 'http://localhost:8080/test/tc';
  private adminUrl = 'http://localhost:8080/test/admin';

  constructor(private http: HttpClient) { }

  getUserBoard(): Observable<string> {
    return this.http.get(this.userUrl, { responseType: 'text' });
  }

  getClientBoard(): Observable<string> {
    return this.http.get(this.clientUrl, {responseType: 'text'});
  }

  getTCBoard(): Observable<string> {
    return this.http.get(this.tcUrl, { responseType: 'text' });
  }

  getAdminBoard(): Observable<string> {
    return this.http.get(this.adminUrl, { responseType: 'text' });
  }
}