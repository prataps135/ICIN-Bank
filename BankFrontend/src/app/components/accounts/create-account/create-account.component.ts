import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit{
  user:User;

  constructor(){}

  ngOnInit(): void {
      this.user = new User();
  }

  onSubmit(form: NgForm) {
    console.log(this.user);
  }
}
