import { TestBed } from '@angular/core/testing';

import { StructureViewsService } from './structure-views.service';

describe('StructureViewsService', () => {
  let service: StructureViewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StructureViewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
