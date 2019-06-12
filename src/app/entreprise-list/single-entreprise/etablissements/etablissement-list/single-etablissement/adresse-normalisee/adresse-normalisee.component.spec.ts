import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdresseNormaliseeComponent } from './adresse-normalisee.component';

describe('AdresseNormaliseeComponent', () => {
  let component: AdresseNormaliseeComponent;
  let fixture: ComponentFixture<AdresseNormaliseeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdresseNormaliseeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdresseNormaliseeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
