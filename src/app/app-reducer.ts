const initialState: initialStateType = {
    status: 'idle',
    error: null
}

export const appReducer = (state: initialStateType = initialState, action: ActionType): initialStateType => {
    switch (action.type) {
        case "APP/SET-STATUS":
            return {...state, status: action.status}
        case "APP/SET-ERROR":
            return {...state, error: action.error}
        default:
            return state;
    }
}

export const setAppStatusAC = (status: RequestStatusType) => ({type: 'APP/SET-STATUS', status}) as const
export const setAppErrorAC = (error: string | null) => ({type: 'APP/SET-ERROR', error}) as const

export type SetStatusActionType = {
    type: 'APP/SET-STATUS',
    status: RequestStatusType
}
export type SetErrorActionType = {
    type: 'APP/SET-ERROR',
    error: null | string
}
type ActionType =
    SetStatusActionType |
    SetErrorActionType

export type initialStateType = {
    status: RequestStatusType
    error: string | null
}

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'
