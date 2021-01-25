import { TestBed } from '@angular/core/testing';

import { ProService } from './pro.service';

describe('ProService', () => {
  let service: ProService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
