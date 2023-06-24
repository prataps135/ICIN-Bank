import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { User } from 'src/app/model/user';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { BalanceDialogComponent } from './dialog/balance-dialog/balance-dialog.component';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/services/notification/notification.service';
import { ChequeBookRequestComponent } from './dialog/cheque-book-request/cheque-book-request.component';
import { ChequeBookService } from 'src/app/services/cheque book/cheque-book.service';
import { ChequeBook } from 'src/app/model/cheque_book';
import { ChequeBookStatusComponent } from './dialog/cheque-book-status/cheque-book-status.component';

@Component({
  selector: 'app-user-portal',
  templateUrl: './user-portal.component.html',
  styleUrls: ['./user-portal.component.css']
})
export class UserPortalComponent implements OnInit {
  currentUser: User;
  chequeBook: ChequeBook;

  constructor(
    private authService: AuthenticationService,
    private dailog: MatDialog,
    private router: Router,
    private notification: NotificationService,
    private chequeBookService: ChequeBookService
  ) { }

  ngOnInit(): void {
    this.currentUser = this.authService.getUser();
    this.chequeBookService.getByAccountNumber(this.currentUser.account.number).subscribe(
      data => this.chequeBook = data,
      err => console.log(err)
    );
  }

  balanceDialog() {
    const dialogRef = this.dailog.open(BalanceDialogComponent, {
      data: { balance: this.currentUser.account.balance }
    });

    // dialogRef.afterClosed().subscribe((result) => {
    //   console.log(`Dialog result: ${result}`);
    // });

  }

  logout() {
    this.authService.setAuth('N/A');
    this.authService.setUser(new User);
    this.notification.showInfo("Logout Successful", "Bank");
    this.router.navigate(['/']);
  }

  chequeBookRequest() {
    if (this.chequeBook.deliverd) {
      const dialogRef = this.dailog.open(ChequeBookRequestComponent, {
        data: { user: this.currentUser }
      });
    } else {
      const dialogRef = this.dailog.open(ChequeBookStatusComponent, {
        data: { chequeBook: this.chequeBook }
      })
    }
  }
}
