import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductComponent } from "./product/product.component";

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: "",
        redirectTo: "/dashboard/customer-details",
        pathMatch: "full"
      },
      {
        path: '',
        component: DashboardComponent,
      },
      {
        path: 'projects',
        component: ProductComponent
      },
      {
        path: 'customer-details',
        component: CustomerDetailsComponent
      },
    ],
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
