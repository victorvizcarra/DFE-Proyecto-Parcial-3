import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-filtro-movies',
  templateUrl: './filtro-movies.component.html',
  styleUrls: ['./filtro-movies.component.css']
})
export class FiltroMoviesComponent {
  @Input() mensaje: string = '';
}
