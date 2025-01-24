import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmzonPayComponent } from './amzon-pay.component';

describe('AmzonPayComponent', () => {
  let component: AmzonPayComponent;
  let fixture: ComponentFixture<AmzonPayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AmzonPayComponent]
    });
    fixture = TestBed.createComponent(AmzonPayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
