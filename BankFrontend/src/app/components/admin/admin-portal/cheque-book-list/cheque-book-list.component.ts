import { Component, OnInit } from '@angular/core';
import { ChequeBook } from 'src/app/model/cheque_book';
import { ChequeBookService } from 'src/app/services/cheque book/cheque-book.service';
import { NotificationService } from 'src/app/services/notification/notification.service';

@Component({
  selector: 'app-cheque-book-list',
  templateUrl: './cheque-book-list.component.html',
  styleUrls: ['./cheque-book-list.component.css']
})
export class ChequeBookListComponent implements OnInit {
  chequeBookList: ChequeBook[] = [];
  statusList: string[] = ['Pending', 'Confirm', 'On the way', 'Deliverd'];
  status: string;

  constructor(
    private chequeBookService: ChequeBookService,
    private notification:NotificationService
  ) { }

  ngOnInit(): void {
    this.chequeBookService.getAllChequeBooks().subscribe({
      next: (data) => {
        this.chequeBookList = data;
        
      },
      error: (err) => console.log(err)
    });
  }

  onUpdate(chequeBook:ChequeBook){
    this.chequeBookService.updateStatus(chequeBook).subscribe({
      next:(data) => this.notification.showSuccess("Status updated","Bank"),
      error:(err) => this.notification.showError("Can't able to update status","Bank")
    });
  }
}
