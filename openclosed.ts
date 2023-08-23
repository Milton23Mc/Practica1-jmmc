class Libro3 {
    titulo: string;
    autor: string;
    contenido: string;
    tipo: string;

    constructor(titulo: string, autor: string, contenido: string, tipo: string) {
        this.titulo = titulo;
        this.autor = autor;
        this.contenido = contenido;
        this.tipo = tipo;
    }
    
    mostrarDescripcion() {
        if (this.tipo === 'texto') {
            return `Libro de texto titulado "${this.titulo}" escrito por ${this.autor}`;
        }
    }
}