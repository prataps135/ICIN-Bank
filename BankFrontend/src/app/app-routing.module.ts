import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAccountComponent } from './components/accounts/create-account/create-account.component';
import { LoginComponent } from './components/login/login.component';
import { UserLoginComponent } from './components/login/user-login/user-login.component';
import { AdminLoginComponent } from './components/login/admin-login/admin-login.component';
import { AdminRegistrationComponent } from './components/admin/admin-registration/admin-registration.component';
import { AccountListComponent } from './components/accounts/account-list/account-list.component';
import { AdminListComponent } from './components/admin/admin-list/admin-list.component';
import { AccountDetailsComponent } from './components/accounts/account-details/account-details.component';
import { UpdateAccountComponent } from './components/accounts/update-account/update-account.component';
import { UpdateAdminComponent } from './components/admin/update-admin/update-admin.component';
import { UserPortalComponent } from './components/accounts/user-portal/user-portal.component';
import { AdminPortalComponent } from './components/admin/admin-portal/admin-portal.component';
import { UserAuthGuard } from './guards/user-auth/user-auth.guard';
import { AdminAuthGuard } from './guards/admin-auth/admin-auth.guard';
import { HomeComponent } from './components/home/home.component';


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
  { path: 'admin-list', component: AdminListComponent },
  { path: 'account-details/:id', component: AccountDetailsComponent },
  { path: 'update-account/:id', component: UpdateAccountComponent },
  { path: 'update-admin/:id', component: UpdateAdminComponent },
  { path: 'user-portal', component: UserPortalComponent, canActivate: [UserAuthGuard] },
  { path: 'admin-portal', component: AdminPortalComponent, canActivate: [AdminAuthGuard] },
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
