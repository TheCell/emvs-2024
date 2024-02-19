import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { GlobalInformationService } from '../../global-information.service';
import { ThemeTogglerComponent } from '../shared/theme-toggler/theme-toggler.component';
import { SharedModule } from '../shared/shared.module';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: true,
  imports: [RouterLink, SharedModule]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  public ngOnInit() {

  }

}
