import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TransportcentreService } from './transportcentre.service';
import { Transportcentre } from './transportcentre';

@Injectable({
  providedIn: 'root'
})
export class StaffService {
  private baseUrl = 'http://localhost:8080/staff';
  constructor(private http:HttpClient) { }
  getStaffByUsername(username: string): Observable<any>{
    return this.http.get(`${this.baseUrl}`+'/username/'+`${username}`)
  }
  getStaffList(): Observable<any>{
    return this.http.get(`${this.baseUrl}`);
  }
  deleteStaff(id: number): Observable<any>{
    return this.http.delete(`${this.baseUrl}`+'/'+`${id}`,{responseType:'text'});
  }
  getStaffListByTC(tc: object): Observable<any>{
    return this.http.get(`${this.baseUrl}`+'/tc',tc);
  }
  getStaff(id: number): Observable<any>{
    return this.http.get(`${this.baseUrl}`+'/'+`${id}`);
  }
  updateStaff(id:number, value:any): Observable<object>{
    return this.http.put(`${this.baseUrl}`+'/'+`${id}`, value);
  }
  createStaff(staff: object): Observable<object>{
    return this.http.post(`${this.baseUrl}`+'/',staff);
  }
}
