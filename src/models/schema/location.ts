import { Prop } from '@nestjs/mongoose';

interface IPosition {
  latitude: number;
  longitude: number;
}
export class Location {
  @Prop()
  user_id: number;

  @Prop()
  mission_id: number;

  @Prop()
  position: IPosition;
}
