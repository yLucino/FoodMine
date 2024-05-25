import { model, Schema } from "mongoose";

export interface User {
  id: string;
  email: string;
  password: string;
  name: string;
  address: string;
  asAdmin: boolean;
  token: string;
}

export const UserSchema = new Schema<User>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  address: { type: String, required: true },
  asAdmin: { type: Boolean, required: true },
  token: { type: String, required: true }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true
  },
  toObject: {
    virtuals: true
  }
});

export const UserModel = model<User>('user', UserSchema);

