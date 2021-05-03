import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffreMainComponent } from './offre-main.component';

describe('OffreMainComponent', () => {
  let component: OffreMainComponent;
  let fixture: ComponentFixture<OffreMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffreMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffreMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
