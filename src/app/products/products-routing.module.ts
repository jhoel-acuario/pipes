import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicPagesComponent } from './pages/basic-pages/basic-pages.component';
import { CommonPageComponent } from './pages/common-page/common-page.component';
import { NumberPageComponent } from './pages/number-page/number-page.component';
import { OrderComponent } from './pages/order/order.component';

const routes: Routes = [
  {
    path:'', component:BasicPagesComponent
  },
  {
    path:'numbers', component:NumberPageComponent
  },
  {
    path:'common', component:CommonPageComponent
  },
  {
    path:'custom', component:OrderComponent
  },
  {
    path:'**', redirectTo:''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
