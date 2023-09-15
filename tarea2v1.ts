/*Tarea 2
Expandamos aún más nuestro sistema para incorporar una funcionalidad de membresía y categorización de libros.
Requisitos:
1.	Membresías de usuario:
•	Tres tipos de membresías: Básico, Premium y Platino.
•	Básico: Puede pedir prestado un máximo de 2 libros a la vez.
•	Premium: Puede pedir prestado un máximo de 5 libros a la vez.
•	Platino: Puede pedir prestado un número ilimitado de libros.
2.	Categorización de libros:
•	Los libros se categorizan en Ficción, No Ficción, y Referencia.
•	Los libros de Referencia no se pueden prestar. Son solo para leer en la biblioteca.
3.	Historial de préstamos:
•	Mantener un registro de todos los préstamos que ha hecho un usuario, independientemente de si el libro ha sido devuelto o no.*/

enum MembershipType {
    Basic = "Basic",
    Premium = "Premium",
    Platinum = "Platinum",
}

enum BookCategory {
    Fiction = "Fiction",
    NonFiction = "NonFiction",
    Reference = "Reference",
}

class Book {
    constructor(
        public title: string,
        public author: string,
        public isLoaded: boolean = false,
        public isAvailable: boolean = true,
        public dueDate: Date | null = null,
        public category: BookCategory = BookCategory.Fiction // Por defecto, se asume ficción
    ) {}
}

class User {
    constructor(
        public userID: string,
        public name: string,
        public membership: MembershipType = MembershipType.Basic, // Por defecto, membresía básica
        public loanHistory: Book[] = [] // Historial de préstamos
    ) {}
}

interface ILoadManager {
    loadBook(book: Book, user: User): void;
    returnBook(book: Book): void;
    calculateFines(book: Book): number;
}
interface IErrorLogger {
    error(message: string): void;
}

interface IWarningLogger {
    warning(message: string): void;
}

interface IInfoLogger {
    info(message: string): void;
}

class ConsoleErrorLogger implements IErrorLogger {
    error(message: string): void {
        console.error(`Error: ${message}`);
    }
}

class ConsoleWarningLogger implements IWarningLogger {
    warning(message: string): void {
        console.warn(`Warning: ${message}`);
    }
}

class ConsoleInfoLogger implements IInfoLogger {
    info(message: string): void {
        console.info(`Info: ${message}`);
    }
}


class Library implements ILoadManager {
    private books: Book[] = [];
    private loadBooks: Map<string, User> = new Map();

    constructor(
        private errorLogger: IErrorLogger,
        private warningLogger: IWarningLogger,
        private infoLogger: IInfoLogger
    ) {}

    loadBook(book: Book, user: User): void {
        if (book.isLoaded) {
            console.warn('Book is already loaded');
            return;
        }

        // Verificar si el usuario tiene permitido pedir prestado más libros
        if (
            (user.membership === MembershipType.Basic && user.loanHistory.length >= 2) ||
            (user.membership === MembershipType.Premium && user.loanHistory.length >= 5)
        ) {
            console.warn('User has reached the maximum number of loans allowed.');
            return;
        }

        // Verificar si el libro de referencia no se puede prestar
        if (book.category === BookCategory.Reference) {
            console.warn('Reference books cannot be borrowed.');
            return;
        }

        // Set the due date 7 days from now
        const dueDate = new Date();
        dueDate.setDate(dueDate.getDate() + 7);

        book.isAvailable = false;
        book.dueDate = dueDate;
        this.loadBooks.set(book.title, user);
        book.isLoaded = true;
        user.loanHistory.push(book); // Registrar el préstamo en el historial del usuario

        console.log(`${user.name} (${user.userID}) has borrowed ${book.title}. Due date: ${dueDate}`);
    }

    returnBook(book: Book): void {
        if (!book.isLoaded) {
            console.warn('Book is not loaded');
            return;
        }

        const user = this.loadBooks.get(book.title);
        if (user) {
            const currentDate = new Date();
            const daysLate = Math.max(0, Math.floor((currentDate.getTime() - book.dueDate!.getTime()) / (1000 * 60 * 60 * 24)));
            const fines = this.calculateFines(book);

            if (fines > 0) {
                console.log(`${book.title} has been returned by ${user.name} (${user.userID}). User info: ${JSON.stringify(user)}. Days late: ${daysLate}. Fines: $${fines}`);
            } else {
                console.log(`${book.title} has been returned by ${user.name} (${user.userID}). User info: ${JSON.stringify(user)}. No fines.`);
            }

            book.isAvailable = true;
            book.isLoaded = false;
            book.dueDate = null;
            this.loadBooks.delete(book.title);
        } else {
            console.warn(`Book with title "${book.title}" has no associated user info.`);
        }
    }

    calculateFines(book: Book): number {
        if (!book.dueDate) {
            return 0;
        }

        const currentDate = new Date();
        const daysLate = Math.max(0, Math.floor((currentDate.getTime() - book.dueDate.getTime()) / (1000 * 60 * 60 * 24)));
        const dailyFine = 1; // $1 per day of delay
        return daysLate * dailyFine;
    }

    addBook(book: Book): void {
        this.infoLogger.info('Beginning book addition operation');
        this.books.push(book);
        this.infoLogger.info('Book added successfully');
    }

    validateBookTitle(book: Book, desiredTitle: string): void {
        if (book.title === desiredTitle) {
            this.infoLogger.info(`The book "${book.title}" has the correct title.`);
        } else {
            this.errorLogger.error(`The book "${book.title}" does not have the correct title.`);
        }
    }

    findBookByTitle(title: string): Book | undefined {
        this.infoLogger.info('Searching for a book by title');
        const book = this.books.find((book) => book.title === title);
        if (!book) {
            this.warningLogger.warning(`Book with title "${title}" not found.`);
        }
        return book;
    }
}
