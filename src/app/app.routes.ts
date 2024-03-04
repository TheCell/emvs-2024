import { Routes } from '@angular/router';
import { StudentGithubPageComponent } from './shared/student-github-page/student-github-page.component';
import { ExampleAComponent } from './shared/example-a/example-a.component';
import { AppComponent } from './app.component';
import { ComponentsIntroductionComponent } from './components-introduction/components-introduction.component';
import { HomeComponent } from './home/home.component';
import { StudentListComponent } from './student-list/student-list.component';
import { AboutComponent } from './about/about.component';
import { StudentPageComponent } from './shared/student-page/student-page.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'students',
    component: StudentListComponent,
    children: [
      {
        path: ':studentName',
        component: StudentPageComponent
      },
      {
        path: '**',
        component: NotFoundComponent
      }
    ]
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
    path: 'login',
    component: LoginComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];
