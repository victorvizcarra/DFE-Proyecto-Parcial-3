import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AutenticacionModule } from './autentificacion/autentificacion.module';
import { InventarioModule } from './catalogo/catalogo.module';
import { DashboardModule } from './dashboard/dashboard.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
    AutenticacionModule,
    DashboardModule,
    InventarioModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
