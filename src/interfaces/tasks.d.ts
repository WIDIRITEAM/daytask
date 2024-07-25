export interface Task  {
    id?: string 
    userId?: string 
    title?: string 
    description?: string 
    isDone?: boolean 
    day?: string 
}

//types
export interface TaskState {
    data: Task[],
    task: Task,
    loading: boolean,
    taskCreated: boolean,
    selectedDay: string,
    calendarLoading: boolean
}