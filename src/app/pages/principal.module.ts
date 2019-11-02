import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PAGES_ROUTES } from './principal-routing.module';
import { BankComponent } from './bank/bank.component';
import { PrincipalComponent } from './principal.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CustomersComponent } from './customers/customers.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { AccountingBooksComponent } from './accounting-books/accounting-books.component';
import { ProductionsComponent } from './productions/productions.component';
import { ProductsComponent } from './products/products.component';
import { SalesComponent } from './sales/sales.component';
import { PurchasesComponent } from './purchases/purchases.component';

@NgModule({
  declarations: [
    PrincipalComponent,
    BankComponent,
    CustomersComponent,
    SuppliersComponent,
    AccountingBooksComponent,
    ProductionsComponent,
    ProductsComponent,
    SalesComponent,
    PurchasesComponent],
  imports: [
    CommonModule,
    PAGES_ROUTES,
    MatToolbarModule
  ]
})
export class PrincipalModule { }
