import { CanMatchFn, Router, UrlTree } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

export const AdminCanMatchGuard: CanMatchFn = (_route, _segments): boolean | UrlTree => {
  const auth = inject(AuthService);
  const router = inject(Router);

  const user = auth.getAuthedUser();
  if (!user) {
    return router.createUrlTree(['/login']);
  }

  if (user.role === 'admin' || user.role === 'teamlead') {
    return true;
  }

  return router.createUrlTree(['/projects']);
};
