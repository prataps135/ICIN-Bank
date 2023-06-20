import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAccountComponent } from './components/accounts/create-account/create-account.component';
import { LoginComponent } from './components/login/login.component';
import { UserLoginComponent } from './components/login/user-login/user-login.component';
import { AdminLoginComponent } from './components/login/admin-login/admin-login.component';

const routes: Routes = [
  { path: 'create-account', component: CreateAccountComponent },
  {
    path: 'login', component: LoginComponent, children: [
      { path: 'user-login', component: UserLoginComponent },
      { path: 'admin-login', component: AdminLoginComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
