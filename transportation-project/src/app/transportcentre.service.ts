import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransportcentreService {
  private baseUrl = 'http://localhost:8080/transportcentre';
  constructor(private http:HttpClient) { }

  getTransportcentreList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`+'');
  }

  deleteTransportcentre(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}`+'/'+`${id}`,{responseType:'text'});
  }

  getTransportcentre(id: number): Observable<object>{
    return this.http.get(`${this.baseUrl}`+'/'+`${id}`);
  }

  updateTransportcentre(id:number, value:any): Observable<object>{
    return this.http.put(`${this.baseUrl}`+'/'+`${id}`, value);
  }

  createTransportcentre(consignment: object): Observable<object> {
    return this.http.post(`${this.baseUrl}`+'/', consignment)
  }
}
