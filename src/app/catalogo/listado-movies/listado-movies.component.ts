import { Component, Input } from '@angular/core';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'app-listado-movies',
  templateUrl: './listado-movies.component.html',
  styleUrls: ['./listado-movies.component.css']
})


export class ListadoMoviesComponent {

  @Input() listadoMovies: Movie[] = [];

  @Input() cargandoMovies = false;

  movieSeleccionada: Movie | null = null;

  rutaImagen = '../../../../assets/img/posters/';

}