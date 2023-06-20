import { Injectable } from '@angular/core';
import { User } from 'src/app/model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private auth:string;
  private currentUser:User;
  constructor() { }

  setAuth(auth:string):void{
    this.auth = auth;
  }

  getAuth():string{
    return this.auth;
  }

  setUser(user:User):void{
    this.currentUser = user;
  }

  getUser():User{
    return this.currentUser;
  }
}
