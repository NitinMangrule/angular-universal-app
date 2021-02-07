import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchDetailCardComponent } from './launch-detail-card.component';

describe('LaunchDetailCardComponent', () => {
  let component: LaunchDetailCardComponent;
  let fixture: ComponentFixture<LaunchDetailCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaunchDetailCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchDetailCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
