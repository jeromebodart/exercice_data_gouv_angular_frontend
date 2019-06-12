import { TestBed } from '@angular/core/testing';

import { EtablissementsService } from './etablissements.service';

describe('EtablissementsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EtablissementsService = TestBed.get(EtablissementsService);
    expect(service).toBeTruthy();
  });
});
