import { ENV } from "./services";

export const endpoints = {
    get_tasks: (userId: string | undefined = ENV.USER_ID, date: string): string => 
        `${ENV.BASE_URL}/Tasks/GetTasksByUserId?userId=${userId}&date=${date}`,
    create_task: () =>
        `${ENV.BASE_URL}/Tasks/CreateTask`,
    edit_task: (taskId: string) => 
        `${ENV.BASE_URL}/Tasks/CreateTask`,
    delete_task: (taskId: string) => 
        `${ENV.BASE_URL}/Tasks/DeleteTaskById`,
}