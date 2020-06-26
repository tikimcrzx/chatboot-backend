import { ObjectId } from 'mongodb';

export interface CreateDishDTO {
  readonly name: string;
  readonly ingredients: ObjectId[];
  readonly image: string;
  readonly details: [{ size: string; price: number }];
}
