import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdresseGeographiqueComponent } from './adresse-geographique.component';

describe('AdresseGeographiqueComponent', () => {
  let component: AdresseGeographiqueComponent;
  let fixture: ComponentFixture<AdresseGeographiqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdresseGeographiqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdresseGeographiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
