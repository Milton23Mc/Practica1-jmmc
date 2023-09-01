//Example 2

// interface Animal {
//     caminar(): void;
//     nadar(): void;
//     volar(): void;
//     hacerSonido(): void;
// }
// class Aguila implements Animal {
//     caminar() {
//         console.log("El 4guila camina lentamente");
//     }

//     nadar() {
//         throw new Error("El águila no puede nadar");
//     }

//     volar() {
//         console.log("El águila vuela alto en el cielo");
//     }

//     hacerSonido() {
//         console.log("El águila emite un sonido agudo");
//     }
// }

// class Tiburon implements Animal { 
//     caminar() {
//         throw new Error("El tiburón no puede caminar");
//     }
    
//     nadar() {
//         console.log("El tiburón nade rápidamente");
//     }

//     volar() {
//         throw new Error("El tiburón no puede volar");
//     }

//     hacerSonido() {
//         console.log("El tiburón no hace sonidos audibles fuera del agua");
//     }
// }

//Solución

interface Terrestre {
    caminar(): void;
}

interface Acuatico {
    nadar(): void;
}

interface Aereo {
    volar(): void;
}

interface SonidoAnimal {
    hacerSonido(): void;
}

class Aguila implements Aereo, SonidoAnimal {
    volar() {
        console.log("El águila vuela alto en el cielo");
    }

    hacerSonido() {
        console.log("El águila emite un sonido agudo");
    }
}

class Tiburon implements Acuatico, SonidoAnimal {
    nadar() {
        console.log("El tiburón nada rápidamente");
    }

    hacerSonido() {
        console.log("El tiburón no hace sonidos audibles fuera del agua");
    }
}

class Perro implements Terrestre, SonidoAnimal {
    caminar() {
        console.log("El perro camina por el suelo");
    }

    hacerSonido() {
        console.log("El perro ladra");
    }
}