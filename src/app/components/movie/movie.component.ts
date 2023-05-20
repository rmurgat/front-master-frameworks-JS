import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Movie } from '../../models/movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent {
  @Input()
  public movie: Movie = new Movie('',0,'');
  @Output()
  public add2favorite = new EventEmitter();

  constructor(){

  }
  
  addFavorite(event: any, movie: Movie) {
    this.add2favorite.emit({
      movie: movie
    });
  }
}
