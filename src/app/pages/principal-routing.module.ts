import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalComponent } from './principal.component';
import { BankComponent } from './bank/bank.component';
import { CustomersComponent } from './customers/customers.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { AccountingBooksComponent } from './accounting-books/accounting-books.component';

const principalRoutes: Routes = [
  {
    path: '',
    component: PrincipalComponent,
    children: [
    //    { path: 'bank', component: BankComponent, data: { titulo: 'Banks' } },
        { path: 'customers', component: CustomersComponent, data: { titulo: 'Customers' } },
        { path: 'suppliers', component: SuppliersComponent, data: { titulo: 'Dashboard' } },
        { path: 'accounting-books', component: AccountingBooksComponent, data: { titulo: 'Accounting Books' } },


        { path: '', redirectTo: '/bank', pathMatch: 'full' }
    ]
}
];

// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule]
// })
//export class PrincipalRoutingModule { }
export const PAGES_ROUTES = RouterModule.forChild( principalRoutes );
