/**Crea una clase Usuario que contenga un constructor que inicialice el nombre, primerapellido, segundoApellido y DNI, pasados por parámetro. 
 * Además También inicializará un userName y passWord.
 * 
 * Métodos:  
 * -> validarDni: Metodo accesible desde el exterior, recibe como entrada el DNI y devuelve true si está compuesto por 8 cifras y una letra mayuscula.
 * 
 * -> Getters y Setters para nombre, primerApellido, segundoApellido y DNI.*/

class Usuario {
    constructor(nombre, primerApellido, segundoApellido, DNI) {
        this.nombre = nombre;
        this.primerApellido = primerApellido;
        this.segundoApellido = segundoApellido;
        this.DNI = DNI;
        this.userName = this.constructor.crearUsuario(nombre, primerApellido, segundoApellido);
        this.passWord = this.constructor.crearPassword();
    }
    set nombre(nombre) { this._nombre = nombre; }
    get nombre() { return this._nombre }

    set primerApellido(primerApellido) { this._primerApellido = primerApellido; }
    get primerApellido() { return this._primerApellido }

    set segundoApellido(segundoApellido) { this._segundoApellido = segundoApellido; }
    get segundoApellido() { return this._segundoApellido }

    set DNI(DNI) { this._DNI = DNI; }
    get DNI() { return this._DNI }


    static crearUsuario(nombre, primerApellido, segundoApellido) {
        let pass = nombre.substr(0, 2) + primerApellido.substr(0, 2) + segundoApellido.substr(0, 2);
        pass += Math.round(Math.random() * (9999 - 1000) + 1000);
        return pass.toLowerCase();
    }
    static crearPassword() {
        let cadena = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        let pass = "", rnd, x;
        for (x = 0; x <= 8; x++) {
            rnd = Math.floor(Math.random() * (61 - 1)) + 1;
            pass += cadena.substr(rnd, 1);
        }
        return pass;
    }
    validarDni(DNI) {
        let letra = DNI.substr(8, 1);
        if (DNI.length != 9) return false;
        else {
            if (letra != letra.toUpperCase()) return false;
            else return true;
        }
    }
    mostrarUsuario() {
        document.write("Nombre: " + this.nombre);
        document.write("<br>Apellidos: " + this.primerApellido + " " + this.segundoApellido);
        document.write("<br>DNI: " + this.DNI);
        document.write("<br>User Name: " + this.userName);
        document.write("<br>Password: " + this.passWord);
    }
}

let u1 = new Usuario("Alejandro", "Alba", "Carretón", "11223344X");
u1.mostrarUsuario();