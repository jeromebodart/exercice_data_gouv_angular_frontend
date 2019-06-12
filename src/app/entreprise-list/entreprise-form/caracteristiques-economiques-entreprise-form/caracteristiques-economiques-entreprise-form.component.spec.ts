import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaracteristiquesEconomiquesEntrepriseFormComponent } from './caracteristiques-economiques-entreprise-form.component';

describe('CaracteristiquesEconomiquesEntrepriseFormComponent', () => {
  let component: CaracteristiquesEconomiquesEntrepriseFormComponent;
  let fixture: ComponentFixture<CaracteristiquesEconomiquesEntrepriseFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaracteristiquesEconomiquesEntrepriseFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaracteristiquesEconomiquesEntrepriseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
