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
  accountTypes:string[];

  constructor(
    private userService: UserService,
    private notification: NotificationService
  ) { }

  ngOnInit(): void {
    this.user = new User();
    this.accountTypes = ['Saving','Current'];
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
      account:new FormGroup({
        contactNo: new FormControl('', [
          Validators.required,
          Validators.min(1000000000),
          Validators.max(9999999999)
        ]),
        type:new FormControl('',Validators.required),
        balance:new FormControl('',[
          Validators.required,
          Validators.min(10000)
        ])
      })
    });
  }

  onSubmit() {
    console.log(this.type?.value)
    if (this.userForm.invalid) {
      this.notification.showInfo("Please fill form correctly", "Bank");
      this.addValueToUser();
      console.log(this.user);
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
    this.user.account.type = this.type?.value;
    this.user.account.balance = this.balance?.value;
    this.user.account.number = this.accountNoGenerator();
  }

  accountNoGenerator():number{
    return Math.floor(Math.random()*10000000);
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
  get account(){
    return this.userForm.get('account');
  }
  get type(){
    return this.account?.get('type');
  }
  get contactNo() {
    return this.account?.get('contactNo');
  }
  get balance(){
    return this.account?.get('balance');
  }
}
