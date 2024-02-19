import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

type Theme = 'light' | 'dark';

@Injectable({
  providedIn: 'root'
})
export class GlobalInformationService {
  public colorTheme: ReplaySubject<Theme> = new ReplaySubject(1);
  private currentTheme: Theme = 'dark';

  public constructor() {
    this.colorTheme.next(this.currentTheme);
  }

  public toggleTheme(): void {
    this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    this.colorTheme.next(this.currentTheme);
  }
}
