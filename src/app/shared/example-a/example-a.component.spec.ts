/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ExampleAComponent } from './example-a.component';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

describe('ExampleAComponent', () => {
  let component: ExampleAComponent;
  let fixture: ComponentFixture<ExampleAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleAComponent ],
      imports: [NgbAlertModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
