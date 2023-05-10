import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { BasicPagesComponent } from './pages/basic-pages/basic-pages.component';
import { CommonPageComponent } from './pages/common-page/common-page.component';
import { NumberPageComponent } from './pages/number-page/number-page.component';
import { PrimengModule } from '../primeng/primeng.module';


@NgModule({
  declarations: [
    BasicPagesComponent,

    CommonPageComponent,
    NumberPageComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    PrimengModule
  ]
})
export class ProductsModule { }
