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
import { AccountListComponent } from './components/accounts/account-list/account-list.component';
import { AdminListComponent } from './components/admin/admin-list/admin-list.component';
import { AdminService } from './services/admin/admin.service';
import { AccountDetailsComponent } from './components/accounts/account-details/account-details.component';
import { UpdateAccountComponent } from './components/accounts/update-account/update-account.component';
import { UpdateAdminComponent } from './components/admin/update-admin/update-admin.component';
import { UserPortalComponent } from './components/accounts/user-portal/user-portal.component';
import { PortalAccountDetailsComponent } from './components/accounts/user-portal/portal-account-details/portal-account-details.component';
import { BalanceDialogComponent } from './components/accounts/user-portal/dialog/balance-dialog/balance-dialog.component';
import { WidthdrawComponent } from './components/accounts/user-portal/widthdraw/widthdraw.component';
import { WithdrawDialogComponent } from './components/accounts/user-portal/dialog/withdraw-dialog/withdraw-dialog.component';
import { DepositeComponent } from './components/accounts/user-portal/deposite/deposite.component';
import { DepositeDialogComponent } from './components/accounts/user-portal/dialog/deposite-dialog/deposite-dialog.component';
import { FundTransferComponent } from './components/accounts/user-portal/fund-transfer/fund-transfer.component';
import { TransferDialogComponent } from './components/accounts/user-portal/dialog/transfer-dialog/transfer-dialog.component';
import { StatementComponent } from './components/accounts/user-portal/statement/statement.component';
import { AdminPortalComponent } from './components/admin/admin-portal/admin-portal.component';
import { ChequeBookRequestComponent } from './components/accounts/user-portal/dialog/cheque-book-request/cheque-book-request.component';
import { AuthenticationService } from './services/authentication/authentication.service';
import { AccountService } from './services/account/account.service';
import { StatementService } from './services/statement/statement.service';
import { ChequeBookService } from './services/cheque book/cheque-book.service';
import { ChequeBookListComponent } from './components/admin/admin-portal/cheque-book-list/cheque-book-list.component';
import { ChequeBookStatusComponent } from './components/accounts/user-portal/dialog/cheque-book-status/cheque-book-status.component';
import { UserAuthGuard } from './guards/user-auth/user-auth.guard';
import { AdminAuthGuard } from './guards/admin-auth/admin-auth.guard';
import { HomeComponent } from './components/home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CreateAccountComponent,
    LoginComponent,
    UserLoginComponent,
    AdminLoginComponent,
    AdminRegistrationComponent,
    AccountListComponent,
    AdminListComponent,
    AccountDetailsComponent,
    UpdateAccountComponent,
    UpdateAdminComponent,
    UserPortalComponent,
    PortalAccountDetailsComponent,
    BalanceDialogComponent,
    WidthdrawComponent,
    WithdrawDialogComponent,
    DepositeComponent,
    DepositeDialogComponent,
    FundTransferComponent,
    TransferDialogComponent,
    StatementComponent,
    AdminPortalComponent,
    ChequeBookRequestComponent,
    ChequeBookListComponent,
    ChequeBookStatusComponent,
    HomeComponent,
    
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
    NotificationService,
    AdminService,
    AuthenticationService,
    AccountService,
    StatementService,
    ChequeBookService,
    UserAuthGuard,
    AdminAuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
