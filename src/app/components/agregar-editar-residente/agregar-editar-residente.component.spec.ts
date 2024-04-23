import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarEditarResidenteComponent } from './agregar-editar-residente.component';

describe('AgregarEditarResidenteComponent', () => {
  let component: AgregarEditarResidenteComponent;
  let fixture: ComponentFixture<AgregarEditarResidenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarEditarResidenteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarEditarResidenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
