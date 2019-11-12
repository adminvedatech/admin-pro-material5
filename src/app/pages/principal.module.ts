import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PAGES_ROUTES } from './principal-routing.module';
import { PrincipalComponent } from './principal.component';
import { MatToolbarModule } from '@angular/material/toolbar';

import { CustomersModule } from './customers/customers.module';
import { BankModule } from './bank/bank.module';
import { AccountingBooksModule } from './accounting-books/accounting-books.module';
import { ProductionsModule } from './productions/productions.module';
import { ProductsModule } from './products/products.module';
import { PurchasesModule } from './purchases/purchases.module';
import { ReportsModule } from './reports/reports.module';
import { SalesModule } from './sales/sales.module';
import { SuppliersModule } from './suppliers/suppliers.module';

@NgModule({
  declarations: [
    PrincipalComponent,
  ],
  imports: [
    CommonModule,
    // AccountingBooksModule,
    // BankModule,
    // CustomersModule,
    // ProductionsModule,
    // ProductsModule,
    // PurchasesModule,
    // ReportsModule,
    // SalesModule,
    // SuppliersModule,
    PAGES_ROUTES,
    MatToolbarModule
  ],
  exports: [
    // AccountingBooksModule,
    // BankModule,
    // CustomersModule,
    // ProductionsModule,
    // ProductsModule,
    // PurchasesModule,
    // ReportsModule,
    // SalesModule,
    // SuppliersModule,
    MatToolbarModule
  ]
})
export class PrincipalModule { }
