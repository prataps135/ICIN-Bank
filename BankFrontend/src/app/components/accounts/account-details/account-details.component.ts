import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/model/user';
import { NotificationService } from 'src/app/services/notification/notification.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent implements OnInit {
  user: User;
  id: number;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private notification:NotificationService,
    public location:Location
  ) { }

  ngOnInit(): void {
    this.user = new User();
    this.id = this.route.snapshot.params['id'];
    this.getUserDetails(this.id);
  }

  getUserDetails(id: number) {
    this.userService.getById(id).subscribe(
      data => this.user = data,
      err => this.notification.showWarning(err.error,"Bank")
    );
  }
}
