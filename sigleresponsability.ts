class Libro1 {
    titulo: string;
    autor: string;
    contenido: string;

    constructor(titulo: string, autor: string, contenido: string) {
        this.titulo = titulo;
        this.autor = autor;
        this.contenido = contenido;
    }
    mostrarContenido () {
        return this.contenido;
    }
    guardarEnBaseDeDatos () {
    // Código para guardar el libro en la base de datos
        console.log(`Guardando el libro ${this.titulo} en la base de datos...`);
    }
}
const libro1 = new Libro1('El principito', 'Antoine de Saint-Exupéry', 'Érase una vez...');
libro1.guardarEnBaseDeDatos();