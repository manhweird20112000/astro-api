import {
  HttpStatus,
  Injectable,
  NestMiddleware,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtAppService } from '@/infra/jwt/service';
import { Request, Response } from 'express';
import { ResponseData } from '@/utils/response-data';
import { Roles } from '@/constants';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(private readonly jwtService: JwtAppService) {}
  async use(
    req: Request,
    res: Response,
    next: (error?: any) => void,
  ): Promise<any> {
    const headers = req.headers['authorization'];

    if (!headers) {
      throw new UnauthorizedException(
        new ResponseData(null, HttpStatus.UNAUTHORIZED, ''),
      );
    }
    const token = headers.split(' ')[1];
    if (!token) {
      throw new UnauthorizedException(
        new ResponseData(null, HttpStatus.UNAUTHORIZED, ''),
      );
    }
    const isVerifyToken = await this.jwtService.verifyAsync(token);
    const admins = [Roles.Admin, Roles.SuperAdmin];
    if (!isVerifyToken?.id || !admins.includes(isVerifyToken.role)) {
      throw new UnauthorizedException(
        new ResponseData(null, HttpStatus.UNAUTHORIZED, ''),
      );
    }

    req['user_id'] = isVerifyToken.id;
    next();
  }
}
