import { TestBed } from '@angular/core/testing';

import { BasicAdvancedService } from './basic-advanced.service';

describe('BasicAdvancedService', () => {
  let service: BasicAdvancedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BasicAdvancedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
