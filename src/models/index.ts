import { User } from '@/models/entities/user';
import { Role } from '@/models/entities/role';
import { Module } from '@/models/entities/module';
import { Permission } from '@/models/entities/permission';
import { UserModulePermission } from '@/models/entities/user-module-permission';

export const entities = [User, Role, Module, Permission, UserModulePermission];
