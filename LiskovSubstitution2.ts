//Exmple 2

// class Rectangulo {
//     alto: number;
//     ancho: number;

//     constructor(alto: number, ancho: number) {
//         this.alto = alto;
//         this.ancho = ancho;
//     }
    
//     setAlto(value: number) {
//         this.alto = value;
//     }

//     setAncho(value: number) {
//         this.ancho = value;
//     }

//     area(): number {
//         return this.alto = this.ancho;
//     }
// }

// class Cuadrado extends Rectangulo {
//     constructor(lado: number) {
//         super(lado,lado);
//     }

//     setAlto(value: number) {
//         this.alto = value;
//         this.ancho = value;
//     }

//     setAncho(value: number) {
//         this.ancho = value;
//         this.alto = value;
//     }
// }


//Solución

class Figura {
    alto: number;
    ancho: number;

    constructor(alto: number, ancho: number) {
        this.alto = alto;
        this.ancho = ancho;
    }

    area(): number {
        return this.alto * this.ancho;
    }
}

class Rectangulo extends Figura {
    constructor(alto: number, ancho: number) {
        super(alto, ancho);
    }
}

class Cuadrado extends Figura {
    constructor(lado: number) {
        super(lado, lado);
    }
}
