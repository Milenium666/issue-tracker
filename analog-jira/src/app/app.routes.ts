import { Routes } from '@angular/router';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { IssueDetailPageComponent } from './components/issue-detail-page/issue-detail-page.component';
import { IssuesListPageComponent } from './components/issues-list-page/issues-list-page.component';
import { ProjectDetailPageComponent } from './components/project-detail-page/project-detail-page.component';
import { ProjectListPageComponent } from './components/project-list-page/project-list-page.component';
import { AdminCanMatchGuard } from './guards/admin.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/projects', pathMatch: 'full' },

  {
    path: 'projects',
    children: [
      { path: '', component: ProjectListPageComponent },
      { path: ':id/issues', component: IssuesListPageComponent },
      { path: ':id', component: ProjectDetailPageComponent },
    ],
  },

  { path: 'browse/:issueKey', component: IssueDetailPageComponent },

  {
    path: 'admin',
    canMatch: [AdminCanMatchGuard],
    children: [
      {
        path: 'users',
        loadComponent: () =>
          import('./components/admin-users-page/admin-users-page.component').then(
            (m) => m.AdminUsersPageComponent
          ),
      },
      {
        path: 'users/:id',
        loadComponent: () =>
          import('./components/user-detail-page/user-detail-page.component').then(
            (m) => m.UserDetailPageComponent
          ),
      },
    ],
  },

  { path: 'login', component: LoginPageComponent },

  { path: '**', component: NotFoundPageComponent },
];
