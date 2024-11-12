import { Route, Routes } from '@angular/router';
import { ROUTES } from '../route';

export const routes: Routes = ROUTES.map(
  (r) =>
    ({
      path: r.path,
      component: r.page,
      data: {
        layout: r.layout || 'default',
      },
    } as Route)
);
