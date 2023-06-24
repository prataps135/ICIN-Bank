import { Component, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ChequeBook } from 'src/app/model/cheque_book';
import { User } from 'src/app/model/user';
import { ChequeBookService } from 'src/app/services/cheque book/cheque-book.service';
import { NotificationService } from 'src/app/services/notification/notification.service';

@Component({
  selector: 'app-cheque-book-request',
  templateUrl: './cheque-book-request.component.html',
  styleUrls: ['./cheque-book-request.component.css']
})
export class ChequeBookRequestComponent {
  leaf: number;
  leafSizes: number[] = [25, 50, 100];
  chequeBook: ChequeBook;

  constructor(
    public dialogRef: MatDialogRef<ChequeBookRequestComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private notification: NotificationService,
    private chequeBookService: ChequeBookService
  ) {
    this.chequeBook = new ChequeBook();
  }

  close() {
    this.dialogRef.close();
  }

  onSubmit(chequeForm: NgForm) {
    if (chequeForm.invalid) {
      this.notification.showWarning("Fill details correctly", "Bank");
    } else {
      this.chequeBook.accountNumber = this.data.user.account.number;
      this.chequeBook.leafSize = this.leaf;
      this.chequeBook.status = 'Pending';
      this.chequeBookService.addChequeBook(this.chequeBook).subscribe(
        data => this.notification.showSuccess("Request Submited", "Bank"),
        err => this.notification.showError("Can't able to submit request", "Bank")
      );
    }
  }
}
