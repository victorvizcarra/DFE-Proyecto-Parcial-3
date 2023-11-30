import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesService } from '../services/movies.service';

import { ExploradorMoviesComponent } from './explorador-movies/explorador-movies.component';
import { ListadoMoviesComponent } from './listado-movies/listado-movies.component';
import { DetalleMovieComponent } from './detalle-movie/detalle-movie.component';
import { FiltroMoviesComponent } from './filtro-movies/flitro-movies.component';


@NgModule({
  declarations: [
    ExploradorMoviesComponent,
    ListadoMoviesComponent,
    DetalleMovieComponent,
    FiltroMoviesComponent
  ],
  imports: [
    CommonModule
  ],
  providers:[
    MoviesService,
  ],
  exports: [
    ExploradorMoviesComponent
  ]
})
export class InventarioModule { }
