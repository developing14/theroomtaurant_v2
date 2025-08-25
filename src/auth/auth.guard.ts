import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor (private authService:AuthService){}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest()    

    let token = request.cookies.accessToken.accessToken
    
    if (!token) throw new UnauthorizedException('Token not found')

    this.authService.verifyToken(token)

    return true;
  }

}
