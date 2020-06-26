import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ObjectId } from 'mongodb';

@Schema()
export class Dish extends Document {
  @Prop({ required: true, trim: true, maxlength: 70, unique: true })
  name: string;

  @Prop({ ref: 'Ingredient', required: true })
  ingredients: ObjectId[];

  @Prop({ required: true })
  image: string;

  @Prop({ required: true })
  details: [{ size: string; price: number }];
}

export const DishSchema = SchemaFactory.createForClass(Dish);
