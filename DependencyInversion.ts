//Example 1
class Luz {
    encender() {
        console.log("Luz encendida");
    }
    apagar() {
        console.log("Luz apagada");
    }
}

class Interruptor {
    private luz: Luz;

    constructor(luz: Luz) {
        this. luz = luz;
    }

    operar() {
        //.. (alguna lógica para determinar si encender o apagar
        this.luz.encender(); // o this.luz.apagar();
    }
}




class BaseDeDatos {
    guardar(configuracion: Configuracion) {
        console.log(`Guardando configuración con valor: ${configuracion.valor} en la base de datos`);
    }
    obtener(): Configuracion {
        // Obtaner de la Base de Datos.....
        return new Configuracion("valor");
    }
}


class GestorConfiguraciones {
    db: BaseDeDatos;

    constructor() {
        this.db = new BaseDeDatos();
    }

    guardarConfiguracion(valor: string) {
        const configuracion = new Configuracion(valor);
        this.db.guardar(configuracion);
    }

    obtenerConfiguracion(): Configuracion {
        return this.db.obtener();
    }
}