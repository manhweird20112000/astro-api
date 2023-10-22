import 'reflect-metadata';
import { define } from 'typeorm-seeding';
import { User } from '../../models/entities/user';
import { randEmail, randFullName, randPassword } from '@ngneat/falso';

define(User, () => {
  const user = new User();
  user.email = randEmail();
  user.full_name = randFullName();
  user.password = randPassword();
  return user;
});
