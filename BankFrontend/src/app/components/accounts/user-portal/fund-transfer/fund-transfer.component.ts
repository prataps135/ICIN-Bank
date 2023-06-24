import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Account } from 'src/app/model/account';
import { User } from 'src/app/model/user';
import { AccountService } from 'src/app/services/account/account.service';
import { NotificationService } from 'src/app/services/notification/notification.service';
import { TransferDialogComponent } from '../dialog/transfer-dialog/transfer-dialog.component';
import { Statement } from 'src/app/model/statement';
import { StatementService } from 'src/app/services/statement/statement.service';

@Component({
  selector: 'app-fund-transfer',
  templateUrl: './fund-transfer.component.html',
  styleUrls: ['./fund-transfer.component.css']
})
export class FundTransferComponent implements OnInit {
  @Input() user: User;
  transferForm: FormGroup;
  statementSender: Statement;
  statementReciever: Statement;

  constructor(
    private accountService: AccountService,
    private notification: NotificationService,
    private dialog: MatDialog,
    private statementService:StatementService
  ) { }

  ngOnInit(): void {
    this.formCreation();
    this.statementSender = new Statement();
    this.statementReciever = new Statement();
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
      data => this.addStatementSender(data,widthdraw)
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

            this.addStatementReciever(data,deposite);
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

  addStatementSender(data:Account,withdraw:number){
    this.statementSender.details = `Fund Send to A/c no = ${this.accountNumber?.value}`;
    this.statementSender.date = new Date();
    this.statementSender.debit = withdraw;
    this.statementSender.credit = 0;
    this.statementSender.balance = data.balance;
    this.statementSender.accountNumber = this.user.account.number;
    
    
    this.statementService.addStatement(this.statementSender).subscribe();
  }

  addStatementReciever(data:Account,deposite:number){
    this.statementReciever.accountNumber = data.number;
    this.statementReciever.balance = data.balance;
    this.statementReciever.credit = deposite;
    this.statementReciever.debit = 0;
    this.statementReciever.details = `Fund Recieved from A/c no = ${this.user.account.number} | Name = ${this.user.name}`;
    this.statementReciever.date = new Date();

    this.statementService.addStatement(this.statementReciever).subscribe();
  }

  get accountNumber() {
    return this.transferForm.get('accountNumber');
  }
  get amount() {
    return this.transferForm.get('amount');
  }
}
