import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Dish } from '../../schemas';
import { CreateDishDTO, UpdateDishDTO } from '../../input-dto';

@Injectable()
export class DishService {
  constructor(@InjectModel('Dish') private readonly _dishModel: Model<Dish>) {}

  async create(createDishDto: CreateDishDTO): Promise<Dish> {
    let dish: Dish;

    dish = await this._dishModel.findOne({ name: createDishDto.name });

    if (dish) throw new NotFoundException(`dish already exists`);
    else dish = await this._dishModel.create(createDishDto);

    return dish;
  }

  async findAll(): Promise<Dish[]> {
    return await this._dishModel
      .find()
      .populate({
        path: 'ingredients',
        model: 'Ingredient',
        select: 'ingredient',
      })
      .exec();
  }

  async findById(_id: string): Promise<Dish> {
    const dish: Dish = await this._dishModel
      .findById(_id)
      .populate({
        path: 'ingredients',
        model: 'Ingredient',
        select: 'ingredient',
      })
      .exec();
    if (!dish) throw new NotFoundException(`dish id = ${_id} not found`);
    return dish;
  }

  async update(_id: string, updateDishDto: UpdateDishDTO): Promise<Dish> {
    const updatedDish: Dish = await this._dishModel.findById(_id);

    if (!updatedDish) throw new NotFoundException(`dish id = ${_id} not found`);

    updatedDish.details = updateDishDto.details;
    updatedDish.image = updateDishDto.image;
    updatedDish.ingredients = updateDishDto.ingredients;
    updatedDish.name = updateDishDto.name;

    updatedDish.save();

    return updatedDish;
  }

  async delete(_id: string): Promise<boolean> {
    const deletedDish: Dish = await this._dishModel.findById(_id);
    if (!deletedDish) throw new NotFoundException(`dish id = ${_id} not found`);
    deletedDish.remove();
    return true;
  }
}
