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
import { MainComponent } from './views/user-logged/main/main.component';
import { ProfileComponent } from './views/user-logged/profile/profile.component';
import { BasicProfileCardComponent } from './views/user-logged/cards/basic-profile-card/basic-profile-card.component';
import { MainProfileCardComponent } from './views/user-logged/cards/main-profile-card/main-profile-card.component';
import { AdvancedPublicationCardComponent } from './views/user-logged/cards/advanced-publication-card/advanced-publication-card.component';
@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    NavbarComponent,
    SignupComponent,
    SigninComponent,
    LoginComponent,
    MainComponent,
    ProfileComponent,
    BasicProfileCardComponent,
    MainProfileCardComponent,
    AdvancedPublicationCardComponent
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
