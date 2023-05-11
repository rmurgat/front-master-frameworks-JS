import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyComponent } from './components/my-component/my-component.component';
import { MoviesComponent } from './components/movies/movies.component';
import { TestsComponent } from './components/tests/tests.component';

@NgModule({
  declarations: [
    AppComponent,
    MyComponent,
    MoviesComponent,
    TestsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
