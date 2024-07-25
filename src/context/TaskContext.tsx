import { createContext } from "react";
import { Task, TaskState } from "../interfaces/tasks";

interface TaskContextProps {
  state: TaskState;
  getTasks: (date: string) => void;
  createTask: (task?: Task) => void;
  setTitle: (title: string) => void;
  setDescription: (description: string) => void;
  setDate: (date: string) => void;
  clearValues: () => void;
  //   editTask: () => void;
  //   deleteTask: () => void;
}

export const TaskContext = createContext<TaskContextProps>(
  {} as TaskContextProps
);
