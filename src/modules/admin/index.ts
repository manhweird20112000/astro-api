import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AuthHttpModule } from '@/modules/admin/auth';
import { UserHttpModule } from '@/modules/admin/user';
import { AuthMiddleware } from '@/middlewares/auth.middleware';
import { JwtAppModule } from '@/infra/jwt';
import { MasterHttpModule } from '@/modules/admin/master-data';

@Module({
  imports: [JwtAppModule, AuthHttpModule, MasterHttpModule, UserHttpModule],
})
export class AdminModules implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer
      .apply(AuthMiddleware)
      .exclude({
        method: RequestMethod.POST,
        path: '/admin/auth/login',
      })
      .forRoutes('*');
  }
}
