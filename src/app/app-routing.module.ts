import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    component: LoginComponent,
    path: "login",
  },
  {
    component: RegisterComponent,
    path: "register",
  },
  {
    component: HomeComponent,
    path: "home",
  },
  {
    path: "**",
    redirectTo: "login",
    pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
