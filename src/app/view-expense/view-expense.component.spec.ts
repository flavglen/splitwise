import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ViewExpenseComponent } from './view-expense.component';

describe('ViewExpenseComponent', () => {
  let component: ViewExpenseComponent;
  let fixture: ComponentFixture<ViewExpenseComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewExpenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewExpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
