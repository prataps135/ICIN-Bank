import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from 'src/app/model/admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private baseUrl: string = "http://localhost:11000/api/v1/bank/admin";

  constructor(
    private http: HttpClient
  ) { }

  addAdmin(admin: Admin): Observable<any> {
    return this.http.post(this.baseUrl, admin);
  }

  getByUsername(username: string): Observable<Admin> {
    return this.http.get<Admin>(`${this.baseUrl}/${username}`);
  }

  getAllAdmin(): Observable<Admin[]> {
    return this.http.get<Admin[]>(this.baseUrl);
  }

  deleteAdmin(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  getById(id: number): Observable<Admin> {
    return this.http.get<Admin>(`${this.baseUrl}/id/${id}`);
  }

  updateAdmin(id: number, admin: Admin): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, admin);
  }
}
