import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMarketingMethodComponent } from './edit-marketing-method.component';

describe('EditMarketingMethodComponent', () => {
  let component: EditMarketingMethodComponent;
  let fixture: ComponentFixture<EditMarketingMethodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMarketingMethodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMarketingMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
