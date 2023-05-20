import { Component } from '@angular/core';
import { Movie } from '../../models/movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {
  public title: string;
  public movies: Array<any>;
  public movies2: Movie[];

  constructor() {
    this.title = 'Lord of the ring',
    this.movies = [
      {year: 2019, title: "Spiderman 4", image: './assets/images/img-movie-spaiderman4.jpeg'},
      {year: 2018, title: "Avengers Endgame", image: './assets/images/img-movie-avengers.jpeg'},
      {year: 2015, title: "Batman vs Superman", image: './assets/images/img-movie-batmanVssuperman.jpeg'},
      {year: 2011, title: "Aquaman", image: './assets/images/img-movie-aquaman.jpeg'}
    ];
    this.movies2 = [
      new Movie('Spiderman 4', 2019, "./assets/images/img-movie-spaiderman4.jpeg"),
      new Movie('Avengers Endgame', 2018, "./assets/images/img-movie-avengers.jpeg"),
      new Movie('Batman vs Superman', 2015, "./assets/images/img-movie-batmanVssuperman.jpeg"),
      new Movie('Aquaman', 2011, "./assets/images/img-movie-aquaman.jpeg")
    ];

  }

  changingTitle = () => {
    this.title = "JAWS"
  }
}
