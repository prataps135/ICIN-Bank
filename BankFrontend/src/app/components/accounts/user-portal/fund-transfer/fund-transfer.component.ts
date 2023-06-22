import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Account } from 'src/app/model/account';
import { User } from 'src/app/model/user';
import { AccountService } from 'src/app/services/account/account.service';
import { NotificationService } from 'src/app/services/notification/notification.service';
import { TransferDialogComponent } from '../dialog/transfer-dialog/transfer-dialog.component';

@Component({
  selector: 'app-fund-transfer',
  templateUrl: './fund-transfer.component.html',
  styleUrls: ['./fund-transfer.component.css']
})
export class FundTransferComponent implements OnInit {
  @Input() user: User;
  transferForm: FormGroup;

  constructor(
    private accountService: AccountService,
    private notification: NotificationService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.formCreation();
  }

  formCreation() {
    this.transferForm = new FormGroup({
      accountNumber: new FormControl('', [
        Validators.required
      ]),
      amount: new FormControl('', [
        Validators.required
      ])
    });
  }

  onSubmit() {
    if (this.transferForm.invalid) {
      this.notification.showInfo("Fill form correctly", "Bank");
    } else {
      this.debit();
      this.credit();
    }
  }

  debit() {
    let balance = this.user.account.balance;
    let widthdraw = this.amount?.value;
    let remaining = balance - widthdraw;
    let number = this.user.account.number;
    this.accountService.updateAccount(number, remaining).subscribe(

    );
  }

  credit() {
    let deposite = this.amount?.value;
    let accountNumber = this.accountNumber?.value;
    this.accountService.getByAccountNumber(accountNumber).subscribe(
      data => {
        let balanaceB = data.balance;
        let updatedBalanceB = balanaceB + deposite;
        this.accountService.updateAccount(data.number, updatedBalanceB).subscribe(
          data => {
            const dialogRef = this.dialog.open(TransferDialogComponent, {
              data: {
                accountNumber: accountNumber,
                amount: deposite
              }
            });

            dialogRef.afterClosed().subscribe(() => {
              this.ngOnInit();
            });
          },
          err => {
            console.log(err)
          }
        );
      },
      err => {
        this.notification.showError("Account not found", "Bank");
      }
    );

  }

  get accountNumber() {
    return this.transferForm.get('accountNumber');
  }
  get amount() {
    return this.transferForm.get('amount');
  }
}
