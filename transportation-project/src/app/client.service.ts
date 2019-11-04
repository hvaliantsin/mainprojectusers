import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private baseUrl = 'http://localhost:8080/client';
  constructor(private http:HttpClient) { }

  
  getClientByUsername(username: string):Observable<any>{
    return this.http.get(`${this.baseUrl}`+'/username/'+`${username}`)
  }
  getClientByEmail(email: string):Observable<any>{
    return this.http.get(`${this.baseUrl}`+'/email/'+`${email}`)
  }
  getClientList():Observable<any>{
    return this.http.get(`${this.baseUrl}`);
  }
  deleteClient(id: number): Observable<any>{
    return this.http.delete(`${this.baseUrl}`+'/'+`${id}`,{responseType:'text'});
  }
  getClient(id: number): Observable<object>{
    return this.http.get(`${this.baseUrl}`+'/'+`${id}`);
  }
  updateClient(id: number, value: any): Observable<object>{
    return this.http.put(`${this.baseUrl}`+'/'+`${id}`, value)
  }
  createClient(client: object): Observable<object>{
    return this.http.post(`${this.baseUrl}`+'/',client);
  }
  createClientUser(client: object, user: object): Observable<object>{
    return this.http.post(`${this.baseUrl}`+'/',client,user);
  }
}
