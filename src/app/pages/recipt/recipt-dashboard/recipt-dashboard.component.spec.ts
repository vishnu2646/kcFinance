import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReciptDashboardComponent } from './recipt-dashboard.component';

describe('ReciptDashboardComponent', () => {
  let component: ReciptDashboardComponent;
  let fixture: ComponentFixture<ReciptDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReciptDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReciptDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
