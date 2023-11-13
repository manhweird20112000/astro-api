import 'reflect-metadata';
import { define } from 'typeorm-seeding';
import { User } from '../../models/entities/user';
import {
  randEmail,
  randFullName,
  randPassword,
  randPhoneNumber,
  randUserName,
} from '@ngneat/falso';
import bcrypt from 'bcrypt';
import { Roles } from '@/constants';

define(User, () => {
  const user = new User();
  user.email = randEmail();
  user.full_name = randFullName();
  user.password = bcrypt.hashSync(randPassword(), 10);
  user.username = randUserName();
  user.phone = randPhoneNumber({});
  user.role = Roles.Normal;
  return user;
});
