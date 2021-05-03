import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOffreRowComponent } from './view-offre-row.component';

describe('ViewOffreRowComponent', () => {
  let component: ViewOffreRowComponent;
  let fixture: ComponentFixture<ViewOffreRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewOffreRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewOffreRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
