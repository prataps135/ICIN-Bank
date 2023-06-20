import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Admin } from 'src/app/model/admin';
import { AdminService } from 'src/app/services/admin/admin.service';
import { NotificationService } from 'src/app/services/notification/notification.service';

@Component({
  selector: 'app-admin-registration',
  templateUrl: './admin-registration.component.html',
  styleUrls: ['./admin-registration.component.css']
})
export class AdminRegistrationComponent implements OnInit {
  admin: Admin;
  adminForm: FormGroup;

  constructor(
    private adminService: AdminService,
    private notification: NotificationService
  ) { }

  ngOnInit(): void {
    this.admin = new Admin();
    this.formCreation();
  }

  formCreation() {
    this.adminForm = new FormGroup({
      name: new FormControl('', Validators.required),
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(30)
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(30)
      ])
    });
  }

  onSubmit() {
    if (this.adminForm.invalid) {
      this.notification.showInfo("Please fill form correctly", "Bank");
    } else {
      this.addValueToAdmin();
      this.adminService.addAdmin(this.admin).subscribe(
        data => this.notification.showSuccess("Admin added successfully", "Bank"),
        err => {
          this.notification.showError("Can't able to add admin", "Bank");
          this.notification.showError(err.error, "Bank");
        }
      );
    }
  }

  addValueToAdmin() {
    this.admin.name = this.name?.value;
    this.admin.password = this.password?.value;
    this.admin.username = this.username?.value;
  }

  get name() {
    return this.adminForm.get('name');
  }
  get username() {
    return this.adminForm.get('username');
  }
  get password() {
    return this.adminForm.get('password');
  }
}
