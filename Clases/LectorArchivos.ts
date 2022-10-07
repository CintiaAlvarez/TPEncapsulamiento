import * as fs from 'fs';

export default class LectorArchivos {          //Va a mostrar el registro.txt

    private arregloString: string[];

    public constructor(txtFileLocation: string) {
        ​let archivoTxt: string = fs.readFileSync(txtFileLocation, 'utf-8'); 
        this.arregloString = archivoTxt.split(';');  //"objetos" separados por ;
    }

public mostrarArreglo(): void {
    console.log(this.arregloString);
    }
    ​
    public getArregloString(): string[] {
        return this.arregloString;
    }
}