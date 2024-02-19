import { Component, OnDestroy, OnInit } from '@angular/core';
import { GlobalInformationService } from '../../../global-information.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-theme-toggler',
  templateUrl: './theme-toggler.component.html',
  styleUrls: ['./theme-toggler.component.css']
})
export class ThemeTogglerComponent implements OnInit, OnDestroy {
  public isLightTheme: boolean = false;

  private subscription = new Subscription();

  constructor(private globalInformationService: GlobalInformationService) {

  }

  public ngOnInit() {
    this.subscription.add(
      this.globalInformationService.colorTheme.subscribe((theme) => {
        this.isLightTheme = theme === 'light';
      })
    );
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public toggleTheme(): void {
    this.globalInformationService.toggleTheme();
  }
}
