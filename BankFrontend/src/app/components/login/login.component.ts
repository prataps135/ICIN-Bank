import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  userLogin() {
    this.router.navigate(['user-login'], { relativeTo: this.activatedRoute })
  }

  adminLogin() {
    this.router.navigate(['admin-login'], { relativeTo: this.activatedRoute })
  }
}
