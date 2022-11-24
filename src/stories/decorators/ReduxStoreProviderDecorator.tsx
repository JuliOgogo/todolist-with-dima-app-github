import {Provider} from "react-redux";
import {AppRootStateType} from "../../app/store";
import {applyMiddleware, combineReducers, createStore} from "redux";
import {tasksReducer} from "../../features/TodolistsList/tasks-reducer";
import {todolistsReducer} from "../../features/TodolistsList/todolists-reducer";
import {v1} from "uuid";
import {TaskPriorities, TaskStatuses} from "../../api/todolist-api";
import thunk from "redux-thunk";
import {appReducer} from "../../app/app-reducer";

const rootReducer = combineReducers({
    tasks: tasksReducer,
    todolists: todolistsReducer,
    applications: appReducer
})

const initialGlobalState: AppRootStateType = {
    todolists: [
        {id: 'todolistId1', title: 'What to learn', filter: 'all', addedDate: '',
            order: 0, entityStatus: 'idle'},
        {id: 'todolistId2', title: 'What to buy', filter: 'all', addedDate: '',
            order: 0, entityStatus: 'loading'}
    ],
    tasks: {
        ['todolistId1']: [
            {id: v1(), title: 'HTML&CSS', status: TaskStatuses.Completed,
                description: '', priority: TaskPriorities.Low, startDate: '', deadline: '',
                todoListId: 'todolistId1', order: 0, addedDate: ''},
            {id: v1(), title: 'JS', status: TaskStatuses.Completed,
                description: '', priority: TaskPriorities.Low, startDate: '', deadline: '',
                todoListId: 'todolistId1', order: 0, addedDate: ''}
        ],
        ['todolistId2']: [
            {id: v1(), title: 'Milk', status: TaskStatuses.Completed,
                description: '', priority: TaskPriorities.Low, startDate: '', deadline: '',
                todoListId: 'todolistId2', order: 0, addedDate: ''},
            {id: v1(), title: 'React Book', status: TaskStatuses.Completed,
                description: '', priority: TaskPriorities.Low, startDate: '', deadline: '',
                todoListId: 'todolistId2', order: 0, addedDate: ''}
        ]
    },
    applications: {status: 'idle', error: null}
}

export const storyBookStore = createStore(rootReducer, initialGlobalState, applyMiddleware(thunk))

export const reduxStoreProviderDecorator = (storyFn: any) => {
    return <Provider store={storyBookStore}>{storyFn()}</Provider>
}