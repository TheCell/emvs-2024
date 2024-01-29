import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleAComponent } from './example-a/example-a.component';
import { ExampleBComponent } from './example-b/example-b.component';
import { ExampleCComponent } from './example-c/example-c.component';
import { StudentGithubPageComponent } from './student-github-page/student-github-page.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ExampleAComponent,
    ExampleBComponent,
    ExampleCComponent,
    StudentGithubPageComponent
  ],
  exports: [
    ExampleAComponent,
    ExampleBComponent,
    ExampleCComponent,
    StudentGithubPageComponent
  ]
})
export class SharedModule { }