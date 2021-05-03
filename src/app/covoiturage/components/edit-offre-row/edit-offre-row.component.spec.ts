import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditOffreRowComponent } from './edit-offre-row.component';

describe('EditOffreRowComponent', () => {
  let component: EditOffreRowComponent;
  let fixture: ComponentFixture<EditOffreRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditOffreRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditOffreRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
