import { Component, OnInit } from '@angular/core';
import { LaunchDataService } from './launch-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'spaceX-Launch-App';
  launchDetails: Array<any> = [];
  tempLaunchData: Array<any> = [];
  noData: boolean = false;
  isLoading: boolean = false;
  constructor(private launchService: LaunchDataService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.launchService.getAllLaunchDetails().subscribe((response: any) => {
      this.launchDetails = response;
      this.tempLaunchData = response;
      this.noData = this.launchDetails && this.launchDetails.length ? false : true;
      this.isLoading = false;
    }, err => {
      this.isLoading = false;
      console.log(err);
    });
  }

  filteredData(data: any): void {
    this.isLoading = true;
    this.noData = false;
    this.launchService.getLaunchDetailsByFilter(data).subscribe((response: any) => {
      this.launchDetails = response;
      this.noData = this.launchDetails && this.launchDetails.length ? false : true;
      this.isLoading = false;
    }, err => {
      this.isLoading = false;
      console.log(err);
    });
  }

  resetFilters(): void {
    this.noData = false;
    this.launchDetails = this.tempLaunchData;
  }
}
