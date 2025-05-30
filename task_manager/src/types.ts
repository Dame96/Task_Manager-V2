// Types and interfacees for Task and User 

// Defining the Task interface for the task manager application

export interface Task {
    id: string;
    title: string;
    description: string; 
    status: 'todo' | 'in-progress' | 'done';
    createdAt: Date;
};


// Defining the User type for the task manager app

export interface User {
    id: string;
    username: string;
    email: string;
    tasks?: string[]; // Array of task IDs associated with the user
};


// Defining the Authentication interface for user login and registration

