import { Component, OnInit } from '@angular/core';
import { food } from '../../../shared/models/food';
import { FoodService } from '../../../services/food.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  foods: food[] = [];
  constructor(private foodService:FoodService, activateRoute: ActivatedRoute) {
    let foodObservable: Observable<food[]>;
    activateRoute.params.subscribe((params) => {
      if (params.searchTerm)
        foodObservable = this.foodService.getAllFoodsBrSearchTerm(params.searchTerm);
      else if (params.tag)
        foodObservable = this.foodService.getAllFoodsByTag(params.tag);
      else 
        foodObservable = foodService.getAll();

        foodObservable.subscribe((serverFoods) => {
          this.foods = serverFoods;
        });
    })
  }

  ngOnInit(): void {
      
  }
}
