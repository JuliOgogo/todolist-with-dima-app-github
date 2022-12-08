import {Dispatch} from "redux";
import {authAPI} from "../api/todolist-api";
import {isLoggedInAC} from "../features/Login/auth-reducer";

const initialState: initialStateType = {
    status: 'idle',
    error: null,
    isInitialized: false
}

export const appReducer = (state: initialStateType = initialState, action: ActionType): initialStateType => {
    switch (action.type) {
        case "APP/SET-STATUS":
            return {...state, status: action.status}
        case "APP/SET-ERROR":
            return {...state, error: action.error}
        case "APP/SET-IS-INITIALIZED":
            return {...state, isInitialized: action.value}
        default:
            return state;
    }
}

export const setAppStatusAC = (status: RequestStatusType): SetAppStatusActionType => ({type: 'APP/SET-STATUS', status})
export const setAppErrorAC = (error: string | null): SetAppErrorActionType => ({type: 'APP/SET-ERROR', error})
export const setAppIsInitializedAC = (value: boolean): SetAppIsInitializedActionType => ({
    type: 'APP/SET-IS-INITIALIZED',
    value
})

export const initializeAppTC = () => (dispatch: Dispatch) => {
    authAPI.me()
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(isLoggedInAC(true))
            } else {

            }
            dispatch(setAppIsInitializedAC(true))
        })
}

export type SetAppStatusActionType = {
    type: 'APP/SET-STATUS',
    status: RequestStatusType
}
export type SetAppErrorActionType = {
    type: 'APP/SET-ERROR',
    error: null | string
}
export type SetAppIsInitializedActionType = {
    type: 'APP/SET-IS-INITIALIZED',
    value: boolean
}
type ActionType = SetAppStatusActionType
    | SetAppErrorActionType
    | SetAppIsInitializedActionType

export type initialStateType = {
    status: RequestStatusType
    error: string | null
    isInitialized: boolean
}
export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'
