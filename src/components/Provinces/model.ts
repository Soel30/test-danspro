import { Schema, Document, Model, model } from "mongoose";
import mongooseUniqueValidator from "mongoose-unique-validator";

export interface IProvince extends Document {
  name: string;
  code: string;
  createdAt: Date;
  updatedAt: Date;
}

const ProvinceSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true
        unique: true
    }
}, {
    timestamps: true
});

ProvinceSchema.plugin(mongooseUniqueValidator);
export const Province: Model<IProvince> = model<IProvince>("Province", ProvinceSchema);