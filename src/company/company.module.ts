import { Module } from '@nestjs/common';
import { ContactService } from './services/contact/contact.service';
import { CompanyService } from './services/company/company.service';
import { BranchService } from './services/branch/branch.service';
import { ContactController } from './controllers/contact/contact.controller';
import { CompanyController } from './controllers/company/company.controller';
import { BranchController } from './controllers/branch/branch.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { BranchSchema, CompanySchema, ContactSchema } from './schemas';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Branch', schema: BranchSchema },
      { name: 'Company', schema: CompanySchema },
      { name: 'Contact', schema: ContactSchema },
    ]),
  ],
  providers: [ContactService, CompanyService, BranchService],
  controllers: [ContactController, CompanyController, BranchController],
})
export class CompanyModule {}
