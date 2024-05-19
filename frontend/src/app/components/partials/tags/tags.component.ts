import { Component, OnInit } from '@angular/core';
import { Tag } from '../../../shared/models/tag';
import { FoodService } from '../../../services/food.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
  tags?: Tag[];
  constructor(foodService: FoodService) {
    foodService.getAllTags().subscribe(serverTags => {
      this.tags = serverTags;
    });
  }

  ngOnInit(): void {
  }

}
