import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMarketingMethodComponent } from './new-marketing-method.component';

describe('NewMarketingMethodComponent', () => {
  let component: NewMarketingMethodComponent;
  let fixture: ComponentFixture<NewMarketingMethodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewMarketingMethodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewMarketingMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
