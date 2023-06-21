import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { User } from 'src/app/model/user';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { BalanceDialogComponent } from './balance-dialog/balance-dialog.component';

@Component({
  selector: 'app-user-portal',
  templateUrl: './user-portal.component.html',
  styleUrls: ['./user-portal.component.css']
})
export class UserPortalComponent implements OnInit {
  currentUser: User;

  constructor(
    private authService: AuthenticationService,
    private dailog: MatDialog

  ) { }

  ngOnInit(): void {
    this.currentUser = this.authService.getUser();
  }

  balanceDialog() {
    const dialogRef = this.dailog.open(BalanceDialogComponent, {
      data: { balance: this.currentUser.account.balance }
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });

  }
}
