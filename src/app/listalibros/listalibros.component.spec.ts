import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListalibrosComponent } from './listalibros.component';

describe('ListalibrosComponent', () => {
  let component: ListalibrosComponent;
  let fixture: ComponentFixture<ListalibrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListalibrosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListalibrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
