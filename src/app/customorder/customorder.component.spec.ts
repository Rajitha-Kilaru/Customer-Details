import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomorderComponent } from './customorder.component';

describe('CustomorderComponent', () => {
  let component: CustomorderComponent;
  let fixture: ComponentFixture<CustomorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomorderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
