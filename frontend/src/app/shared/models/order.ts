import { CartItem } from "./cart-item";

export class Order {
  id!: number;
  item!: CartItem[];
  totalPrice!: number;
  name!: string;
  address!: string;
  paymentId!: string;
  createdAt!: string;
  status!: string;
}