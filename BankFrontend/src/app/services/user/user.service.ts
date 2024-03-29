import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl: string = "http://localhost:11000/api/v1/bank/users";
  constructor(
    private http: HttpClient
  ) { }

  addUser(user: User): Observable<any> {
    return this.http.post(this.baseUrl, user);
  }

  getByUsername(username: string): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/${username}`);
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl);
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  getById(id: number): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/id/${id}`);
  }

  updateUser(id: number, user: User): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, user);
  }
}
