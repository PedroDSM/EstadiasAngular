import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearViewComponent } from './crear-view.component';

describe('CrearViewComponent', () => {
  let component: CrearViewComponent;
  let fixture: ComponentFixture<CrearViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
