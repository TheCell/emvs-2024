import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-page',
  templateUrl: './student-page.component.html',
  styleUrls: ['./student-page.component.css']
})
export class StudentPageComponent implements OnInit {
  @Input() public url: string = '';

  constructor(private activatedRoute: ActivatedRoute) {
    // this.url = this.activatedRoute.snapshot.params['url'];
    // console.log(this.url);
  }

  ngOnInit() {
  }

}
