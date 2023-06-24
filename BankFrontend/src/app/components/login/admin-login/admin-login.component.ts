import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from 'src/app/model/admin';
import { AdminService } from 'src/app/services/admin/admin.service';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { NotificationService } from 'src/app/services/notification/notification.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  admin: Admin;

  constructor(
    private adminService: AdminService,
    private notification: NotificationService,
    private authService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.admin = new Admin();
  }

  onSubmit(adminForm: NgForm) {
    if (adminForm.invalid) {
      this.notification.showInfo("Please fill deatils correctly", "Bank");
    } else {
      this.adminService.getByUsername(this.admin.username).subscribe(
        data => {
          let password = this.admin.password;
          if (data.password === password) {
            this.notification.showSuccess(`Welcome ${data.name}`, "Bank");
            this.authService.setAuth('Admin');
            this.authService.setAdmin(data);
            setTimeout(() => {
              this.router.navigate(['admin-portal']);
            }, 3000);
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
