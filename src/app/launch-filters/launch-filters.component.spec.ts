import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchFiltersComponent } from './launch-filters.component';

describe('LaunchFiltersComponent', () => {
  let component: LaunchFiltersComponent;
  let fixture: ComponentFixture<LaunchFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaunchFiltersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
