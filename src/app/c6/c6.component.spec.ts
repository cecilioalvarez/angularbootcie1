import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C6Component } from './c6.component';

describe('C6Component', () => {
  let component: C6Component;
  let fixture: ComponentFixture<C6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [C6Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
