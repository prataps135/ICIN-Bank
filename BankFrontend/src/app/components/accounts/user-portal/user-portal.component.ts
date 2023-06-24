import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { User } from 'src/app/model/user';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { BalanceDialogComponent } from './dialog/balance-dialog/balance-dialog.component';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/services/notification/notification.service';

@Component({
  selector: 'app-user-portal',
  templateUrl: './user-portal.component.html',
  styleUrls: ['./user-portal.component.css']
})
export class UserPortalComponent implements OnInit {
  currentUser: User;

  constructor(
    private authService: AuthenticationService,
    private dailog: MatDialog,
    private router:Router,
    private notification:NotificationService
  ) { }

  ngOnInit(): void {
    this.currentUser = this.authService.getUser();
  }

  balanceDialog() {
    const dialogRef = this.dailog.open(BalanceDialogComponent, {
      data: { balance: this.currentUser.account.balance }
    });

    // dialogRef.afterClosed().subscribe((result) => {
    //   console.log(`Dialog result: ${result}`);
    // });

  }

  logout(){
    this.authService.setAuth('N/A');
    this.authService.setUser(new User);
    this.notification.showInfo("Logout Successful","Bank");
    this.router.navigate(['/']);
  }
}
