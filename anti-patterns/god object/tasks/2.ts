// class AirportSystem {
//     flights: any[] = [];
//     passengers: any[] = [];
//     crews: any[] = [];
//     planesMaintenance: any[] = [];
//     financialRecords: any[] = [];

//     // Métodos relacionados con vuelos
//     scheduleFlight(flight: any) {
//         this.flights.push(flight);
//     }

//     // Métodos relacionados con pasajeros
//     checkInPassenger(passenger: any) {
//         this.passengers.push(passenger);
//     }

//     // Métodos relacionados con tripulaciones
//     assignCrewToFlight(crew: any, flightID: string) {
//         this.crews.push({...crew, flightID});
//     }

//     // Métodos relacionados con el mantenimiento de aviones
//     logMaintenance(planeID: string, maintenance: any) {
//         this.planesMaintenance.push({planeID, ...maintenance});
//     }

//     // Métodos relacionados con facturación y contabilidad
//     recordFinancialTransaction(transaction: any) {
//         this.financialRecords.push(transaction);
//     }
// }



class FlightManager {
    flights: any[] = [];

    scheduleFlight(flight: any) {
        if (this.validateFlightData(flight)) {
            this.flights.push(flight);
        } else {
            console.error("Datos de vuelo no válidos");
        }
    }

    // Métodos de validación (puedes definir estos métodos)
    private validateFlightData(flight: any) {
        // Lógica de validación de datos de vuelo
        return true;
    }
}

class PassengerManager {
    passengers: any[] = [];

    checkInPassenger(passenger: any) {
        if (this.validatePassengerData(passenger)) {
            this.passengers.push(passenger);
        } else {
            console.error("Datos de pasajero no válidos");
        }
    }

    // Métodos de validación (puedes definir estos métodos)
    private validatePassengerData(passenger: any) {
        // Lógica de validación de datos de pasajero
        return true;
    }
}

class CrewManager {
    crews: any[] = [];

    assignCrewToFlight(crew: any, flightID: string) {
        if (this.validateCrewData(crew)) {
            this.crews.push({ ...crew, flightID });
        } else {
            console.error("Datos de tripulación no válidos");
        }
    }

    // Métodos de validación (puedes definir estos métodos)
    private validateCrewData(crew: any) {
        // Lógica de validación de datos de tripulación
        return true;
    }
}

class MaintenanceManager {
    planesMaintenance: any[] = [];

    logMaintenance(planeID: string, maintenance: any) {
        if (this.validateMaintenanceData(maintenance)) {
            this.planesMaintenance.push({ planeID, ...maintenance });
        } else {
            console.error("Datos de mantenimiento no válidos");
        }
    }

    // Métodos de validación (puedes definir estos métodos)
    private validateMaintenanceData(maintenance: any) {
        // Lógica de validación de datos de mantenimiento
        return true;
    }
}

class FinancialManager {
    financialRecords: any[] = [];

    recordFinancialTransaction(transaction: any) {
        if (this.validateTransactionData(transaction)) {
            this.financialRecords.push(transaction);
        } else {
            console.error("Datos de transacción financiera no válidos");
        }
    }

    // Métodos de validación (puedes definir estos métodos)
    private validateTransactionData(transaction: any) {
        // Lógica de validación de datos de transacción financiera
        return true;
    }
}

