import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationsEtablissementFormComponent } from './informations-etablissement-form.component';

describe('InformationsEtablissementFormComponent', () => {
  let component: InformationsEtablissementFormComponent;
  let fixture: ComponentFixture<InformationsEtablissementFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformationsEtablissementFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationsEtablissementFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
