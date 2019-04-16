import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BilgisayarComponent } from './bilgisayar.component';

describe('BilgisayarComponent', () => {
  let component: BilgisayarComponent;
  let fixture: ComponentFixture<BilgisayarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BilgisayarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BilgisayarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
