import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalisationGeographiqueComponent } from './localisation-geographique.component';

describe('LocalisationGeographiqueComponent', () => {
  let component: LocalisationGeographiqueComponent;
  let fixture: ComponentFixture<LocalisationGeographiqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalisationGeographiqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalisationGeographiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
