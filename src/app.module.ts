import { Module } from '@nestjs/common';
import { CompanyModule } from './company/company.module';
import { DishModule } from './dish/dish.module';
import { OrderModule } from './order/order.module';
import { RedirectModule } from './redirect/redirect.module';
import { MongooseModule } from '@nestjs/mongoose';
import { URI, connectionOptions } from './config/mongo.config';

@Module({
  imports: [
    MongooseModule.forRoot(URI, connectionOptions),
    CompanyModule,
    DishModule,
    OrderModule,
    RedirectModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
