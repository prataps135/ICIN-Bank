import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/model/user';
import { NotificationService } from 'src/app/services/notification/notification.service';
import { UserService } from 'src/app/services/user/user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {
  user: User;
  userForm: FormGroup;

  constructor(
    private userService: UserService,
    private notification: NotificationService
  ) { }

  ngOnInit(): void {
    this.user = new User();
    this.formCreation();
  }

  formCreation() {
    this.userForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
      ]),
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(30)
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(30)
      ]),
      email: new FormControl('', [
        Validators.required
      ]),
      contactNo: new FormControl('', [
        Validators.required,
        Validators.min(1000000000),
        Validators.max(9999999999)
      ])
    });
  }

  onSubmit() {
    // console.log(this.username);
    if (this.userForm.invalid) {
      this.notification.showInfo("Please fill form correctly", "Bank");
    } else {
      this.addValueToUser();
      this.userService.addUser(this.user).subscribe(
        data => this.notification.showSuccess("User added successfully", "Bank"),
        err => this.notification.showError("Can't able to add user", "Bank")
      );
    }
  }

  addValueToUser() {
    this.user.name = this.name?.value;
    this.user.username = this.username?.value;
    this.user.password = this.password?.value;
    this.user.email = this.email?.value;
    this.user.contactNo = this.contactNo?.value;
  }

  get name() {
    return this.userForm.get('name');
  }
  get username() {
    return this.userForm.get('username');
  }
  get password() {
    return this.userForm.get('password');
  }
  get email() {
    return this.userForm.get('password');
  }
  get contactNo() {
    return this.userForm.get('contactNo');
  }
}
