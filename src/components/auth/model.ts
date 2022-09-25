import { Schema, Document, Model, model } from "mongoose";
import mongooseUniqueValidator from "mongoose-unique-validator";
import { mongoosePagination, Pagination } from "mongoose-paginate-ts";
import { IUser } from "@components/users/model";

export interface TokenAuth extends Document {
  token: string;
  user: IUser;
  createdAt: Date;
  updatedAt: Date;
}

const tokenAuthSchema = new Schema(
  {
    token: {
      type: String,
      required: true,
      unique: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

tokenAuthSchema.plugin(mongooseUniqueValidator);
tokenAuthSchema.plugin(mongoosePagination);

export const TokenAuth: Model<TokenAuth> = model<TokenAuth>(
  "TokenAuth",
  tokenAuthSchema
);
