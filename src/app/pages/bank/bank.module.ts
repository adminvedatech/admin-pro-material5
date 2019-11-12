import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BankRoutingModule } from './bank-routing.module';
import { BankComponent } from './bank.component';
import { BankListComponent } from './bank-list/bank-list.component';

@NgModule({
  declarations: [BankComponent, BankListComponent],
  imports: [
    CommonModule,
    BankRoutingModule
  ],
  exports: [
    BankListComponent
  ]
})
export class BankModule { }
