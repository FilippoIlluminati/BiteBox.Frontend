import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccediComponent } from './accedi.component';

describe('AccediComponent', () => {
  let component: AccediComponent;
  let fixture: ComponentFixture<AccediComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccediComponent]
    });
    fixture = TestBed.createComponent(AccediComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
