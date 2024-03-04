import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleAComponent } from './example-a/example-a.component';
import { ExampleBComponent } from './example-b/example-b.component';
import { ExampleCComponent } from './example-c/example-c.component';
import { StudentGithubPageComponent } from './student-github-page/student-github-page.component';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { ThemeTogglerComponent } from './theme-toggler/theme-toggler.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentPageComponent } from './student-page/student-page.component';

@NgModule({
  imports: [
    CommonModule,
    NgbAlertModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    ExampleAComponent,
    ExampleBComponent,
    ExampleCComponent,
    StudentGithubPageComponent,
    ThemeTogglerComponent,
    ContactFormComponent,
    StudentPageComponent
  ],
  exports: [
    ExampleAComponent,
    ExampleBComponent,
    ExampleCComponent,
    StudentGithubPageComponent,
    ThemeTogglerComponent,
    ContactFormComponent,
    StudentPageComponent
  ]
})
export class SharedModule { }
