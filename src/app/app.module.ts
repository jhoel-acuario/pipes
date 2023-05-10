import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
//Configuracion del locale app:
import localEsPE  from "@angular/common/locales/es-PE";
import localyw  from "@angular/common/locales/yue-Hant";
import { registerLocaleData } from "@angular/common";

registerLocaleData(localEsPE)
registerLocaleData(localyw)
@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule

  ],
  providers: [
    {
      provide: LOCALE_ID, useValue:'es_PE' //usar por defecto
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
