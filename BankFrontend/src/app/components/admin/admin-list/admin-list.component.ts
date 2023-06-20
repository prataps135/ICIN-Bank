import { Component,OnInit } from '@angular/core';
import { Admin } from 'src/app/model/admin';
import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.css']
})
export class AdminListComponent implements OnInit{
  adminList:Admin[]=[];

  constructor(
    private adminService:AdminService
  ){}

  ngOnInit(): void {
      this.adminService.getAllAdmin().subscribe(
        data => this.adminList = data
      );
  }
}
