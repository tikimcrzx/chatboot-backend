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
import { ContactService } from '../../services/contact/contact.service';
import { CreateContactDTO, UpdateContactDTO } from '../../input-dto';
import { Response } from 'express';

@Controller('contact')
export class ContactController {
  constructor(private readonly _contactService: ContactService) {}

  @Post()
  async create(
    @Body() createContactDto: CreateContactDTO,
    @Res() res: Response,
  ) {
    const createdContact = await this._contactService.create(createContactDto);
    res.status(HttpStatus.CREATED).json(createdContact);
  }

  @Get()
  async findAll(@Res() res: Response) {
    const contacts = await this._contactService.findAll();
    res.status(HttpStatus.OK).json(contacts);
  }

  @Get(':id')
  async findById(@Param('id') id: string, @Res() res: Response) {
    const contact = await this._contactService.findById(id);
    res.status(HttpStatus.OK).json(contact);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateContactDto: UpdateContactDTO,
    @Res() res: Response,
  ) {
    const updatedContact = await this._contactService.update(
      id,
      updateContactDto,
    );
    res.status(HttpStatus.OK).json(updatedContact);
  }

  @Delete(':id')
  async delete(@Param('id') id: string, @Res() res: Response) {
    const deletedContact = await this._contactService.delete(id);
    res.status(HttpStatus.OK).json(deletedContact);
  }
}
