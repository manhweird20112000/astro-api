import { User } from '@/models/entities/user';
import { Role } from '@/models/entities/role';
import { Module } from '@/models/entities/module';
import { Permission } from '@/models/entities/permission';
import { UserModulePermission } from '@/models/entities/user-module-permission';
import { Room, RoomSchema } from '@/models/schema/room';
import { ModelDefinition } from '@nestjs/mongoose/dist/interfaces';

export const entities = [User, Role, Module, Permission, UserModulePermission];

export const schemas: ModelDefinition[] = [
  {
    name: Room.name,
    schema: RoomSchema,
  },
];
