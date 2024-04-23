import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Residente } from 'src/app/interfaces/residente';

const listadoResidentes: Residente[] = [
  {nombres: "Nicolas Alexander", apellidos:"Pino Arraño", rut:"18328156-9", edad:31, num_telefono:942860900, torre:14, departamento:1434},
  {nombres: "Katherine", apellidos:"Sanchez Valenzuela", rut:"18301071-8", edad:32, num_telefono:942939091, torre:14, departamento:1434},
];

@Component({
  selector: 'app-listado-residentes',
  templateUrl: './listado-residentes.component.html',
  styleUrls: ['./listado-residentes.component.css']
})
export class ListadoResidentesComponent implements OnInit, AfterViewInit{

  displayedColumns: string[] = ['nombres', 'apellidos', 'rut', 'edad', 'num_telefono', 'torre', 'departamento', 'acciones'];
  //Datasource de tipo MatTableDataSource que  usa interface Residente
  dataSource: MatTableDataSource<Residente>;

  //el signo de exclamacion es porque arroja error por no estar inicializado en el constructor
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(){
    //nueva instancia con datos de constante
    this.dataSource = new MatTableDataSource(listadoResidentes);
  }

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
    // console.log(filterValue)
  }

}
