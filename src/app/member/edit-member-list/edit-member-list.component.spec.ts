import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMemberListComponent } from './edit-member-list.component';

describe('EditMemberListComponent', () => {
  let component: EditMemberListComponent;
  let fixture: ComponentFixture<EditMemberListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMemberListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMemberListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
