import { Component,OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit{
  accountList:User[]=[];

  constructor(
    private userService:UserService
  ){}

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(
      data => {
        this.accountList = data
      },
      err => console.log(err)
    );
  }
}
