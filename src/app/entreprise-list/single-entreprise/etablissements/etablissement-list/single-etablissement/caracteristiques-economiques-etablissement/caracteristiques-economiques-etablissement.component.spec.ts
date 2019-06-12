import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaracteristiquesEconomiquesEtablissementComponent } from './caracteristiques-economiques-etablissement.component';

describe('CaracteristiquesEconomiquesEtablissementComponent', () => {
  let component: CaracteristiquesEconomiquesEtablissementComponent;
  let fixture: ComponentFixture<CaracteristiquesEconomiquesEtablissementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaracteristiquesEconomiquesEtablissementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaracteristiquesEconomiquesEtablissementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
