import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReciptFormComponent } from './recipt-form.component';

describe('ReciptFormComponent', () => {
  let component: ReciptFormComponent;
  let fixture: ComponentFixture<ReciptFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReciptFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReciptFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
