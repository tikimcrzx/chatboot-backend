import { ObjectId } from 'mongodb';

export interface UpdateDishDTO {
  readonly name: string;
  readonly ingredients: ObjectId[];
  readonly image: string;
  readonly details: [{ size: string; price: number }];
}
