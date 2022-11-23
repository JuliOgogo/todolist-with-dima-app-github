type initialStateType = {
    status: 'idle' | 'loading' | 'succeeded' | 'failed'
    error: string | null
}

const initialState: initialStateType = {
    status: 'idle',
    error: 'some error'
}

export const appReducer = (state: initialStateType = initialState, action: ActionType): initialStateType => {
    switch (action.type) {
        case "APP/SET-STATUS":
            return {...state, status: action.status}
        case "APP/SET-ERROR":
            return {...state, status: action.error}
        default:
            return state;
    }
}

type ActionType = any