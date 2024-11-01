import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { catchError, switchMap, throwError } from 'rxjs';

export const AuthInterceptor: HttpInterceptorFn = (req, next) => {

  const usuariosService = inject(AuthService);

  const token = usuariosService.getToken();

  const authReq = req.clone({
    setHeaders: {
     // Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTczMDQ5NjkwMSwiZXhwIjoxNzMwNTgzMzAxfQ.alovO-GLR0l9JubsqCLVaEoMV89ds8R9mK7dFUuo42A"
     Authorization: "Bearer " + token
    }
  });

  return next(authReq).pipe();
};