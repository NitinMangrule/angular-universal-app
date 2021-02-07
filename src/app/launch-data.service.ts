import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LaunchDataService {
  baseURL: string = 'https://api.spaceXdata.com/v3/launches?limit=100';
  constructor(private http: HttpClient) { }

  getAllLaunchDetails() {
    return this.http.get(this.baseURL);
  }

  getLaunchDetailsByFilter(filterData: any) {
    let updatedURL = '';
    switch (filterData.filterBy) {
      case 'filterByYear':
        updatedURL = this.baseURL + `&launch_year=${filterData.year}`;
        break;
      case 'filterByLaunch':
        updatedURL = this.baseURL + `&launch_success=${filterData.isLaunched}`;
        break;
      case 'filterByLanding':
        updatedURL = this.baseURL + `&launch_success=${filterData.isLaunched}&land_success=${filterData.isLanded}`;
        break;
      case 'filterByLaunchYear':
        updatedURL = this.baseURL + `&launch_year=${filterData.year}&launch_success=${filterData.isLaunched}`;
        break;
      default:
        updatedURL = this.baseURL + `&launch_year=${filterData.year}&launch_success=${filterData.isLaunched}&land_success=${filterData.isLanded}`;
        break;
    }

    return this.http.get(updatedURL);
  }

}
