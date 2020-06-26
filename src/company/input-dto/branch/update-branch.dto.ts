import { ObjectId } from 'mongodb';

export interface UpdateBranchDTO {
  readonly name: string;
  readonly company: ObjectId;
  readonly contact: ObjectId;
  readonly status: string;
  readonly menu: ObjectId[];
}
