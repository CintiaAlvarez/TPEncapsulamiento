export default class Vehiculo{
    static split(arg0: string): string[] {
        throw new Error('Method not implemented.');
    }
    private tipo: string;
    private marca: string;
    private modelo: string;
    private patente: number;
 
    public constructor (tipo: string, marca: string, modelo: string, patente: number){
        this.tipo = tipo;
        this.marca = marca;
        this.modelo = modelo;
        this.patente = patente;
    }
   
    public getTipo(): string{
        return this.tipo;
    }
         
    public getMarca(): string{
        return this.marca;
    }
 
    public getModelo(): string{
        return this.modelo;
    }
 
    public getPatente(): number{
        return this.patente;
    }
 }