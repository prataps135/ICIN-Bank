import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { NotificationService } from 'src/app/services/notification/notification.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit {
  accountList: User[] = [];

  constructor(
    private userService: UserService,
    private notification: NotificationService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(
      data => {
        this.notification.showInfo("Details fetched successfully", "Bank");
        this.accountList = data;
      },
      err => {
        this.notification.showError("Can't able to fetch details", "Bank");
        this.notification.showWarning(err.error, "Bank");
      }
    );
  }

  onDelete(id: number) {
    this.userService.deleteUser(id).subscribe(
      data => {
        this.notification.showSuccess("Deleted succesfully", "Bank");
        setTimeout(() => {
          this.ngOnInit();
        }, 3000);
      },
      err => {
        this.notification.showError(err.error, "Bank");
      }
    );
  }

  OnDetails(id: number) {
    this.router.navigate([`account-details/${id}`]);
  }

  onUpdate(id: number) {
    this.router.navigate([`update-account/${id}`]);
  }
}
