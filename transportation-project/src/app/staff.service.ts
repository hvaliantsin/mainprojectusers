import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StaffService {
  private baseUrl = 'http://localhost:8080/staff';
  constructor(private http:HttpClient) { }

  getStaffList(): Observable<any>{
    return this.http.get(`${this.baseUrl}`);
  }
  deleteStaff(id: number): Observable<any>{
    return this.http.delete(`${this.baseUrl}`+'/'+`${id}`,{responseType:'text'});
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
