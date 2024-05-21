import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayCheckComponent } from './pay-check.component';

describe('PayCheckComponent', () => {
  let component: PayCheckComponent;
  let fixture: ComponentFixture<PayCheckComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PayCheckComponent]
    });
    fixture = TestBed.createComponent(PayCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
