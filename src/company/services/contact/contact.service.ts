import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Contact } from 'src/company/schemas';
import { CreateContactDTO, UpdateContactDTO } from 'src/company/input-dto';

@Injectable()
export class ContactService {
  constructor(
    @InjectModel('Contact') private readonly _contactModel: Model<Contact>,
  ) {}

  async create(createContactDto: CreateContactDTO): Promise<Contact> {
    let contact: Contact;

    contact = await this._contactModel.findOne({
      $or: [{ name: createContactDto.name }, { phone: createContactDto.phone }],
    });

    if (contact) throw new NotFoundException(`contact already exists`);
    else contact = await this._contactModel.create(createContactDto);
    return contact;
  }

  async findAll(): Promise<Contact[]> {
    return await this._contactModel.find().exec();
  }

  async findById(_id: string): Promise<Contact> {
    const contact: Contact = await this._contactModel.findById(_id);
    if (!contact) throw new NotFoundException(`contact id = ${_id} not found`);
    return contact;
  }

  async update(
    _id: string,
    updateContactDto: UpdateContactDTO,
  ): Promise<Contact> {
    const updatedContact: Contact = await this._contactModel.findById(_id);
    if (!updatedContact)
      throw new NotFoundException(`contact id = ${_id} not found`);
    updatedContact.name = updateContactDto.name;
    updatedContact.phone = updateContactDto.phone;
    updatedContact.save();
    return updatedContact;
  }

  async delete(_id: string): Promise<boolean> {
    const deletedContact: Contact = await this._contactModel.findById(_id);
    if (!deletedContact)
      throw new NotFoundException(`contact id = ${_id} not found`);
    deletedContact.remove();
    return true;
  }
}
