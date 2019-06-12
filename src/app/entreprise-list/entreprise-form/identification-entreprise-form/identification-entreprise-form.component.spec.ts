import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentificationEntrepriseFormComponent } from './identification-entreprise-form.component';

describe('IdentificationEntrepriseFormComponent', () => {
  let component: IdentificationEntrepriseFormComponent;
  let fixture: ComponentFixture<IdentificationEntrepriseFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdentificationEntrepriseFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentificationEntrepriseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
