import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { InventarioModule } from '../catalogo/catalogo.module';



@NgModule({
  declarations: [
    InicioComponent
  ],
  imports: [
    CommonModule,
    InventarioModule
  ],
  exports: [
    InicioComponent
  ]
})
export class DashboardModule { }
