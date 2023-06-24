import { Injectable } from '@angular/core';
import { Admin } from 'src/app/model/admin';
import { User } from 'src/app/model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private auth: string = 'Admin';
  private currentUser: User;
  // ={
  //   id: 9,
  //   name: 'Pratap Singh Sisodia',
  //   username: 'prataps135',
  //   password: 'pratap123',
  //   email: 'prataps@gmail.com',
  //   contactNo: 7877696954,
  //   account: {
  //     number:7679529,
  //     balance:159100,
  //     type:'Current'
  //   }
  // };
  private currentAdmin: Admin
  ={
    id:1,
    password:'prataps@123',
    username:'prataps135',
    name:'Pratap Singh Sisodia'
  };

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
