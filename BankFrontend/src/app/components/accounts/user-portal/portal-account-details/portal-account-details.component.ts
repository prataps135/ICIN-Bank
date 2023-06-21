import { Component, Input } from '@angular/core';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-portal-account-details',
  templateUrl: './portal-account-details.component.html',
  styleUrls: ['./portal-account-details.component.css']
})
export class PortalAccountDetailsComponent{
  @Input() user: User;

}
