// class TodoManager {
//     private todos: string[] = [];

//     add(todo: string) {
//         this.todos.push(todo);
//         this.save();
//         this.render();
//     }

//     remove(index: number) {
//         this.todos.splice(index, 1);
//         this.save();
//         this.render();
//     }

//     private save() {
//         console.log("Saving todos to local storage...");
//         // Código para guardar todos en el almacenamiento local
//     }

//     private render() {
//         console.log("Rendering todos in the UI...");
//         // Código para renderizar todos en la UI
//     }
// }



class TodoManager {
    private todos: string[] = [];

    // Agregar una tarea
    add(todo: string) {
        if (this.validateInput(todo)) {
            this.todos.push(todo);
            this.saveToLocalStorage();
            this.renderUI();
        } else {
            console.error("Entrada no válida: Debe proporcionar una tarea no vacía.");
        }
    }

    // Eliminar una tarea por índice
    remove(index: number) {
        if (index >= 0 && index < this.todos.length) {
            this.todos.splice(index, 1);
            this.saveToLocalStorage();
            this.renderUI();
        } else {
            console.error("Índice de tarea no válido.");
        }
    }

    // Guardar la lista de tareas en el almacenamiento local
    private saveToLocalStorage() {
        try {
            localStorage.setItem("todos", JSON.stringify(this.todos));
            console.log("Tareas guardadas en el almacenamiento local.");
        } catch (error) {
            console.error("Error al guardar tareas en el almacenamiento local:", error);
        }
    }

    // Renderizar la lista de tareas en la interfaz de usuario
    private renderUI() {
        console.log("Renderizando tareas en la interfaz de usuario...");
        // Código para renderizar tareas en la interfaz de usuario
    }

    // Validar la entrada de tarea
    private validateInput(todo: string): boolean {
        return todo.trim() !== "";
    }
}
