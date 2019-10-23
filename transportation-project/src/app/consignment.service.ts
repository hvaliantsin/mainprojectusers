import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsignmentService {
  private baseUrl = 'http://localhost:8080/api';
  constructor(private http:HttpClient) { }

  getConsignmentList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`+'/consignment-get');
  }

  deleteConsignment(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}`+'/'+`${id}`,{responseType:'text'});
  }

  getConsignment(id: number): Observable<object>{
    return this.http.get(`${this.baseUrl}`+'/'+`${id}`);
  }

  updateConsignment(id:number, value:any): Observable<object>{
    return this.http.put(`${this.baseUrl}`+'/'+`${id}`, value);
  }

  createConsignment(student: object): Observable<object> {
    return this.http.post(`${this.baseUrl}`+'/', student)
  }
}
