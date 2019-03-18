import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* Imports of MDBootstrap */
import { MDBBootstrapModule } from 'angular-bootstrap-md';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './views/index/index.component';
import { NavbarComponent } from './views/global/navbar/navbar.component';
import { SignupComponent } from './views/login/signup/signup.component';
import { SigninComponent } from './views/login/signin/signin.component';
import { LoginComponent } from './views/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    NavbarComponent,
    SignupComponent,
    SigninComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
