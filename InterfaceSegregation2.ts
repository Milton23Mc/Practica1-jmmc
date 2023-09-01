//Example 2
interface Animal {
    caminar(): void;
    nadar(): void;
    volar(): void;
    hacerSonido(): void;
}
class Aguila implements Animal {
    caminar() {
        console.log("El 4guila camina lentamente");
    }

    nadar() {
        throw new Error("El águila no puede nadar");
    }

    volar() {
        console.log("El águila vuela alto en el cielo");
    }

    hacerSonido() {
        console.log("El águila emite un sonido agudo");
    }
}

class Tiburon implements Animal { 
    caminar() {
        throw new Error("El tiburón no puede caminar");
    }
    
    nadar() {
        console.log("El tiburón nade rápidamente");
    }

    volar() {
        throw new Error("El tiburón no puede volar");
    }

    hacerSonido() {
        console.log("El tiburón no hace sonidos audibles fuera del agua");
    }
}