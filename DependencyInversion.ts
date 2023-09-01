//Example 1

// class Luz {
//     encender() {
//         console.log("Luz encendida");
//     }
//     apagar() {
//         console.log("Luz apagada");
//     }
// }

// class Interruptor {
//     private luz: Luz;

//     constructor(luz: Luz) {
//         this. luz = luz;
//     }

//     operar() {
//         //.. (alguna lógica para determinar si encender o apagar
//         this.luz.encender(); // o this.luz.apagar();
//     }
// }

//Solución

interface DispositivoIluminacion {
    encender(): void;
    apagar(): void;
}

class Luz implements DispositivoIluminacion {
    private encendida: boolean = false;

    encender() {
        if (!this.encendida) {
            console.log("Luz encendida");
            this.encendida = true;
        }
    }

    apagar() {
        if (this.encendida) {
            console.log("Luz apagada");
            this.encendida = false;
        }
    }
}

class Interruptor {
    private dispositivo: DispositivoIluminacion;

    constructor(dispositivo: DispositivoIluminacion) {
        this.dispositivo = dispositivo;
    }

    operar() {
        if (this.dispositivo instanceof Luz) {
            if (this.dispositivo['encendida']) {
                this.dispositivo.apagar();
            } else {
                this.dispositivo.encender();
            }
        }
    }
}

// Ejemplo de uso
const Luzejem = new Luz();
const Interruptorejem = new Interruptor(Luzejem);

Interruptorejem.operar(); // Enciende la luz
Interruptorejem.operar(); // Apaga la luz
