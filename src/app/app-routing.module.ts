import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InicioComponent } from './dashboard/inicio/inicio.component';
import { ExploradorMoviesComponent } from './catalogo/explorador-movies/explorador-movies.component';
import { ReservacionesComponent } from './reservas/reservaciones/reservaciones.component';
import { PaginaNoEncontradaComponent } from './autentificacion/pagina-no-encontrada/pagina-no-encontrada.component';

const routes: Routes = [
  { path: 'dashboard', component: InicioComponent },
  { path: 'catalogo', component: ExploradorMoviesComponent },
  { path: 'reservaciones', component: ReservacionesComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', component: PaginaNoEncontradaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
