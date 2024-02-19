import { Component, OnDestroy, Renderer2 } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { GlobalInformationService } from '../global-information.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, HeaderComponent, SharedModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnDestroy {
  public title = 'emvs-2024';
  public abc = '';
  public showComponent = true;

  public subscription: Subscription = new Subscription();

  constructor(
    private renderer: Renderer2,
    globalInformationService: GlobalInformationService) {
      this.subscription.add(globalInformationService.colorTheme.subscribe((theme: string) => {
        this.renderer.setAttribute(document.querySelector('html'), 'data-bs-theme', theme);
      }));
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public bbqTitleClicked(): void {
    this.abc = 'bbq';
  }

  public toggleComponent(): void {
    this.showComponent = !this.showComponent;
  }
}
