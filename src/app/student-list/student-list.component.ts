import { Component, OnInit } from '@angular/core';
import { StudentGithubPageComponent } from '../shared/student-github-page/student-github-page.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
  standalone: true,
  imports: [SharedModule, RouterModule]
})
export class StudentListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
