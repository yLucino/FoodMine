import { Injectable } from '@angular/core';
import { food } from '../shared/models/food';
import { sample_foods, sample_tags } from '../../data';
import { Tag } from '../shared/models/tag';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FOODS_BY_ID_URL, FOODS_BY_SEARCH_URL, FOODS_BY_TAG_URL, FOODS_TAGS_URL, FOODS_URL } from '../shared/constants/urls';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<food[]> {
    return this.http.get<food[]>(FOODS_URL);
  }

  getAllFoodsBrSearchTerm(searchTerm: string) {
    return this.http.get<food[]>(FOODS_BY_SEARCH_URL + searchTerm);
  }

  getAllTags(): Observable<Tag[]> {
    return this.http.get<Tag[]>(FOODS_TAGS_URL);
  }

  getAllFoodsByTag(tag: string): Observable<food[]> {
    return tag === "All"?
    this.getAll():
    this.http.get<food[]>(FOODS_BY_TAG_URL + tag);
  }

  getFoodById(foodId: string): Observable<food> {
    return this.http.get<food>(FOODS_BY_ID_URL + foodId);
  }
}
