// TaskContenxt.tsx
import { createContext } from "react";
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from 'react';
import type { Task } from "../types";



interface TaskContextType {
    tasks: Task[];
    addTask: (task: Omit<Task, "id">) => void;
    updateTask: (id: string, updatedTask: Omit<Task, "id">) => void;
    deleteTask: (id: string) => void;
}


const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const TaskProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    const [tasks, setTasks] = useState<Task[]>(() => {
        const storedTasks = localStorage.getItem("tasks");
        return storedTasks ? JSON.parse(storedTasks) : [];
    });
    // saving tasks to local storage so they remain visible even if page refreshes
    // when component renders this useEffect hook will run and set the tasks (if any) to the task variable's value in a JSON object. 
    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    const generateId = () => Date.now().toString();

    const addTask = (newTask: Omit<Task, "id">) => {
        const taskWithId: Task = { id: generateId(), ...newTask };
        setTasks((prevTasks) => [...prevTasks, taskWithId]);
    };

    const updateTask = (id: string, updatedTask: Omit<Task, "id">) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === id ? { ...task, ...updatedTask } : task
            )
        );
    };

    const deleteTask = (id: string) => {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    };

    return (
        <TaskContext.Provider value={{ tasks: tasks, addTask, updateTask, deleteTask }}>
            {children}
        </TaskContext.Provider>
    );
};


export const useTasks = () => {
    const context = useContext(TaskContext);
    if (!context) {
        throw new Error("useTasks must be used within a TaskProvider");
    }
    return context;
};



