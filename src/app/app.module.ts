import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Componentes
import { AppComponent } from './app.component';
import { ListadoResidentesComponent } from './components/listado-residentes/listado-residentes.component';
import { AgregarEditarResidenteComponent } from './components/agregar-editar-residente/agregar-editar-residente.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    ListadoResidentesComponent,
    AgregarEditarResidenteComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
