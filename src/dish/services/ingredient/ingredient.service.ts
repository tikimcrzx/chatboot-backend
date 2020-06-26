import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Ingredient } from '../../schemas';
import { CreateIngredientDTO, UpdateIngredientDTO } from '../../input-dto';

@Injectable()
export class IngredientService {
  constructor(
    @InjectModel('Ingredient')
    private readonly _ingredientModel: Model<Ingredient>,
  ) {}

  async create(createIngredientDto: CreateIngredientDTO): Promise<Ingredient> {
    let ingredient: Ingredient;

    ingredient = await this._ingredientModel.findOne({
      ingredient: createIngredientDto.ingredient,
    });

    if (ingredient) throw new NotFoundException(`ingredient already exists`);
    else ingredient = await this._ingredientModel.create(createIngredientDto);

    return ingredient;
  }

  async findAll(): Promise<Ingredient[]> {
    return await this._ingredientModel.find().exec();
  }

  async findById(_id: string): Promise<Ingredient> {
    const ingredient: Ingredient = await this._ingredientModel.findById(_id);
    if (!ingredient)
      throw new NotFoundException(`ingredient id = ${_id} not found`);
    return ingredient;
  }

  async update(
    _id: String,
    updateIngredientDto: UpdateIngredientDTO,
  ): Promise<Ingredient> {
    const updatedIngredient: Ingredient = await this._ingredientModel.findById(
      _id,
    );
    if (!updatedIngredient)
      throw new NotFoundException(`ingredient id = ${_id} not found`);
    updatedIngredient.ingredient = updateIngredientDto.ingredient;
    updatedIngredient.save();

    return updatedIngredient;
  }

  async delete(_id: string): Promise<boolean> {
    const deletedIngredient: Ingredient = await this._ingredientModel.findById(
      _id,
    );
    if (!deletedIngredient)
      throw new NotFoundException(`ingredient id = ${_id} not found`);
    deletedIngredient.remove();
    return true;
  }
}
