import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { BasicPagesComponent } from './pages/basic-pages/basic-pages.component';
import { CommonPageComponent } from './pages/common-page/common-page.component';
import { NumberPageComponent } from './pages/number-page/number-page.component';
import { PrimengModule } from '../primeng/primeng.module';
import { OrderComponent } from './pages/order/order.component';
import { TogleCasePipe } from './pipes/togle-case.pipe';
import { CanFlyPipe } from './pipes/can-fly.pipe';
import { SortByPipe } from './pipes/sort-by.pipe';


@NgModule({
  declarations: [
    BasicPagesComponent,

    CommonPageComponent,
    NumberPageComponent,
    OrderComponent,
    TogleCasePipe,
    CanFlyPipe,
    SortByPipe
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    PrimengModule
  ]
})
export class ProductsModule { }
