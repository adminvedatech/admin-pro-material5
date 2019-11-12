import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountingBooksComponent } from './accounting-books.component';

const routes: Routes = [
  {
    path: '',
    component: AccountingBooksComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountingBooksRoutingModule { }
