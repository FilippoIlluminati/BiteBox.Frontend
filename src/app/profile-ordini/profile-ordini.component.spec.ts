import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileOrdiniComponent } from './profile-ordini.component';

describe('ProfileOrdiniComponent', () => {
  let component: ProfileOrdiniComponent;
  let fixture: ComponentFixture<ProfileOrdiniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileOrdiniComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfileOrdiniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
