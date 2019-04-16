import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelefonComponent } from './telefon.component';

describe('TelefonComponent', () => {
  let component: TelefonComponent;
  let fixture: ComponentFixture<TelefonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelefonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelefonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
