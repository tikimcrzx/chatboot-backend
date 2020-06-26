import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Contact extends Document {
  @Prop({ required: true, maxlength: 100, unique: true })
  name: string;

  @Prop({ required: true, maxlength: 20, unique: true })
  phone: string;
}

export const ContactSchema = SchemaFactory.createForClass(Contact);
