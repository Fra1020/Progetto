import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrittiComponent } from './fritti.component';

describe('FrittiComponent', () => {
  let component: FrittiComponent;
  let fixture: ComponentFixture<FrittiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrittiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrittiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
