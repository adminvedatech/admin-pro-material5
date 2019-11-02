import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [

  { path: 'bank',
  canActivate: [ AuthGuard ],
  loadChildren: './pages/bank/bank.module#BankModule'
  },
  { path: 'suppliers',
  canActivate: [ AuthGuard ],
  loadChildren: './pages/suppliers/suppliers.module#SuppliersModule'
  },
  { path: 'accounting-books',
  canActivate: [ AuthGuard ],
  loadChildren: './pages/accounting-books/accounting-books.module#AccountingBooksModule'
  },
  { path: 'customers',
  canActivate: [ AuthGuard ],
  loadChildren: './pages/customers/customers.module#CustomersModule'
  },
  { path: 'login', component: LoginComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
