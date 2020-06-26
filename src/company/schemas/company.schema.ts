import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ObjectId } from 'mongodb';
import {
  getAllCompanyStatus,
  CompanyStatus,
} from '../enums/company-status.enum';

export class Company extends Document {
  @Prop({ trim: true, required: true, maxlength: 100, unique: true })
  name: string;

  @Prop({ ref: 'Contact', required: true })
  contact: ObjectId;

  @Prop({ enum: getAllCompanyStatus(), default: CompanyStatus.ENABLED })
  status: string;
}

export const CompanySchema = SchemaFactory.createForClass(Company);
