import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProviders } from './app.routing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SliderComponent } from './components/slider/slider.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './components/home/home.component';
import { FormComponent } from './components/form/form.component';
import { BlogComponent } from './components/blog/blog.component';
import { Page1Component } from './components/page1/page1.component';
import { MoviesComponent } from './components/movies/movies.component';
import { ErrorComponent } from './components/error/error.component';
import { MovieComponent } from './components/movie/movie.component';
import { IsPairPipe } from './pipes/ispair.pipe';
import { ArticlesComponent } from './components/articles/articles.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    FooterComponent,
    SidebarComponent,
    HomeComponent,
    FormComponent,
    BlogComponent,
    Page1Component,
    MoviesComponent,
    ErrorComponent,
    MovieComponent,
    IsPairPipe,
    ArticlesComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpClientModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
