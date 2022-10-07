import * as ReadlineSync from 'readline-sync';
import Vehiculo from './Vehiculo';

export default class RegistroAutomotor {
    private registro: Array<Vehiculo>;

    public constructor (registro: Array<Vehiculo>){
        this.registro = registro;
    }
    
    public getRegistroAutomotor(): Array<Vehiculo>{
        return this.registro;
    }
       //metodos para ver, agregar, modificar y eliminar vehiculos

    public verVehiculo() : void {
        let propiedadRegistro: string[] = Vehiculo.split(',');
        let tipo: string = propiedadRegistro[0];
        let marca: string = propiedadRegistro[1];
        let modelo: string = propiedadRegistro[3];
        let patente: number = Number(propiedadRegistro[4]);
        let nuevoVehiculo : Vehiculo = new Vehiculo(tipo,marca,modelo,patente);
    
        this.registro.push(nuevoVehiculo);
    }
    public agregarVehiculo() : void{
        let tipo: string = ReadlineSync.question("Ingrese el tipo de vehiculo: ");
        let marca: string = ReadlineSync.question("Ingrese la marca: ");
        let modelo: string = ReadlineSync.question("Ingrese el modelo: ");
        let patente: number = ReadlineSync.questionInt("Ingrese el número de patente: ");
        let nuevoVehiculo : Vehiculo = new Vehiculo(tipo,marca,modelo,patente);
    
        this.registro.push(nuevoVehiculo);
    }
    public eliminarVehiculo (posicion : number) : void {
        delete this.registro[posicion]
    }
    public modificarVehiculo (posicion : number) : void {
        let tipo: string = ReadlineSync.question("Ingrese el tipo de vehiculo: ");
        let marca: string = ReadlineSync.question("Ingrese la marca: ");
        let modelo: string = ReadlineSync.question("Ingrese el modelo: ");
        let patente: number = this.registro[posicion].getPatente();
        let vehiculoModificado : Vehiculo = new Vehiculo(tipo,marca,modelo,patente);
    
        delete this.registro[posicion];
        this.registro[posicion] = vehiculoModificado;
    }
}