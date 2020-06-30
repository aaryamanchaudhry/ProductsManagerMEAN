import { TestBed } from '@angular/core/testing';

import { ExpressmongoService } from './expressmongo.service';

describe('ExpressmongoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExpressmongoService = TestBed.get(ExpressmongoService);
    expect(service).toBeTruthy();
  });
});
