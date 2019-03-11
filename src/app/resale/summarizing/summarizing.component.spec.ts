import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummarizingComponent } from './summarizing.component';

describe('SummarizingComponent', () => {
  let component: SummarizingComponent;
  let fixture: ComponentFixture<SummarizingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummarizingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummarizingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
