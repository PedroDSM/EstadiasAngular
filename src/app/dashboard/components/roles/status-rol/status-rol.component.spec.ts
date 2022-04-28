import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusRolComponent } from './status-rol.component';

describe('StatusRolComponent', () => {
  let component: StatusRolComponent;
  let fixture: ComponentFixture<StatusRolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatusRolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusRolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
