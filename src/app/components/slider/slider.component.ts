import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {

  @Input()
  public welcomeText: string | undefined;
  @Input()
  public size: string | undefined;

  constructor() {

  }

}
