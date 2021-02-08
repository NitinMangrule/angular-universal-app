import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-launch-details-container',
  templateUrl: './launch-details-container.component.html',
  styleUrls: ['./launch-details-container.component.css']
})
export class LaunchDetailsContainerComponent {
  @Input() data: any;
  constructor() { }
}
