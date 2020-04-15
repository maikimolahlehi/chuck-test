import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RandomJokeComponent } from './random-joke/random-joke.component';
import { SearchJokeComponent } from './search-joke/search-joke.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'random/:category',
    component: RandomJokeComponent
  },
  {
    path:'search',
    component: SearchJokeComponent
  },
  {
    path:'**',
    redirectTo:''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule { }
