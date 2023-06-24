import { Component,Input,DoCheck } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements DoCheck{
  @Input() title!:string;
  auth:string;
  constructor(
    private authService:AuthenticationService
  ){}
  
  ngDoCheck(): void {
      this.auth = this.authService.getAuth();
  }
}
