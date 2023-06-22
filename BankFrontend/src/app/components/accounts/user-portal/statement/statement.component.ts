import { Component, Input, OnInit } from '@angular/core';
import { Statement } from 'src/app/model/statement';
import { NotificationService } from 'src/app/services/notification/notification.service';
import { StatementService } from 'src/app/services/statement/statement.service';

@Component({
  selector: 'app-statement',
  templateUrl: './statement.component.html',
  styleUrls: ['./statement.component.css']
})
export class StatementComponent implements OnInit {
  @Input() accountNumber: number;
  statements: Statement[] = [];
  error: boolean = false;

  constructor(
    private statementService: StatementService,
    private notification: NotificationService
  ) { }

  ngOnInit(): void {
    this.statementService.getStatementByAccountNumber(this.accountNumber).subscribe(
      data => this.statements = data,
      err => {
        this.notification.showWarning(err.error, "Bank");
        this.error = true;
      }
    );
  }

}
