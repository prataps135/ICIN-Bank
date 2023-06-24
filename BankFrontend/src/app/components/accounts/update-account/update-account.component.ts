import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { NotificationService } from 'src/app/services/notification/notification.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-update-account',
  templateUrl: './update-account.component.html',
  styleUrls: ['./update-account.component.css']
})
export class UpdateAccountComponent implements OnInit {
  userForm: FormGroup;
  user: User;
  accountTypes: string[] = ['Saving', 'Current'];
  id: number;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private notification: NotificationService,
    public location:Location
  ) { }

  ngOnInit(): void {
    this.user = new User();
    this.id = this.route.snapshot.params['id'];
    this.fetchUser(this.id);
    this.formCreation();
  }

  fetchUser(id: number) {
    this.userService.getById(id).subscribe(
      data => {
        this.user = data;
        this.formCreation(this.user);
      },
      err => {
        this.notification.showWarning(err.error, "Bank");
      }
    );
  }

  formCreation(user?: User) {
    this.userForm = new FormGroup({
      name: new FormControl(user?.name, [
        Validators.required,
      ]),
      username: new FormControl(user?.username, [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(30)
      ]),
      password: new FormControl(user?.password, [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(30)
      ]),
      email: new FormControl(user?.email, [
        Validators.required
      ]),
      contactNo: new FormControl(user?.contactNo, [
        Validators.required,
        Validators.min(1000000000),
        Validators.max(9999999999)
      ]),
      account: new FormGroup({
        type: new FormControl(user?.account?.type, Validators.required),
        balance: new FormControl(user?.account?.balance, [
          Validators.required,
          Validators.min(10000)
        ])
      })
    });
  }


  onSubmit() {
    if (this.userForm.invalid) {
      this.notification.showInfo("Please fill form correctly", "Bank");
    } else {
      this.addValueToUser();
      this.userService.updateUser(this.id, this.user).subscribe(
        data => {
          this.notification.showSuccess("User updated successfully", "Bank");
          setTimeout(()=>{
            this.location.back();
          },3000);
        },
        err => {
          this.notification.showError("Can't able to update user", "Bank");
          this.notification.showError(err.error, "Bank");
        }
      );
    }
  }

  addValueToUser() {
    this.user.name = this.name?.value;
    this.user.username = this.username?.value;
    this.user.password = this.password?.value;
    this.user.email = this.email?.value;
    this.user.contactNo = this.contactNo?.value;
    this.user.account.balance = this.balance?.value;
    this.user.account.type = this.type?.value;
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
    return this.userForm.get('email');
  }
  get contactNo() {
    return this.userForm.get('contactNo');
  }
  get account() {
    return this.userForm.get('account');
  }
  get balance() {
    return this.account?.get('balance');
  }
  get type() {
    return this.account?.get('type');
  }
}
