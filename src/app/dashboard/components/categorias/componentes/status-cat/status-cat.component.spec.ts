import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusCatComponent } from './status-cat.component';

describe('StatusCatComponent', () => {
  let component: StatusCatComponent;
  let fixture: ComponentFixture<StatusCatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatusCatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
