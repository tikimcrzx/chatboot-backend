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
import { DishService } from '../../services/dish/dish.service';
import { CreateDishDTO, UpdateDishDTO } from '../../input-dto';
import { Response } from 'express';

@Controller('dish')
export class DishController {
  constructor(private readonly _dishService: DishService) {}

  @Post()
  async create(@Body() createDishDto: CreateDishDTO, @Res() res: Response) {
    const createdDish = await this._dishService.create(createDishDto);
    res.status(HttpStatus.CREATED).json(createdDish);
  }

  @Get()
  async findAll(@Res() res: Response) {
    const dishes = await this._dishService.findAll();
    res.status(HttpStatus.OK).json(dishes);
  }

  @Get(':id')
  async findById(@Param('id') id: string, @Res() res: Response) {
    const dish = await this._dishService.findById(id);
    res.status(HttpStatus.OK).json(dish);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateDishDto: UpdateDishDTO,
    @Res() res: Response,
  ) {
    const updatedDish = await this._dishService.update(id, updateDishDto);
    res.status(HttpStatus.OK).json(updatedDish);
  }

  @Delete(':id')
  async delete(@Param('id') id: string, @Res() res: Response) {
    const deletedDish = await this._dishService.delete(id);
    res.status(HttpStatus.OK).json(deletedDish);
  }
}
