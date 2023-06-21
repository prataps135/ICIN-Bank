import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalAccountDetailsComponent } from './portal-account-details.component';

describe('PortalAccountDetailsComponent', () => {
  let component: PortalAccountDetailsComponent;
  let fixture: ComponentFixture<PortalAccountDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortalAccountDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortalAccountDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
