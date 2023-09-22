import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieTableComponent } from './components/movie-table/movie-table.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AddMovieComponent } from './components/add-movie/add-movie.component';

const routes: Routes = [
  { path: 'home',component:HomePageComponent },
  { path: 'business/peliculas', component: MovieTableComponent },
  {path: 'newMovie', component: AddMovieComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
