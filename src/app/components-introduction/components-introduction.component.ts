import { Component, OnInit, inject } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CommonModule, JsonPipe } from '@angular/common';
import { NgbCalendar, NgbDateStruct, NgbDatepicker, NgbDatepickerModule, NgbTimepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-components-introduction',
  templateUrl: './components-introduction.component.html',
  styleUrls: ['./components-introduction.component.css'],
  standalone: true,
  imports: [CommonModule, SharedModule, NgbDatepickerModule, FormsModule, JsonPipe]
})
export class ComponentsIntroductionComponent implements OnInit {
  public abc = '';
  public showComponent = true;
  public time = { hour: 13, minute: 30 };
  public today = inject(NgbCalendar).getToday();
  public model: NgbDateStruct;
  public date: { year: number; month: number };

  constructor() {
    this.model = { year: this.today.year, month: this.today.month, day: this.today.day };
    this.date = { year: this.today.year, month: this.today.month };
  }

  ngOnInit() {
  }

  public bbqTitleClicked(): void {
    this.abc = 'bbq';
  }

  public toggleComponent(): void {
    this.showComponent = !this.showComponent;
  }
}
