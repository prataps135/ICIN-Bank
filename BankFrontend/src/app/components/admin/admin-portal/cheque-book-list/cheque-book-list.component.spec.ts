import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChequeBookListComponent } from './cheque-book-list.component';

describe('ChequeBookListComponent', () => {
  let component: ChequeBookListComponent;
  let fixture: ComponentFixture<ChequeBookListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChequeBookListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChequeBookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
