"use strict";
exports.__esModule = true;
// librerias
var fs = require("fs");
var ReadlineSync = require("readline-sync");
var Vehiculo = /** @class */ (function () {
    function Vehiculo(tipo, marca, modelo, patente) {
        this.tipo = tipo;
        this.marca = marca;
        this.modelo = modelo;
        this.patente = patente;
    }
    Vehiculo.prototype.getTipo = function () {
        return this.tipo;
    };
    Vehiculo.prototype.getMarca = function () {
        return this.marca;
    };
    Vehiculo.prototype.getModelo = function () {
        return this.modelo;
    };
    Vehiculo.prototype.getPatente = function () {
        return this.patente;
    };
    return Vehiculo;
}());
// ------------------------------------------------- 
var RegistroAutomotor = /** @class */ (function () {
    function RegistroAutomotor(registro) {
        this.registro = registro;
    }
    RegistroAutomotor.prototype.getRegistroAutomotor = function () {
        return this.registro;
    };
    return RegistroAutomotor;
}());
//-------------------------------------------------
//arreglo "registro"
var registro = [];
// ------------------------------------------------
var LectorArchivos = /** @class */ (function () {
    function LectorArchivos(txtFileLocation) {
        var archivoTxt = fs.readFileSync(txtFileLocation, 'utf-8');
        this.arregloString = archivoTxt.split(';'); //"objetos" separados por ;
    }
    LectorArchivos.prototype.mostrarArreglo = function () {
        console.log(this.arregloString);
    };
    LectorArchivos.prototype.getArregloString = function () {
        return this.arregloString;
    };
    return LectorArchivos;
}());
//funciones para registrar, eliminar y modificar vehiculo
var registrarVehiculo = function (vehiculo, registro) {
    var propiedadRegistro = vehiculo.split(',');
    var tipo = propiedadRegistro[0];
    var marca = propiedadRegistro[1];
    var modelo = propiedadRegistro[3];
    var patente = Number(propiedadRegistro[4]);
    var nuevoVehiculo = new Vehiculo(tipo, marca, modelo, patente);
    registro.push(nuevoVehiculo);
};
var agregarVehiculo = function (registro) {
    var tipo = ReadlineSync.question("Ingrese el tipo de vehiculo: ");
    var marca = ReadlineSync.question("Ingrese la marca: ");
    var modelo = ReadlineSync.question("Ingrese el modelo: ");
    var patente = ReadlineSync.questionInt("Ingrese el número de patente: ");
    var nuevoVehiculo = new Vehiculo(tipo, marca, modelo, patente);
    registro.push(nuevoVehiculo);
};
var eliminarVehiculo;
(function (posicion) {
    delete registro[posicion];
});
var modificarVehiculo;
(function (posicion) {
    var tipo = ReadlineSync.question("Ingrese el tipo de vehiculo: ");
    var marca = ReadlineSync.question("Ingrese la marca: ");
    var modelo = ReadlineSync.question("Ingrese el modelo: ");
    var patente = registro[posicion].getPatente();
    var vehiculoModificado = new Vehiculo(tipo, marca, modelo, patente);
    delete registro[posicion];
    registro[posicion] = vehiculoModificado;
});
//---------------------------------------------------
//cargar vehiculos en vehiculos.txt
var listaDeVehiculos = new LectorArchivos("vehiculos.txt");
listaDeVehiculos.mostrarArreglo();
//cargar los vehiculos dentro de registro automotor
for (var i = 0; i < listaDeVehiculos.getArregloString().length; i++) {
    registrarVehiculo(listaDeVehiculos.getArregloString()[i], registro);
}
eliminarVehiculo(registro);
console.log(registro);
modificarVehiculo(registro);
console.log(registro);
