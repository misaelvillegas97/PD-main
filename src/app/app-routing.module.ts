import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './views/index/index.component';
import { LoginComponent } from './views/login/login.component';
import { SigninComponent } from './views/login/signin/signin.component';
import { SignupComponent } from './views/login/signup/signup.component';

const routes: Routes = [
  {
    path: 'index',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path: '',
    component: IndexComponent,
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
