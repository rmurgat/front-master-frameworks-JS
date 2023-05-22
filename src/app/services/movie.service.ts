import { Injectable } from '@angular/core';
import { Movie } from '../models/movie';

/**
 * This class allow me to config movie services
 */
@Injectable()
export class MovieService {
    public movies: Movie[];


    constructor() {
        this.movies = [
            new Movie('Black Deamon', 2019, "./assets/images/img-movie-blackdeamon.jpeg"),
            new Movie('MEG', 2018, "./assets/images/img-movie-meg.jpeg"),
            new Movie('Shark Night', 2015, "./assets/images/img-movie-sharknight.jpeg"),
            new Movie('Planet of Sharks', 2011, "./assets/images/img-movie-planetsharks.jpeg")
        ];
    }

    helloworld() {
        return 'hello world from angular service!';
    }

    /**
     * This is a dummy service
     * @returns list of movies
     */
    getMoviesList() {
        return this.movies;
    }

}