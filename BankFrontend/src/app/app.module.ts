import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { CreateAccountComponent } from './components/accounts/create-account/create-account.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UserService } from './services/user/user.service';
import { ToastrModule } from 'ngx-toastr';
import { NotificationService } from './services/notification/notification.service';
import { LoginComponent } from './components/login/login.component';
import { UserLoginComponent } from './components/login/user-login/user-login.component';
import { AdminLoginComponent } from './components/login/admin-login/admin-login.component';
import { AdminRegistrationComponent } from './components/admin/admin-registration/admin-registration.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CreateAccountComponent,
    LoginComponent,
    UserLoginComponent,
    AdminLoginComponent,
    AdminRegistrationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ToastrModule.forRoot({
      closeButton: true,
      timeOut: 5000, // 5 seconds
      progressBar: true,
      preventDuplicates:true
    })
  ],
  providers: [
    UserService,
    NotificationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
