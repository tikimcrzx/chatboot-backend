import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ObjectId } from 'mongodb';
import { getAllBranchStatus, BranchStatus } from '../enums/branch-status.enum';

@Schema()
export class Branch extends Document {
  @Prop({ required: true, trim: true, maxlength: 50, unique: true })
  name: string;

  @Prop({ ref: 'Company', required: true, unique: true })
  company: ObjectId;

  @Prop({ ref: 'Contact', required: true, unique: true })
  contact: ObjectId;

  @Prop({ ref: 'Dish', required: true })
  menu: ObjectId[];

  @Prop({ enum: getAllBranchStatus(), default: BranchStatus.ENABLED })
  status: string;
}

export const BranchSchema = SchemaFactory.createForClass(Branch);
