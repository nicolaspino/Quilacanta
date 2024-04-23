import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoResidentesComponent } from './listado-residentes.component';

describe('ListadoResidentesComponent', () => {
  let component: ListadoResidentesComponent;
  let fixture: ComponentFixture<ListadoResidentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoResidentesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoResidentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
