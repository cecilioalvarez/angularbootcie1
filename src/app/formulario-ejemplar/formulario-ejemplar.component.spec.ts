import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioEjemplarComponent } from './formulario-ejemplar.component';

describe('FormularioEjemplarComponent', () => {
  let component: FormularioEjemplarComponent;
  let fixture: ComponentFixture<FormularioEjemplarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioEjemplarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioEjemplarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
