// importing modules to angular router
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// importing components used in router
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { FormComponent } from './components/form/form.component';
import { Page1Component } from './components/page1/page1.component';
import { MoviesComponent } from './components/movies/movies.component';
import { ErrorComponent } from './components/error/error.component';

// Setting routes array
const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'blog', component: BlogComponent},
    {path: 'form', component: FormComponent},
    {path: 'movies', component: MoviesComponent},
    {path: 'page1', component: Page1Component},                      // route without parameters
    {path: 'page1/:name', component: Page1Component},                // route without one parameter
    {path: 'page1/:name/:lastname', component: Page1Component},      // route without two parameters
    {path: '**', component: ErrorComponent}
];

// Exporting the routes module
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
