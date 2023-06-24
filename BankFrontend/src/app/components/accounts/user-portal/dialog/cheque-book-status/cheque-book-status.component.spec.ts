import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChequeBookStatusComponent } from './cheque-book-status.component';

describe('ChequeBookStatusComponent', () => {
  let component: ChequeBookStatusComponent;
  let fixture: ComponentFixture<ChequeBookStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChequeBookStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChequeBookStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
