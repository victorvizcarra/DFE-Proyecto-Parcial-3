import { Component } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-explorador-movies',
  templateUrl: './explorador-movies.component.html',
  styleUrls: ['./explorador-movies.component.css']
})
export class ExploradorMoviesComponent {

  cargandoMovies = false;

  listadoMovies: Movie[] = [];


  constructor(private data: MoviesService) {

  }


  ngOnInit() {
    this.getMoviesListas();
  }


  get mensaje(): string {
    if (this.cargandoMovies) {
      return 'Cargando...';
    } else {

      return this.listadoMovies.length > 0 ?
        `${this.listadoMovies.length} registros encontrados.` :
        'No se han encontrado registros...';

    }

  }


  private getMoviesListas() {
    this.cargandoMovies = true;

    this.data.getMoviesListas()
      .subscribe(x => {
        this.cargandoMovies = false;
        this.listadoMovies = x;
      });
  }

}
