export class Alumno {
    nombre:string;
    apellido:string;
    legajo:number;
    materia:string;

    constructor(nombre:string, apellido:string, legajo:number, materia:string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.legajo = legajo;
        this.materia = materia;
    }
}