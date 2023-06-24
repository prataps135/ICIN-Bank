import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from 'src/app/model/admin';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { NotificationService } from 'src/app/services/notification/notification.service';

@Component({
  selector: 'app-admin-portal',
  templateUrl: './admin-portal.component.html',
  styleUrls: ['./admin-portal.component.css']
})
export class AdminPortalComponent implements OnInit {
  currentAdmin: Admin;

  constructor(
    private authService: AuthenticationService,
    private notification: NotificationService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.currentAdmin = this.authService.getAdmin();
  }

  logout() {
    this.authService.setAuth('N/A');
    this.authService.setAdmin(new Admin);
    this.notification.showInfo("Logout Successful", "Bank");
    this.router.navigate(['/']);
  }
}
