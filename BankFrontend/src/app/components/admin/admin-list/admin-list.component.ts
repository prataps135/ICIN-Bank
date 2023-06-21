import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from 'src/app/model/admin';
import { AdminService } from 'src/app/services/admin/admin.service';
import { NotificationService } from 'src/app/services/notification/notification.service';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.css']
})
export class AdminListComponent implements OnInit {
  adminList: Admin[] = [];


  constructor(
    private adminService: AdminService,
    private notification: NotificationService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.adminService.getAllAdmin().subscribe(
      data => {
        this.notification.showInfo("Details fetched successfully", "Bank");
        this.adminList = data;
      },
      err => {
        this.notification.showError("Can't able to fetch details", "Bank");
        this.notification.showWarning(err.error, "Bank");
      }
    );


  }



  onDelete(id: number) {
    this.adminService.deleteAdmin(id).subscribe(
      data => {
        this.notification.showSuccess("Deleted succesfully", "Bank");
        setTimeout(() => {
          this.ngOnInit();
        }, 3000);
      },
      err => {
        this.notification.showError(err.error, "Bank");
      }
    );
  }

  onUpdate(id: number) {
    this.router.navigate([`update-admin/${id}`]);
  }

}
