import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserproComponent } from './userpro.component';

describe('UserproComponent', () => {
  let component: UserproComponent;
  let fixture: ComponentFixture<UserproComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserproComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
