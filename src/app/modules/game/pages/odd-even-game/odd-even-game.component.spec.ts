import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OddEvenGameComponent } from './odd-even-game.component';

describe('OddEvenGameComponent', () => {
  let component: OddEvenGameComponent;
  let fixture: ComponentFixture<OddEvenGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OddEvenGameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OddEvenGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
