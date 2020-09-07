import { Component, OnInit, Input } from '@angular/core';
import { Alumno } from "../../classes/alumno";

@Component({
  selector: 'app-listar-alumno',
  templateUrl: './listar-alumno.component.html',
  styleUrls: ['./listar-alumno.component.css']
})
export class ListarAlumnoComponent implements OnInit {

  @Input() listaAlumnos:Alumno[];

  constructor() { }

  ngOnInit(): void {
  }

}
