import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearCatComponent } from './crear-cat.component';

describe('CrearCatComponent', () => {
  let component: CrearCatComponent;
  let fixture: ComponentFixture<CrearCatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearCatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
