import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelefonlarComponent } from './telefonlar.component';

describe('TelefonlarComponent', () => {
  let component: TelefonlarComponent;
  let fixture: ComponentFixture<TelefonlarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelefonlarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelefonlarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
