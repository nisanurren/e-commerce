import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AyakkabiComponent } from './ayakkabi.component';

describe('AyakkabiComponent', () => {
  let component: AyakkabiComponent;
  let fixture: ComponentFixture<AyakkabiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AyakkabiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AyakkabiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
