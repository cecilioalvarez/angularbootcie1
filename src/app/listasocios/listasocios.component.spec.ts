import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListasociosComponent } from './listasocios.component';

describe('ListasociosComponent', () => {
  let component: ListasociosComponent;
  let fixture: ComponentFixture<ListasociosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListasociosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListasociosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
