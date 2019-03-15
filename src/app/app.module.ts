import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* Imports of MDBootstrap */
import { MDBBootstrapModule } from 'angular-bootstrap-md';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './views/index/index.component';
import { NavbarComponent } from './views/global/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    NavbarComponent
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
