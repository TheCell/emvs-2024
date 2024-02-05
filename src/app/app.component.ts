import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, SharedModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'emvs-2024';
  public abc = '';
  public showComponent = true;

  constructor() {
    // setInterval(() => {
    //   this.abc = `abc${Math.random()}`;
    // }, 500);
  }

  public bbqTitleClicked(): void {
    this.abc = 'bbq';
  }

  public toggleComponent(): void {
    this.showComponent = !this.showComponent;
  }
}
