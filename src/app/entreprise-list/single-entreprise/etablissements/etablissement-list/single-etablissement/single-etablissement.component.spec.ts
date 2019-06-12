import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleEtablissementComponent } from './single-etablissement.component';

describe('SingleEtablissementComponent', () => {
  let component: SingleEtablissementComponent;
  let fixture: ComponentFixture<SingleEtablissementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleEtablissementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleEtablissementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
