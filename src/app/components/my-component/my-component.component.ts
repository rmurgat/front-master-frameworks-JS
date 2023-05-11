import { Component } from '@angular/core';

@Component({
    selector: 'app-mycomponent',
    templateUrl: './my-component.component.html'
})
export class MyComponent{
    public title: string;
    public comment: string;
    public year: number;
    public showMovies: boolean;

    constructor() {
        this.title = "Hello World, I am a component";
        this.comment = "This is my first component";
        this.year = 2023;
        this.showMovies = true;
        console.log("MyComponent loaded!");
        console.log(this.title, this.comment, this.year);
    }

    hideMovies() {
        this.showMovies = false;
    }

}