import { Component, OnInit } from '@angular/core';

import { Alumno } from "../../classes/alumno";

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent implements OnInit {

  mostrarCargar:boolean;
  mostrarListar:boolean;
  alumno:Alumno;
  listaAlumnos = [];

  constructor() {
  }

  ngOnInit(): void {
  }

  manejadoraCargar(){
    this.mostrarCargar = !this.mostrarCargar;
    this.mostrarListar = false;
  }

  manejadoraListar(){
    this.mostrarListar = !this.mostrarListar;
    this.mostrarCargar = false;
  }

  onCargar(alumno){
    console.log(alumno);
    this.listaAlumnos.push(alumno);
  }
}
