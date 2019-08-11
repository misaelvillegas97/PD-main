import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './views/index/index.component';
import { LoginComponent } from './views/login/login.component';
import { SigninComponent } from './views/login/signin/signin.component';
import { SignupComponent } from './views/login/signup/signup.component';
import { MainComponent } from './views/user-logged/main/main.component';
import indexPage from './session-validate.component';

const routes: Routes = [
  {
    path: '',
    component: indexPage,
    data: { title: 'Página de Inicio' }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'SignIn/SignUp' },
    children: [
      {
        path: 'signin',
        component: SigninComponent
      },
      {
        path: 'signup',
        component: SignupComponent
      },
      {
        path: '',
        redirectTo: '/login/signin',
        pathMatch: 'full'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
