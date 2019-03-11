import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleAccreditComponent } from './role-accredit.component';

describe('RoleAccreditComponent', () => {
  let component: RoleAccreditComponent;
  let fixture: ComponentFixture<RoleAccreditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoleAccreditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoleAccreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
