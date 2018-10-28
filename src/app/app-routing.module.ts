import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { View1Component } from './view1/view1.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'view/:id',      component: View1Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
