import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegnalibroComponent } from './segnalibro.component';

describe('SegnalibroComponent', () => {
  let component: SegnalibroComponent;
  let fixture: ComponentFixture<SegnalibroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SegnalibroComponent]
    });
    fixture = TestBed.createComponent(SegnalibroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
