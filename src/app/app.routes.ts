import { Routes } from '@angular/router';
import { Home } from '@features/home/pages/home/home';

export const routes: Routes = [
    { path: '',
    component: Home
  },

  {
    path: 'courses',
    loadChildren: () =>
      import('./features/course/courses.routes')
        .then(r => r.COURSES_ROUTES)
  },

  {
    path: '**',
    redirectTo: ''
  }
];
