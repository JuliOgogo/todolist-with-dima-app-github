import axios from "axios";

const settings = {
    withCredentials: true,
    headers: {
        'api-key': '1be0657b-9ae5-4d5f-9112-827d776371f6'
    }
}

type TodolistType = {
    id: string
    addedDate: string
    order: number
    title: string
}

type ResponseType<D> = {
    resultCode: number
    messages: Array<string>
    fieldsErrors: Array<string>
    data: D
}

export const todolistApi = {
    getTodolists() {
        return axios.get<TodolistType[]>('https://social-network.samuraijs.com/api/1.1/todo-lists', settings)
    },
    createTodolist(title: string) {
        return axios.post<ResponseType<{ item: TodolistType }>>('https://social-network.samuraijs.com/api/1.1/todo-lists', {title: title}, settings)
    },
    deleteTodolist(todolistId: string) {
        return axios.delete<ResponseType<{}>>(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todolistId}`, settings)
    },
    updateTodolist(todolistId: string, title: string) {
        return axios.put<ResponseType<{}>>(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todolistId}`, {title: title}, settings)
    }
}