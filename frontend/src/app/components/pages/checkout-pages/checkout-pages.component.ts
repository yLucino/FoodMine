import { Component, OnInit } from '@angular/core';
import { Order } from '../../../shared/models/order';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CartService } from '../../../services/cart.service';
import { UserService } from '../../../services/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-checkout-pages',
  templateUrl: './checkout-pages.component.html',
  styleUrls: ['./checkout-pages.component.css']
})
export class CheckoutPagesComponent implements OnInit {

  order: Order = new Order();
  cheackoutForm!: FormGroup;

  constructor(
    cartService: CartService,
    private formBuilder: FormBuilder,
    private userService: UserService,
    private toastrService: ToastrService,
  ) {
    const cart = cartService.getCart();
    this.order.item = cart.items;
    this.order.totalPrice = cart.totalPrice;
  }

  ngOnInit(): void {
    let {name, address} = this.userService.currentUser
    this.cheackoutForm = this.formBuilder.group({
      name: [name, Validators.required],
      address: [address, Validators.required]
    });
  }

  get fc() {
    return this.cheackoutForm.controls;
  }

  creatOrder() {
    if (this.cheackoutForm.invalid) {
      this.toastrService.warning('Please fill the inputs', 'Invalid Inputs');
      return;
    }

    this.order.name = this.fc.name.value;
    this.order.address = this.fc.address.value;

    console.log(this.order);
  }

}
