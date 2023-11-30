import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'app-detalle-movie',
  templateUrl: './detalle-movie.component.html',
  styleUrls: ['./detalle-movie.component.css']
})
export class DetalleMovieComponent {

  @Input() movie: Movie | null = null;

  @Output() close: EventEmitter<void> = new EventEmitter();


  onCloseModal() {
    this.close.emit();
  }
}
