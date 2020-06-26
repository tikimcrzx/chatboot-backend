import {
  Controller,
  Post,
  Body,
  Res,
  HttpStatus,
  Get,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { IngredientService } from '../../services/ingredient/ingredient.service';
import { CreateIngredientDTO, UpdateIngredientDTO } from '../../input-dto';
import { Response } from 'express';

@Controller('ingredient')
export class IngredientController {
  constructor(private readonly _ingredientService: IngredientService) {}

  @Post()
  async create(
    @Body() createIngredientDto: CreateIngredientDTO,
    @Res() res: Response,
  ) {
    const createdIngredient = await this._ingredientService.create(
      createIngredientDto,
    );
    res.status(HttpStatus.CREATED).json(createdIngredient);
  }

  @Get()
  async findAll(@Res() res: Response) {
    const ingredients = await this._ingredientService.findAll();
    res.status(HttpStatus.OK).json(ingredients);
  }

  @Get(':id')
  async findById(@Param('id') id: string, @Res() res: Response) {
    const ingredient = await this._ingredientService.findById(id);
    res.status(HttpStatus.OK).json(ingredient);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateIngredientDto: UpdateIngredientDTO,
    @Res() res: Response,
  ) {
    const updatedIngredient = await this._ingredientService.update(
      id,
      updateIngredientDto,
    );
    res.status(HttpStatus.OK).json(updatedIngredient);
  }

  @Delete(':id')
  async delete(@Param('id') id: string, @Res() res: Response) {
    const deletedIngredient = await this._ingredientService.delete(id);
    res.status(HttpStatus.OK).json(deletedIngredient);
  }
}
