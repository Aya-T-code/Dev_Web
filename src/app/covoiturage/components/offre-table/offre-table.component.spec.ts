import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffreTableComponent } from './offre-table.component';

describe('OffreTableComponent', () => {
  let component: OffreTableComponent;
  let fixture: ComponentFixture<OffreTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffreTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffreTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
