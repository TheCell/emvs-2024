import { Routes } from '@angular/router';
import { StudentGithubPageComponent } from './shared/student-github-page/student-github-page.component';
import { ExampleAComponent } from './shared/example-a/example-a.component';
import { AppComponent } from './app.component';
import { ComponentsIntroductionComponent } from './components-introduction/components-introduction.component';
import { HomeComponent } from './home/home.component';
import { StudentListComponent } from './student-list/student-list.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'students',
    component: StudentListComponent
  },
  {
    path: 'student-a',
    component: ExampleAComponent,
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'components-introduction',
    component: ComponentsIntroductionComponent
  },
  {
    path: '',
    redirectTo: 'student-a',
    pathMatch: 'full'
  },
];
