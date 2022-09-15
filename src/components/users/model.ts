import { Schema, Document, Model, model } from "mongoose";
import mongooseUniqueValidator from "mongoose-unique-validator";
import { mongoosePagination, Pagination } from "mongoose-paginate-ts";

export interface IUser extends Document {
  name: string;
  email: string;
  username: string;
  password: string;
  role: string;
  status: number;
  createdAt: Date;
  updatedAt: Date;
}

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
    },
    status: {
      type: Number,
      default: 1,
    },
  },
  { timestamps: true }
);

userSchema.plugin(mongooseUniqueValidator);
userSchema.plugin(mongoosePagination);

export const User: Pagination<IUser> = model<IUser, Pagination<IUser>>(
  "User",
  userSchema
);
