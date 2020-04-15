import { Component, OnInit } from "@angular/core";
import { ChuckNorrisService } from "../../services/chuck-noris.service";
import { Subject, BehaviorSubject } from "rxjs";
import { JokeResponse } from "../../models";

declare var $: any;

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  categories$: Subject<string[]> = new BehaviorSubject<string[]>([]);

  loadingCategories = false;

  joke: JokeResponse;
  loadingJoke = false;

  constructor(private chuckNorrisService: ChuckNorrisService) {}

  ngOnInit() {
    this.loadingCategories = true;
    this.chuckNorrisService.getCategories().subscribe(categories => {
      this.loadingCategories = false;
      this.categories$.next(categories);
    });
  }

  randomJoke(event, category) {
    event.preventDefault();
    this.loadingJoke = true;
    $("#randomJoke").modal("show");
    this.chuckNorrisService.getRandomCategoryJoke(category).subscribe(
      joke => {
        this.joke = joke;
        this.loadingJoke = false;
      },
      error => {
        this.loadingJoke = false;
      }
    );
  }
}
