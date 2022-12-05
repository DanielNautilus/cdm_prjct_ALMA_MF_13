import {Component, HostBinding} from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {
  @HostBinding('class.wrapper__content') nameElement = true
  @HostBinding('class.information') nameBlock = true
}
