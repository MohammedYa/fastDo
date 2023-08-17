import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StagnantComponent } from './stagnant.component';

describe('StagnantComponent', () => {
  let component: StagnantComponent;
  let fixture: ComponentFixture<StagnantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StagnantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StagnantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
