import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StrinInterpolationComponent } from './strin-interpolation.component';

describe('StrinInterpolationComponent', () => {
  let component: StrinInterpolationComponent;
  let fixture: ComponentFixture<StrinInterpolationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StrinInterpolationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StrinInterpolationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
