// class Cinema {
//     movies: any[] = [];
//     snacks: any[] = [];
//     tickets: any[] = [];
//     employees: any[] = [];

//     // Métodos relacionados con películas
//     addMovie(movie: any) {
//         this.movies.push(movie);
//     }

//     // Métodos relacionados con snacks
//     buySnack(snack: any) {
//         this.snacks.push(snack);
//     }

//     // Métodos relacionados con entradas
//     buyTicket(ticket: any) {
//         this.tickets.push(ticket);
//     }

//     // Métodos relacionados con empleados
//     hireEmployee(employee: any) {
//         this.employees.push(employee);
//     }
// }


class MovieManager {
    movies: any[] = [];

    addMovie(movie: any) {
        this.movies.push(movie);
    }
}

class SnackManager {
    snacks: any[] = [];

    buySnack(snack: any) {
        this.snacks.push(snack);
    }
}

class TicketManager {
    tickets: any[] = [];

    buyTicket(ticket: any) {
        this.tickets.push(ticket);
    }
}

class EmployeeManager {
    employees: any[] = [];

    hireEmployee(employee: any) {
        this.employees.push(employee);
    }
}
