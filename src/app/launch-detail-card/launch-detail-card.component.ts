import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-launch-detail-card',
  templateUrl: './launch-detail-card.component.html',
  styleUrls: ['./launch-detail-card.component.css']
})
export class LaunchDetailCardComponent {
  @Input('launchData') launchData: any;
  constructor() { }
}
