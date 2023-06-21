import { Component,OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';

@Component({
  selector: 'app-user-portal',
  templateUrl: './user-portal.component.html',
  styleUrls: ['./user-portal.component.css']
})
export class UserPortalComponent implements OnInit{
  currentUser:User;

  constructor(
    private authService:AuthenticationService
  ){}

  ngOnInit(): void {
    // this.currentUser = new User();
    this.currentUser = this.authService.getUser();
  }
}
