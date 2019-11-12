import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BankComponent } from './bank.component';
import { BankListComponent } from './bank-list/bank-list.component';

const routes: Routes = [
  {
  path: '',
  component: BankComponent
  },
  {
    path: 'bank-list',
    component: BankListComponent
  }

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BankRoutingModule { }
