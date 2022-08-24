import {FilterValuesType, TasksStateType, TodolistType} from '../App';
import {v1} from 'uuid';

export type removeTaskActionType = {
    type: 'REMOVE-TASK'
    todolistId: string
    taskId: string
}
export type addTaskActionType = {
    type: 'ADD-TASK'
    title: string
    todolistId: string
}

type ActionsType = removeTaskActionType | addTaskActionType;

export const tasksReducer = (state: TasksStateType, action: ActionsType): TasksStateType => {
    switch (action.type) {
        case "REMOVE-TASK": {
            const stateCopy = {...state}
            const tasks = stateCopy[action.todolistId]
            const filteredTasks = tasks.filter(t => t.id !== action.taskId)
            stateCopy[action.todolistId] = filteredTasks
            return stateCopy
        }
        case "ADD-TASK": {
            const stateCopy = {...state}
            const newTask = {id: v1(), title: action.title, isDone: false}
            const tasks = stateCopy[action.todolistId]
            const newTasks = [newTask, ...tasks]
            stateCopy[action.todolistId] = newTasks
            return stateCopy
        }
        default:
            throw new Error("I don't understand this type")
    }
}

export const removeTaskAC = (taskId: string, todolistId: string): removeTaskActionType => {
    return {type: 'REMOVE-TASK', todolistId, taskId}
}
export const addTaskAC = (title: string, todolistId: string): addTaskActionType => {
    return {type: 'ADD-TASK', title, todolistId}
}