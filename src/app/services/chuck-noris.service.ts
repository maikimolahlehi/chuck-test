import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError, map } from "rxjs/operators";

import { JokeResponse, SearchResult } from "../models";

@Injectable({
  providedIn: "root"
})
export class ChuckNorrisService {
  private apiUrl = "https://api.chucknorris.io/jokes";

  constructor(private httpClient: HttpClient) {}

  public getCategories(): Observable<string[]> {
    return this.httpClient.get(`${this.apiUrl}/categories`).pipe(
      map((categories: string[]) => categories),
      catchError(error => {
        return of([]);
      })
    );
  }

  public getRandomCategoryJoke(category: string): Observable<JokeResponse> {
    let params = new HttpParams();
    params = params.append("category", category);
    return this.httpClient
      .get(`${this.apiUrl}/random`, { params })
      .pipe(map((joke: JokeResponse) => joke));
  }

  public searchByKeyword(query: string): Observable<SearchResult> {
    let params = new HttpParams();
    params = params.append("query", query);
    return this.httpClient
      .get(`${this.apiUrl}/search`, { params })
      .pipe(map((result: SearchResult) => result));
  }
}
