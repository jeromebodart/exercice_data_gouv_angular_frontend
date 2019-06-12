import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdresseGeographiqueFormComponent } from './adresse-geographique-form.component';

describe('AdresseGeographiqueFormComponent', () => {
  let component: AdresseGeographiqueFormComponent;
  let fixture: ComponentFixture<AdresseGeographiqueFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdresseGeographiqueFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdresseGeographiqueFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
