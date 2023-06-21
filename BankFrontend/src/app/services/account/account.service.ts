import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from 'src/app/model/account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private baseUrl: string = "http://localhost:11000/api/v1/bank/account";

  constructor(
    private http: HttpClient
  ) { }

  updateAccount(id: number, balance: number): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, balance);
  }
}
