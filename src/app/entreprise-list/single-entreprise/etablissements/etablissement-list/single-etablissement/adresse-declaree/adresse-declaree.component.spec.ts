import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdresseDeclareeComponent } from './adresse-declaree.component';

describe('AdresseDeclareeComponent', () => {
  let component: AdresseDeclareeComponent;
  let fixture: ComponentFixture<AdresseDeclareeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdresseDeclareeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdresseDeclareeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
