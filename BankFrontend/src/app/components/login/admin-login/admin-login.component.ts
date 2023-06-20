import { Component,OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Admin } from 'src/app/model/admin';
import { AdminService } from 'src/app/services/admin/admin.service';
import { NotificationService } from 'src/app/services/notification/notification.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit{
  admin:Admin;

  constructor(
    private adminService:AdminService,
    private notification:NotificationService
  ){}

  ngOnInit(): void {
      this.admin = new Admin();
  }

  onSubmit(adminForm:NgForm){
    if (adminForm.invalid) {
      this.notification.showInfo("Please fill deatils correctly", "Bank");
    } else {
      this.adminService.getByUsername(this.admin.username).subscribe(
        data => {
          let password = this.admin.password;
          if (data.password === password) {
            this.notification.showSuccess(`Welcome ${data.name}`, "Bank");
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
