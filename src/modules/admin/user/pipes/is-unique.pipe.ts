import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { UserRepository } from '@/models/repository/user.repository';
import { Injectable } from '@nestjs/common';
import { ValidateType } from '@/constants';

@Injectable()
@ValidatorConstraint({ name: 'IsUnique', async: true })
export class IsUniquePipe implements ValidatorConstraintInterface {
  constructor(private repository: UserRepository) {}
  async validate(
    value: any,
    validationArguments?: ValidationArguments,
  ): Promise<boolean> {
    const filters: any = { [validationArguments.property]: value };
    const [user, isExist] = await Promise.all([
      this.repository.findByOne(filters),
      this.repository.findById(validationArguments.object['id'] || 0),
    ]);
    if (validationArguments?.constraints?.[0] === ValidateType.create) {
      return Promise.resolve(!Boolean(user));
    } else {
      if (user) {
        if (!isExist) {
          return Promise.resolve(true);
        } else {
          return Promise.resolve(user?.id === validationArguments.object['id']);
        }
      } else {
        return Promise.resolve(true);
      }
    }
  }
}
