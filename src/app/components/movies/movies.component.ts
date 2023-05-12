import { Component } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {
  public title: string;
  public movies: Array<any>;

  constructor() {
    this.title = 'Lord of the ring',
    this.movies = [
      {title: "Spiderman 4", image: './assets/images/img-movie-spaiderman4.jpeg'},
      {title: "Avengers Endgame", image: './assets/images/img-movie-avengers.jpeg'},
      {title: "Batman vs Superman", image: './assets/images/img-movie-batmanVssuperman.jpeg'},
      {title: "Aquaman", image: './assets/images/img-movie-aquaman.jpeg'}
    ];
  }

  changingTitle = () => {
    this.title = "JAWS"
  }
}
