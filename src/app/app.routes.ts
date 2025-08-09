import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';
import { Settings } from './pages/settings/settings';
import { Profile } from './pages/profile/profile';
import { Projects } from './pages/projects/projects';
import { Courses } from './pages/courses/courses';
import { Plans } from './pages/plans/plans';
import { Friends } from './pages/friends/friends';
import { Files } from './pages/files/files';

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: Dashboard },
  { path: 'settings', component: Settings },
  { path: 'profile', component: Profile },
  { path: 'projects', component: Projects },
  { path: 'courses', component: Courses },
  { path: 'friends', component: Friends },
  { path: 'files', component: Files },
  { path: 'plans', component: Plans },
];
