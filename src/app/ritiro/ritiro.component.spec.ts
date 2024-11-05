import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RitiroComponent } from './ritiro.component';

describe('RitiroComponent', () => {
  let component: RitiroComponent;
  let fixture: ComponentFixture<RitiroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RitiroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RitiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
