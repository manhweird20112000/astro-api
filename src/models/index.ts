import { User } from '@/models/entities/user';
import { Role } from '@/models/entities/role';
import { Room, RoomSchema } from '@/models/schema/room';
import { ModelDefinition } from '@nestjs/mongoose/dist/interfaces';
import { Equip } from '@/models/entities/equip';
import { Category } from '@/models/entities/category';
import { Mission } from '@/models/entities/mission';
import { UserMission } from '@/models/entities/user_mission';

export const entities = [User, Role, Equip, Category, Mission, UserMission];

export const schemas: ModelDefinition[] = [
  {
    name: Room.name,
    schema: RoomSchema,
  },
];
