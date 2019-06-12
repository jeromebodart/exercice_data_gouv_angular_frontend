import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationsSiegeFormComponent } from './informations-siege-form.component';

describe('InformationsSiegeFormComponent', () => {
  let component: InformationsSiegeFormComponent;
  let fixture: ComponentFixture<InformationsSiegeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformationsSiegeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationsSiegeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
