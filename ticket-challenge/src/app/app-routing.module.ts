import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SalonsListComponent} from "./salons-list/salons-list.component";
import {PlanComponent} from "./plan/plan.component";

const routes: Routes = [
  {
    path: '',
    component: SalonsListComponent
  },
  {
    path: 'plan/:id',
    component: PlanComponent
  },
  {
    path: '**', redirectTo: ''
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
