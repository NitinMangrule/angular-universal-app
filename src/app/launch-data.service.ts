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
    let updatedURL = this.baseURL;
    if (filterData) {
      if (filterData.hasOwnProperty('year')) {
        updatedURL = updatedURL + `&launch_year=${filterData.year}`;
      }
      if (filterData.hasOwnProperty('isLaunched')) {
        updatedURL = updatedURL + `&launch_success=${filterData.isLaunched}`;
      }
      if (filterData.hasOwnProperty('isLanded')) {
        updatedURL = updatedURL + `&land_success=${filterData.isLanded}`;
      }
    }

    return this.http.get(updatedURL).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  handleError(error: any): any {
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
