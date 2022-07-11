import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarniComponent } from './carni.component';

describe('CarniComponent', () => {
  let component: CarniComponent;
  let fixture: ComponentFixture<CarniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
