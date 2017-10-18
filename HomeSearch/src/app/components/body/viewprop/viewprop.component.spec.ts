import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewpropComponent } from './viewprop.component';

describe('ViewpropComponent', () => {
  let component: ViewpropComponent;
  let fixture: ComponentFixture<ViewpropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewpropComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewpropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
