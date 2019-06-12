import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalisationGeographiqueFormComponent } from './localisation-geographique-form.component';

describe('LocalisationGeographiqueFormComponent', () => {
  let component: LocalisationGeographiqueFormComponent;
  let fixture: ComponentFixture<LocalisationGeographiqueFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalisationGeographiqueFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalisationGeographiqueFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
