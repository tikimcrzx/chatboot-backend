import { ObjectId } from 'mongodb';

export interface CreateCompanyDTO {
  readonly name: string;
  readonly contact: ObjectId;
  readonly status: string;
}
