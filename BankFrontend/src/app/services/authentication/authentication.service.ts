import { Injectable } from '@angular/core';
import { Admin } from 'src/app/model/admin';
import { User } from 'src/app/model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private auth: string;
  private currentUser: User
  ={
    id: 101,
    name: 'Pratap Singh',
    username: 'prataps134',
    password: 'prataps123123',
    email: 'prataps@gmail.com',
    contactNo: 7877696954,
    account: {
      number:12121212,
      balance:125400,
      type:'Saving'
    }
  };
  private currentAdmin: Admin;

  setAuth(auth: string): void {
    this.auth = auth;
  }

  getAuth(): string {
    return this.auth;
  }

  setUser(user: User): void {
    this.currentUser = user;
  }

  getUser(): User {
    return this.currentUser;
  }

  setAdmin(admin: Admin) {
    this.currentAdmin = admin;
  }

  getAdmin(): Admin {
    return this.currentAdmin;
  }
}
