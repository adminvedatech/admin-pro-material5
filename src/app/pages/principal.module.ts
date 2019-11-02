import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PAGES_ROUTES } from './principal-routing.module';
import { BankComponent } from './bank/bank.component';
import { PrincipalComponent } from './principal.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CustomersComponent } from './customers/customers.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { AccountingBooksComponent } from './accounting-books/accounting-books.component';

@NgModule({
  declarations: [
    PrincipalComponent,
    BankComponent,
    CustomersComponent,
    SuppliersComponent,
    AccountingBooksComponent],
  imports: [
    CommonModule,
    PAGES_ROUTES,
    MatToolbarModule
  ]
})
export class PrincipalModule { }
