import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaracteristiquesEconomiquesEtablissementFormComponent } from './caracteristiques-economiques-etablissement-form.component';

describe('CaracteristiquesEconomiquesEtablissementFormComponent', () => {
  let component: CaracteristiquesEconomiquesEtablissementFormComponent;
  let fixture: ComponentFixture<CaracteristiquesEconomiquesEtablissementFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaracteristiquesEconomiquesEtablissementFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaracteristiquesEconomiquesEtablissementFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
