import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdresseDeclareeFormComponent } from './adresse-declaree-form.component';

describe('AdresseDeclareeFormComponent', () => {
  let component: AdresseDeclareeFormComponent;
  let fixture: ComponentFixture<AdresseDeclareeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdresseDeclareeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdresseDeclareeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
