import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-github-page',
  templateUrl: './student-github-page.component.html',
  styleUrls: ['./student-github-page.component.css']
})
export class StudentGithubPageComponent implements OnInit {
  @Input() public url = '';

  constructor() { }

  ngOnInit() {
  }

}
