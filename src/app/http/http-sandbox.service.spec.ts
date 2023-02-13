import { TestBed } from '@angular/core/testing';

import { HttpSandboxService } from './http-sandbox.service';

describe('HttpSandboxService', () => {
  let service: HttpSandboxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpSandboxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
