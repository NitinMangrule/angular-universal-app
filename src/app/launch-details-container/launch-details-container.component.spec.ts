import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchDetailsContainerComponent } from './launch-details-container.component';

describe('LaunchDetailsContainerComponent', () => {
  let component: LaunchDetailsContainerComponent;
  let fixture: ComponentFixture<LaunchDetailsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaunchDetailsContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchDetailsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
