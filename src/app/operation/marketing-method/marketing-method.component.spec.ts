import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketingMethodComponent } from './marketing-method.component';

describe('MarketingMethodComponent', () => {
  let component: MarketingMethodComponent;
  let fixture: ComponentFixture<MarketingMethodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarketingMethodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketingMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
