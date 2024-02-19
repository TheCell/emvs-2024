import { Component, OnInit } from '@angular/core';
import { StudentGithubPageComponent } from '../shared/student-github-page/student-github-page.component';
import { SharedModule } from '../shared/shared.module';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
  standalone: true,
  imports: [SharedModule]
})
export class StudentListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
