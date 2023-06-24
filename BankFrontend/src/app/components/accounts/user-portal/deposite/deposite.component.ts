import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { User } from 'src/app/model/user';
import { AccountService } from 'src/app/services/account/account.service';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { NotificationService } from 'src/app/services/notification/notification.service';
import { DepositeDialogComponent } from '../dialog/deposite-dialog/deposite-dialog.component';
import { Account } from 'src/app/model/account';
import { Statement } from 'src/app/model/statement';
import { StatementService } from 'src/app/services/statement/statement.service';

@Component({
  selector: 'app-deposite',
  templateUrl: './deposite.component.html',
  styleUrls: ['./deposite.component.css']
})
export class DepositeComponent {
  @Input() user: User;
  depositeAmount: number;
  statement: Statement;

  constructor(
    private notification: NotificationService,
    private authService: AuthenticationService,
    private accountService: AccountService,
    private dialog: MatDialog,
    private statementService:StatementService
  ) {
    this.statement = new Statement();
  }

  deposite(depositeForm: NgForm) {
    if (depositeForm.invalid) {
      this.notification.showWarning("Fill form correctly", "Bank");
    } else {
      let balance = this.user.account.balance;
      let updatedAmount = this.depositeAmount + balance;
      this.user.account.balance = updatedAmount;
      let number = this.user.account.number;
      this.accountService.updateAccount(number, updatedAmount).subscribe(
        data => {
          const dialogRef = this.dialog.open(DepositeDialogComponent, {
            data: {
              deposite: this.depositeAmount
            }
          });

          dialogRef.afterClosed();

          this.addStatement(data);
        },
        err => {
          this.notification.showError(err.error, "Bank");
        }
      );
    }
  }

  addStatement(data: Account) {
    this.statement.accountNumber = this.user.account.number;
    this.statement.balance = data.balance;
    this.statement.credit = this.depositeAmount;
    this.statement.debit = 0;
    this.statement.details = "Deposite";
    this.statement.date = new Date();

    this.statementService.addStatement(this.statement).subscribe();
  }
}
