import { food } from "./food";

export class CartItem {
  constructor(public food: food) { }
  quantity: number = 1;
  price: number = this.food.price;
}
