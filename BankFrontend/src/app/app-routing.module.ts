import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAccountComponent } from './components/accounts/create-account/create-account.component';
import { LoginComponent } from './components/login/login.component';
import { UserLoginComponent } from './components/login/user-login/user-login.component';
import { AdminLoginComponent } from './components/login/admin-login/admin-login.component';
import { AdminRegistrationComponent } from './components/admin/admin-registration/admin-registration.component';
import { AccountListComponent } from './components/accounts/account-list/account-list.component';
import { AdminListComponent } from './components/admin/admin-list/admin-list.component';

const routes: Routes = [
  { path: 'create-account', component: CreateAccountComponent },
  { path: 'admin-registration', component: AdminRegistrationComponent },
  {
    path: 'login', component: LoginComponent, children: [
      { path: 'user-login', component: UserLoginComponent },
      { path: 'admin-login', component: AdminLoginComponent }
    ]
  },
  { path: 'account-list', component: AccountListComponent },
  { path: 'admin-list', component: AdminListComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
