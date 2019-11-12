import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LoginComponent } from './login/login.component';
import { PrincipalModule } from './pages/principal.module';
import { HttpClient } from 'selenium-webdriver/http';
import { HttpClientModule } from '@angular/common/http';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { FormsModule } from '@angular/forms';
import { LoginModule } from './login/login.module';
import { PrincipalComponent } from './pages/principal.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    // PrincipalComponent
  ],
  imports: [
    BrowserModule,
    AngularMaterialModule,
    FormsModule,
    LoginModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    PrincipalModule,
    MatToolbarModule
  ],
  entryComponents: [LoginComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
