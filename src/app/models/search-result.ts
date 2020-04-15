import {RandomJokeResponse} from './random-joke-response';

export interface SearchResult {
  total:number;
  result:RandomJokeResponse[];
}