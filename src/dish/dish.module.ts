import { Module } from '@nestjs/common';
import { DishService } from './services/dish/dish.service';
import { IngredientService } from './services/ingredient/ingredient.service';
import { DishController } from './controllers/dish/dish.controller';
import { IngredientController } from './controllers/ingredient/ingredient.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { DishSchema, IngredientSchema } from './schemas';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Dish', schema: DishSchema },
      { name: 'Ingredient', schema: IngredientSchema },
    ]),
  ],
  providers: [DishService, IngredientService],
  controllers: [DishController, IngredientController],
})
export class DishModule {}
