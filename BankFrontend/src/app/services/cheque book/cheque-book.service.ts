import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ChequeBook } from 'src/app/model/cheque_book';

@Injectable({
  providedIn: 'root'
})
export class ChequeBookService {
  private baseUrl: string = "http://localhost:11000/api/v1/bank/cheque-book";

  constructor(
    private http: HttpClient
  ) { }

  addChequeBook(chequeBook: ChequeBook): Observable<any> {
    return this.http.post(this.baseUrl, chequeBook);
  }

  getAllChequeBooks(): Observable<ChequeBook[]> {
    return this.http.get<ChequeBook[]>(this.baseUrl);
  }

  updateStatus(chequeBook: ChequeBook): Observable<any> {
    return this.http.put(this.baseUrl, chequeBook);
  }

  getByAccountNumber(accountNumber: number): Observable<ChequeBook> {
    return this.http.get<ChequeBook>(`${this.baseUrl}/${accountNumber}`);
  }
}
