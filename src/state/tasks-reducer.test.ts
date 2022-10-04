import {addTaskAC, changeTaskStatusAC, changeTaskTitleAC, removeTaskAC, setTasksAC, tasksReducer} from './tasks-reducer'
import {TasksStateType} from '../App'
import {addTodolistAC, removeTodolistAC, setTodolistsAC} from "./todolists-reducer";
import {TaskPriorities, TaskStatuses} from "../api/todolist-api";

let startState: TasksStateType

beforeEach(() => {
    startState = {
        'todolistId1': [
            {
                id: '1', title: 'CSS', status: TaskStatuses.New,
                description: '', priority: TaskPriorities.Low, startDate: '', deadline: '',
                todoListId: 'todolistId1', order: 0, addedDate: ''
            },
            {
                id: '2', title: 'JS', status: TaskStatuses.Completed,
                description: '', priority: TaskPriorities.Low, startDate: '', deadline: '',
                todoListId: 'todolistId1', order: 0, addedDate: ''
            },
            {
                id: '3', title: 'React', status: TaskStatuses.New,
                description: '', priority: TaskPriorities.Low, startDate: '', deadline: '',
                todoListId: 'todolistId1', order: 0, addedDate: ''
            }
        ],
        'todolistId2': [
            {
                id: '1', title: 'bread', status: TaskStatuses.New,
                description: '', priority: TaskPriorities.Low, startDate: '', deadline: '',
                todoListId: 'todolistId2', order: 0, addedDate: ''
            },
            {
                id: '2', title: 'milk', status: TaskStatuses.Completed,
                description: '', priority: TaskPriorities.Low, startDate: '', deadline: '',
                todoListId: 'todolistId2', order: 0, addedDate: ''
            },
            {
                id: '3', title: 'tea', status: TaskStatuses.New,
                description: '', priority: TaskPriorities.Low, startDate: '', deadline: '',
                todoListId: 'todolistId2', order: 0, addedDate: ''
            }
        ]
    }
})

test('correct task should be deleted from correct array', () => {

    const action = removeTaskAC('2', 'todolistId2')

    const endState = tasksReducer(startState, action)

    expect(endState).toEqual({
        'todolistId1': [
            {
                id: '1', title: 'CSS', status: TaskStatuses.New,
                description: '', priority: TaskPriorities.Low, startDate: '', deadline: '',
                todoListId: 'todolistId1', order: 0, addedDate: ''
            },
            {
                id: '2', title: 'JS', status: TaskStatuses.Completed,
                description: '', priority: TaskPriorities.Low, startDate: '', deadline: '',
                todoListId: 'todolistId1', order: 0, addedDate: ''
            },
            {
                id: '3', title: 'React', status: TaskStatuses.New,
                description: '', priority: TaskPriorities.Low, startDate: '', deadline: '',
                todoListId: 'todolistId1', order: 0, addedDate: ''
            }
        ],
        'todolistId2': [
            {
                id: '1', title: 'bread', status: TaskStatuses.New,
                description: '', priority: TaskPriorities.Low, startDate: '', deadline: '',
                todoListId: 'todolistId2', order: 0, addedDate: ''
            },
            {
                id: '3', title: 'tea', status: TaskStatuses.New,
                description: '', priority: TaskPriorities.Low, startDate: '', deadline: '',
                todoListId: 'todolistId2', order: 0, addedDate: ''
            }
        ]
    })
})

test('correct task should be added to correct array', () => {

    const action = addTaskAC('juce', 'todolistId2')

    const endState = tasksReducer(startState, action)

    expect(endState['todolistId1'].length).toBe(3)
    expect(endState['todolistId2'].length).toBe(4)
    expect(endState['todolistId2'][0].id).toBeDefined()
    expect(endState['todolistId2'][0].title).toBe('juce')
    expect(endState['todolistId2'][0].status).toBe(TaskStatuses.New)
})

test('status of specified task should be changed', () => {

    const action = changeTaskStatusAC('2', TaskStatuses.New, 'todolistId2')

    const endState = tasksReducer(startState, action)

    expect(endState['todolistId2'][1].status).toBe(TaskStatuses.New)
    expect(endState['todolistId1'][1].status).toBe(TaskStatuses.Completed)
})

test('title of specified task should be changed', () => {

    const action = changeTaskTitleAC('2', 'MEAT', 'todolistId2')

    const endState = tasksReducer(startState, action)

    expect(endState['todolistId2'][1].title).toBe('MEAT')
    expect(endState['todolistId1'][1].title).toBe('JS')
})

test('new array should be added when new todolist is added', () => {

    const action = addTodolistAC('new todolist')

    const endState = tasksReducer(startState, action)


    const keys = Object.keys(endState)
    const newKey = keys.find(k => k != 'todolistId1' && k != 'todolistId2')
    if (!newKey) {
        throw Error('new key should be added')
    }

    expect(keys.length).toBe(3)
    expect(endState[newKey]).toEqual([])
})

test('property with todolistId should be deleted', () => {

    const action = removeTodolistAC('todolistId2')

    const endState = tasksReducer(startState, action)


    const keys = Object.keys(endState)

    expect(keys.length).toBe(1)
    expect(endState['todolistId2']).toBeUndefined()
})

test('empty arrays should be added when we set todolists', () => {

    const action = setTodolistsAC([
        {id: '1', title: "1", addedDate: '', order: 0},
        {id: '2', title: "2", addedDate: '', order: 0}
    ])

    const endState = tasksReducer({}, action)

    const keys = Object.keys(endState)

    expect(keys.length).toBe(2)
    expect(endState['1']).toEqual([])
    expect(endState['2']).toEqual([])
})

test('array of tasks should be added to correct todolist', () => {

    const action = setTasksAC([
        {
            id: '1', title: '1', status: TaskStatuses.New,
            description: '', priority: TaskPriorities.Low, startDate: '', deadline: '',
            todoListId: 'todolistId3', order: 0, addedDate: ''
        },
        {
            id: '2', title: '2', status: TaskStatuses.Completed,
            description: '', priority: TaskPriorities.Low, startDate: '', deadline: '',
            todoListId: 'todolistId3', order: 0, addedDate: ''
        },

    ], 'todolistId3')

    const endState = tasksReducer(startState, action)

    const keys = Object.keys(endState)

    expect(keys.length).toBe(3)

    expect(endState['todolistId3']).toBeDefined()
    expect(endState['todolistId3'].length).toBe(2)
    expect(endState['todolistId3'][0].id).toBe('1')
})