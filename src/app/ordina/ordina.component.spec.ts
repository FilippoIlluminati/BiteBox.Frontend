import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdinaComponent } from './ordina.component';

describe('OrdinaComponent', () => {
  let component: OrdinaComponent;
  let fixture: ComponentFixture<OrdinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrdinaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrdinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
