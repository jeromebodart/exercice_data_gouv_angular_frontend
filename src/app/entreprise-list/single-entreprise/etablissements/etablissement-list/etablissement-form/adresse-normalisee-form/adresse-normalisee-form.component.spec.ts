import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdresseNormaliseeFormComponent } from './adresse-normalisee-form.component';

describe('AdresseNormaliseeFormComponent', () => {
  let component: AdresseNormaliseeFormComponent;
  let fixture: ComponentFixture<AdresseNormaliseeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdresseNormaliseeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdresseNormaliseeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
