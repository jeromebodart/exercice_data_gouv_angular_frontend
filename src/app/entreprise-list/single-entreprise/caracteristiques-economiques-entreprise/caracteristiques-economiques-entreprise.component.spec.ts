import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaracteristiquesEconomiquesEntrepriseComponent } from './caracteristiques-economiques-entreprise.component';

describe('CaracteristiquesEconomiquesEntrepriseComponent', () => {
  let component: CaracteristiquesEconomiquesEntrepriseComponent;
  let fixture: ComponentFixture<CaracteristiquesEconomiquesEntrepriseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaracteristiquesEconomiquesEntrepriseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaracteristiquesEconomiquesEntrepriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
