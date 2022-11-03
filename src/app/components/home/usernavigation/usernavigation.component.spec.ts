import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsernavigationComponent } from './usernavigation.component';

describe('UsernavigationComponent', () => {
  let component: UsernavigationComponent;
  let fixture: ComponentFixture<UsernavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsernavigationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsernavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
