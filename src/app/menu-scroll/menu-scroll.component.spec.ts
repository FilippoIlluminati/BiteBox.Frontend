import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuScrollComponent } from './menu-scroll.component';

describe('MenuScrollComponent', () => {
  let component: MenuScrollComponent;
  let fixture: ComponentFixture<MenuScrollComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuScrollComponent]
    });
    fixture = TestBed.createComponent(MenuScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
