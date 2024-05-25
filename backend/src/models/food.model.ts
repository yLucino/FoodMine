import { Schema, model } from "mongoose";

export interface Food {
  id: string;
  name: string;
  price: number;
  tags: string[];
  favorite: boolean;
  imageUrl: string;
  origins: string[];
  cookTime: string;
}

export const FoodSchema = new Schema<Food>(
  {
    // id: { type: String, required: true },
    name: { type: String, required: true},
    price: { type: Number, required: true},
    tags: { type: [String]},
    favorite: { type: Boolean, default: false},
    imageUrl: { type: String, required: true},
    origins: { type: [String], required: true},
    cookTime: { type: String, required: true},
  },{
    toJSON: {
      virtuals: true
    },
    toObject: {
      virtuals: true
    },
    timestamps: true
  }
);

export const FoodModel = model<Food>('food', FoodSchema);