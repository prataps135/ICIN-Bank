import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Statement } from 'src/app/model/statement';

@Injectable({
  providedIn: 'root'
})
export class StatementService {
  private baseUrl: string = "http://localhost:11000/api/v1/bank/statement";

  constructor(
    private http: HttpClient
  ) { }

  getStatementByAccountNumber(number: number): Observable<Statement[]> {
    return this.http.get<Statement[]>(`${this.baseUrl}/${number}`);
  }
}
