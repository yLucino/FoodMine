import { CartItem } from "./cart-item";

export class Cart {
  items: CartItem[] = [];
  //new Cart() undefined {}
  totalPrice: number = 0;
  totalCount: number = 0;
}