import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationsEtablissementComponent } from './informations-etablissement.component';

describe('InformationsEtablissementComponent', () => {
  let component: InformationsEtablissementComponent;
  let fixture: ComponentFixture<InformationsEtablissementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformationsEtablissementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationsEtablissementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
