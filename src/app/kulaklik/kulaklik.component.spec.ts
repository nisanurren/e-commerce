import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KulaklikComponent } from './kulaklik.component';

describe('KulaklikComponent', () => {
  let component: KulaklikComponent;
  let fixture: ComponentFixture<KulaklikComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KulaklikComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KulaklikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
