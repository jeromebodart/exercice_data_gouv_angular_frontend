import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationsSiegeComponent } from './informations-siege.component';

describe('InformationsSiegeComponent', () => {
  let component: InformationsSiegeComponent;
  let fixture: ComponentFixture<InformationsSiegeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformationsSiegeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationsSiegeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
