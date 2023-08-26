// EJERCICIO DADO

// class Libro3 {
//     titulo: string;
//     autor: string;
//     contenido: string;
//     tipo: string;

//     constructor(titulo: string, autor: string, contenido: string, tipo: string) {
//         this.titulo = titulo;
//         this.autor = autor;
//         this.contenido = contenido;
//         this.tipo = tipo;
//     }
    
//     mostrarDescripcion() {
//         if (this.tipo === 'texto') {
//             return `Libro de texto titulado "${this.titulo}" escrito por ${this.autor}`;
//         }
//     }
// }

//CORRECCION APLICANDO EL PRINCIPIO DE OPEN CLOSED
class Libro3 {
    titulo: string;
    autor: string;
    contenido: string;

    constructor(titulo: string, autor: string, contenido: string) {
        this.titulo = titulo;
        this.autor = autor;
        this.contenido = contenido;
    }

    mostrarDescripcion() {
        return `Libro titulado "${this.titulo}" escrito por ${this.autor}`;
    }
}

class LibroTexto extends Libro3 {
    mostrarDescripcion() {
        return `Libro de texto titulado "${this.titulo}" escrito por ${this.autor}`;
    }
}

// Otras clases para otros tipos de libros, como LibroNovela, LibroPoema, etc.

// Ejemplo de uso
const libroTexto = new LibroTexto("Matemáticas Avanzadas", "John Doe", "Contenido del libro...");
console.log(libroTexto.mostrarDescripcion());

