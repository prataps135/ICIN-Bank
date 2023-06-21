import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Admin } from 'src/app/model/admin';
import { AdminService } from 'src/app/services/admin/admin.service';
import { NotificationService } from 'src/app/services/notification/notification.service';

@Component({
  selector: 'app-update-admin',
  templateUrl: './update-admin.component.html',
  styleUrls: ['./update-admin.component.css']
})
export class UpdateAdminComponent implements OnInit {
  adminForm: FormGroup;
  admin: Admin;
  id: number;
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private notification: NotificationService,
    private adminService: AdminService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.fetchAdmin(this.id);
    this.formCreation();
  }

  fetchAdmin(id: number) {
    this.adminService.getById(id).subscribe(
      data => {
        this.admin = data;
        this.formCreation(this.admin);
      },
      err => {
        this.notification.showWarning(err.error, "Bank");
      }
    );
  }

  formCreation(admin?: Admin) {
    this.adminForm = new FormGroup({
      name: new FormControl(admin?.name, Validators.required),
      username: new FormControl(admin?.username, [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(30)
      ]),
      password: new FormControl(admin?.password, [
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
      this.adminService.updateAdmin(this.id, this.admin).subscribe(
        data => {
          this.notification.showSuccess("Admin updated successfully", "Bank");
          setTimeout(() => {
            this.location.back();
          }, 3000);
        },
        err => {
          this.notification.showError("Can't able to update admin", "Bank");
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
