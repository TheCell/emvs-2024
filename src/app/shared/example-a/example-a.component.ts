import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-example-a',
  templateUrl: './example-a.component.html',
  styleUrls: ['./example-a.component.css']
})
export class ExampleAComponent implements OnInit {
  @Input() public customName = '';
  @Output() public titleClicked = new EventEmitter<void>();

  public title = 'Example A';
  public myvar = 1;
  public myArr = [1, 2, 3, 4, 5];

  constructor() {
    // setInterval(() => {
    //   this.myvar = Math.random() * 5;
    //   console.log('myvar', this.myvar);
    // }, 1000);
  }

  ngOnInit() {
  }

}
