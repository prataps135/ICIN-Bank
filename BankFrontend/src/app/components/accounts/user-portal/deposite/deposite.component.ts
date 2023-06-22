import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { User } from 'src/app/model/user';
import { AccountService } from 'src/app/services/account/account.service';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { NotificationService } from 'src/app/services/notification/notification.service';
import { DepositeDialogComponent } from '../dialog/deposite-dialog/deposite-dialog.component';

@Component({
  selector: 'app-deposite',
  templateUrl: './deposite.component.html',
  styleUrls: ['./deposite.component.css']
})
export class DepositeComponent {
  @Input() user: User;
  depositeAmount: number;

  constructor(
    private notification: NotificationService,
    private authService: AuthenticationService,
    private accountService: AccountService,
    private dialog: MatDialog
  ) { }

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
        },
        err => {
          this.notification.showError(err.error, "Bank");
        }
      );
    }
  }
}
