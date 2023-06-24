import { TestBed } from '@angular/core/testing';

import { ChequeBookService } from './cheque-book.service';

describe('ChequeBookService', () => {
  let service: ChequeBookService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChequeBookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
