//Example 2

// class BaseDeDatos {
//     guardar(configuracion: Configuracion) {
//         console.log(`Guardando configuración con valor: ${configuracion.valor} en la base de datos`);
//     }
//     obtener(): Configuracion {
//         // Obtener de la Base de Datos.....
//         return new Configuracion("valor");
//     }
// }


// class GestorConfiguraciones {
//     db: BaseDeDatos;

//     constructor() {
//         this.db = new BaseDeDatos();
//     }

//     guardarConfiguracion(valor: string) {
//         const configuracion = new Configuracion(valor);
//         this.db.guardar(configuracion);
//     }

//     obtenerConfiguracion(): Configuracion {
//         return this.db.obtener();
//     }
// }

//Solución

class Configuracion {
    constructor(public valor: string) {}
}

interface Almacenamiento {
    guardar(configuracion: Configuracion): void;
    obtener(): Configuracion;
}

class BaseDeDatos implements Almacenamiento {
    guardar(configuracion: Configuracion) {
        console.log(`Guardando configuración con valor: ${configuracion.valor} en la base de datos`);
    }

    obtener(): Configuracion {
        // Obtener de la Base de Datos.....
        return new Configuracion("valor");
    }
}

class GestorConfiguraciones {
    almacenamiento: Almacenamiento;

    constructor(almacenamiento: Almacenamiento) {
        this.almacenamiento = almacenamiento;
    }

    guardarConfiguracion(valor: string) {
        const configuracion = new Configuracion(valor);
        this.almacenamiento.guardar(configuracion);
    }

    obtenerConfiguracion(): Configuracion {
        return this.almacenamiento.obtener();
    }
}

// Ejemplo de uso con BaseDeDatos como almacenamiento
const dbAlmacenamiento = new BaseDeDatos();
const gestor = new GestorConfiguraciones(dbAlmacenamiento);

gestor.guardarConfiguracion("nuevo_valor");
const configuracion = gestor.obtenerConfiguracion();
console.log(`Valor de configuración obtenido: ${configuracion.valor}`);