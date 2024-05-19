import { Component, OnInit } from '@angular/core';
import { Cart } from '../../../shared/models/cart';
import { CartService } from '../../../services/cart.service';
import { CartItem } from '../../../shared/models/cart-item';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  cart!: Cart;
  constructor(private cartService: CartService) { 
    this.cartService.getCartObservable().subscribe((cart) => {
      this.cart = cart;
    })
  }

  ngOnInit(): void {
  }

  romeveFromCart(cartItem: CartItem) {
    this.cartService.removeFromCart(cartItem.food.id);
  }  

  changeQuantity(cartItem: CartItem, quantityInString: string) {
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.food.id, quantity);
  }
  
}
