import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/model/user';
import { NotificationService } from 'src/app/services/notification/notification.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  user: User;

  constructor(
    private userService: UserService,
    private notification: NotificationService
  ) { }

  ngOnInit(): void {
    this.user = new User();
  }

  onSubmit(userForm: NgForm) {
    if (userForm.invalid) {
      this.notification.showInfo("Please fill deatils correctly", "Bank");
    } else {
      this.userService.getByUsername(this.user.username).subscribe(
        data => {
          let password = this.user.password;
          if (data.password === password) {
            this.notification.showSuccess(`Welcome ${this.user.name}`, "Bank");
          } else {
            this.notification.showError("Invalid details", "Bank");
          }
        },
        err => {
          this.notification.showError(err.error, "Bank");
          console.log(err);
        }
      );
    }
  }
}
