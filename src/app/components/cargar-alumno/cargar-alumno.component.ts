import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Alumno } from "../../classes/alumno";

@Component({
  selector: 'app-cargar-alumno',
  templateUrl: './cargar-alumno.component.html',
  styleUrls: ['./cargar-alumno.component.css']
})
export class CargarAlumnoComponent implements OnInit {

  @Output() onCargar = new EventEmitter<Alumno>();
  nombre;
  apellido;
  legajo;
  materia;

  constructor() { }

  ngOnInit(): void {
  }

  cargar(e){
    const alumno = new Alumno(this.nombre, this.apellido, this.legajo, this.materia);
    console.log(alumno);
    this.onCargar.emit(alumno);
  }
}