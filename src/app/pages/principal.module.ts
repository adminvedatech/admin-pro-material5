import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PAGES_ROUTES } from './principal-routing.module';
import { PrincipalComponent } from './principal.component';
import { MatToolbarModule } from '@angular/material/toolbar';



@NgModule({
  declarations: [
    PrincipalComponent,
  ],
  imports: [
    CommonModule,
    PAGES_ROUTES,
    MatToolbarModule
  ],
  exports: [
     MatToolbarModule
  ]
})
export class PrincipalModule { }
