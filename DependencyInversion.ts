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