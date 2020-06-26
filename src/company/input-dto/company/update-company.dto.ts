import { ObjectId } from 'mongodb';

export interface UpdateCompanyDTO {
  readonly name: string;
  readonly contact: ObjectId;
  readonly status: string;
}
