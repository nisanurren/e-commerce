import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KazakComponent } from './kazak.component';

describe('KazakComponent', () => {
  let component: KazakComponent;
  let fixture: ComponentFixture<KazakComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KazakComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KazakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
