import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { User } from 'src/app/model/user';
import { AccountService } from 'src/app/services/account/account.service';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { NotificationService } from 'src/app/services/notification/notification.service';
import { WithdrawDialogComponent } from '../dialog/withdraw-dialog/withdraw-dialog.component';
import { StatementService } from 'src/app/services/statement/statement.service';
import { Statement } from 'src/app/model/statement';
import { Account } from 'src/app/model/account';

@Component({
  selector: 'app-widthdraw',
  templateUrl: './widthdraw.component.html',
  styleUrls: ['./widthdraw.component.css']
})
export class WidthdrawComponent implements OnInit {
  @Input() user: User;
  withdrawAmount: number;
  statement:Statement;

  constructor(
    private notification: NotificationService,
    private authService: AuthenticationService,
    private accountService: AccountService,
    private dialog: MatDialog,
    private statementService:StatementService
  ) { }

  ngOnInit(): void {
    this.statement= new Statement();
  }

  withdraw(withdrawForm: NgForm) {
    if (withdrawForm.invalid) {
      this.notification.showWarning("Fill form correctly", "Bank");
    } else {
      let balance = this.user.account.balance;
      let remaining = balance - this.withdrawAmount;
      this.user.account.balance = remaining;
      let number = this.user.account.number;
      this.accountService.updateAccount(number, remaining).subscribe(
        data => {
          const dialogRef = this.dialog.open(WithdrawDialogComponent, {
            data: {
              withdraw: this.withdrawAmount
            }
          });

          dialogRef.afterClosed().subscribe(() =>
            this.ngOnInit()
          );
          this.addStatement(data);
        },
        err => {
          this.notification.showError(err.error, "Bank");
        }
      );
    }
  }

  addStatement(data:Account){
    this.statement.details = "Withdraw";
    this.statement.date = new Date();
    this.statement.debit = this.withdrawAmount;
    this.statement.credit = 0;
    this.statement.balance = data.balance;
    this.statement.accountNumber = this.user.account.number;
    
    
    this.statementService.addStatement(this.statement).subscribe();
  }
}
