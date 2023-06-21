import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { User } from 'src/app/model/user';
import { AccountService } from 'src/app/services/account/account.service';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { NotificationService } from 'src/app/services/notification/notification.service';
import { WithdrawDialogComponent } from '../dialog/withdraw-dialog/withdraw-dialog.component';

@Component({
  selector: 'app-widthdraw',
  templateUrl: './widthdraw.component.html',
  styleUrls: ['./widthdraw.component.css']
})
export class WidthdrawComponent implements OnInit {
  @Input() user: User;
  withdrawAmount: number;

  constructor(
    private notification: NotificationService,
    private authService: AuthenticationService,
    private accountService: AccountService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {

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
          let dialogRef = this.dialog.open(WithdrawDialogComponent, {
            data: {
              withdraw: this.withdrawAmount
            }
          });

          dialogRef.afterClosed().subscribe(() =>
            this.ngOnInit()
          );
        },
        err => {
          this.notification.showError(err.error, "Bank");
        }
      );
    }
  }
}
