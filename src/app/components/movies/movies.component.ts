import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit, DoCheck, OnDestroy {
  public title: string;

  constructor() {
    this.title = "Movies Component";
    console.log('---Contructor launched---');
  }

  ngOnInit(): void {
    console.log('Movies Component Initiated!');
  }

  ngDoCheck(): void {
    console.log('Movies Component changed!');
  }

  changeTitle() {
    this.title = "Title changed!";
  }

  ngOnDestroy(): void {
    console.log('Movies Component is destroyed');
  }

}
