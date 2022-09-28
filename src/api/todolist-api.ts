import axios from "axios";

const settings = {
    withCredentials: true,
    headers: {
        'api-key': '1be0657b-9ae5-4d5f-9112-827d776371f6'
    }
}

export const todolistApi = {
    getTodolists () {
        axios.get('https://social-network.samuraijs.com/api/1.1/todo-lists', settings)
    }
}