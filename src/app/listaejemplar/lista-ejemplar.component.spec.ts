import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaEjemplarComponent } from './lista-ejemplar.component';

describe('ListaEjemplarComponent', () => {
  let component: ListaEjemplarComponent;
  let fixture: ComponentFixture<ListaEjemplarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaEjemplarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaEjemplarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
