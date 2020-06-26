import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Ingredient extends Document {
  @Prop({ required: true, unique: true })
  ingredient: string;
}

export const IngredientSchema = SchemaFactory.createForClass(Ingredient);
