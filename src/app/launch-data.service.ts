import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LaunchDataService {
  baseURL = 'https://api.spaceXdata.com/v3/launches?limit=100';
  constructor(private http: HttpClient) { }

  getAllLaunchDetails(): Observable<any> {
    return this.http.get(this.baseURL);
  }

  getLaunchDetailsByFilter(filterData: any): Observable<any> {
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

    return this.http.get(updatedURL).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

}
