// -Mostrar en un log de info, toda la informacion del usuario que se esta prestando un libro
// -Mostrar en un log de info toda la informacion del usuario que esta retornando un libro
// Tip:Debe mostrar el objeto completo del usuario
class Book {
    constructor(
        public title: string,
        public author: string,
        public isLoaded: boolean = false,
        public isAvailable: string
    ) {}
}

class User {
    constructor(public userID: string, public name: string) {}
}

interface ILoadManager {
    loadBook(book: Book, user: User): void;
    returnBook(book: Book): void;
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
            this.warningLogger.warning('Book is already loaded');
            return;
        }

        this.loadBooks.set(book.isAvailable, user);
        book.isLoaded = true;
        this.infoLogger.info(`${user.name} (${user.userID}) has borrowed ${book.title}. User info: ${JSON.stringify(user)}`);
    }

    returnBook(book: Book): void {
        if (!book.isLoaded) {
            this.warningLogger.warning('Book is not loaded');
            return;
        }

        const user = this.loadBooks.get(book.isAvailable);
        if (user) {
            this.loadBooks.delete(book.isAvailable);
            book.isLoaded = false;
            this.infoLogger.info(`${book.title} has been returned by ${user.name} (${user.userID}). User info: ${JSON.stringify(user)}`);
        } else {
            this.warningLogger.warning(`Book with title "${book.title}" has no associated user info.`);
        }
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
