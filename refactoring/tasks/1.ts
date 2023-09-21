// class Task {
//     title: string;
//     isCompleted: boolean;

//     constructor(title: string) {
//         this.title = title;
//         this.isCompleted = false;
//     }

//     completeTask() {
//         this.isCompleted = true;
//         console.log(`Task "${this.title}" has been completed.`);
//     }

//     printTaskDetails() {
//         console.log(`Task: ${this.title}, Status: ${this.isCompleted ? 'Completed' : 'Active'}`);
//     }
// }

// const myTask = new Task("Learn TypeScript");
// myTask.completeTask();
// myTask.printTaskDetails();




class Task {
    // Use public accessor to simplify property declaration
    constructor(public title: string, public isCompleted: boolean = false) {}
  
    completeTask() {
      this.isCompleted = true;
      this.logTaskStatus();
    }
  
    private logTaskStatus() {
      console.log(`Task "${this.title}" has been ${this.isCompleted ? 'completed' : 'marked as active'}.`);
    }
  
    printTaskDetails() {
      this.logTaskStatus();
    }
  }
  
  const myTask = new Task("Learn TypeScript");
  myTask.completeTask();
  myTask.printTaskDetails();
  