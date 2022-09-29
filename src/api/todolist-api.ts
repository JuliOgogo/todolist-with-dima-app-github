import axios from "axios";

const settings = {
    withCredentials: true,
    headers: {
        'api-key': '1be0657b-9ae5-4d5f-9112-827d776371f6'
    }
}

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    ...settings
})

type TodolistType = {
    id: string
    addedDate: string
    order: number
    title: string
}

type ResponseType<D = {}> = {
    resultCode: number
    messages: Array<string>
    fieldsErrors: Array<string>
    data: D
}

type TaskType = {
    description: string | null
    title: string
    status: number
    priority: number
    startDate: string | null
    deadline: string | null
    id: string
    todoListId: string
    order: number
    addedDate: string
}

export const todolistApi = {
    getTodolists() {
        return instance.get<TodolistType[]>('todo-lists')
    },
    createTodolist(title: string) {
        return instance.post<ResponseType<{ item: TodolistType }>>('todo-lists', {title: title})
    },
    deleteTodolist(todolistId: string) {
        return instance.delete<ResponseType>(`todo-lists/${todolistId}`)
    },
    updateTodolist(todolistId: string, title: string) {
        return instance.put<ResponseType>(`todo-lists/${todolistId}`, {title: title})
    },
    getTasks(todolistId: string) {
        return instance.get<TaskType[]>(`todo-lists/${todolistId}/tasks`)
    },
    deleteTask(todolistId: string, taskId: string) {
        return instance.delete(`todo-lists/${todolistId}/tasks/${taskId}`)
    },
    createTask(todolistId: string, title: string) {
        return instance.post(`todo-lists/${todolistId}/tasks`, {title: title})
    },
    updateTask(todolistId: string, taskId: string, title: string) {
        return instance.put(`todo-lists/${todolistId}/tasks/${taskId}`, {title: title})
    }
}