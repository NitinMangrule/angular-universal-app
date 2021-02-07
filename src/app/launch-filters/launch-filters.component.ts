import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-launch-filters',
  templateUrl: './launch-filters.component.html',
  styleUrls: ['./launch-filters.component.css']
})
export class LaunchFiltersComponent {
  launchYears = ['2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'];
  missionOutcome = [true, false];
  selectedYear: number;
  showFilter = false;
  selectedLaunchOutcome: number;
  selectedLandingOutcome: number;
  filterInput: any = {};
  @Output() getFilterData = new EventEmitter<any>();
  @Output() resetFilter = new EventEmitter<any>();
  constructor() { }

  filterByYear(index: number, year: string): void {
    this.selectedYear = index;
    this.filterInput.filterBy = 'filterByYear';
    this.filterInput.year = year;
    this.getFilterData.emit(this.filterInput);
    this.showFilter = true;
  }

  filterByLaunchType(index: number, type: boolean): void {
    this.selectedLaunchOutcome = index;
    this.filterInput.filterBy = this.filterInput.year ? 'filterByLaunchYear' : 'filterByLaunch';
    this.filterInput.isLaunched = type;
    this.getFilterData.emit(this.filterInput);
    this.showFilter = true;
  }

  filterByLandingType(index: number, type: boolean): void {
    this.selectedLandingOutcome = index;
    this.filterInput.filterBy = this.filterInput.year ? '' : 'filterByLanding';
    this.filterInput.isLaunched = true;
    this.selectedLaunchOutcome = 0;
    this.filterInput.isLanded = type;
    this.getFilterData.emit(this.filterInput);
    this.showFilter = true;
  }

  resetFilters(): void {
    this.selectedYear = null;
    this.selectedLaunchOutcome = null;
    this.selectedLandingOutcome = null;
    this.resetFilter.emit();
    this.filterInput = {};
    this.showFilter = false;
  }
}
