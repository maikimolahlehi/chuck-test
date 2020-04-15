import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { RandomJokeComponent } from "./random-joke/random-joke.component";
import { SearchJokeComponent } from "./search-joke/search-joke.component";

import { ViewsRoutingModule } from "./views-routing.module";
import { SharedModule } from "../shared/shared.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgxPaginationModule } from "ngx-pagination";

@NgModule({
  declarations: [HomeComponent, RandomJokeComponent, SearchJokeComponent],
  imports: [
    CommonModule,
    ViewsRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ]
})
export class ViewsModule {}
