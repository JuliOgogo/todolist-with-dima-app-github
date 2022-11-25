import {appReducer, initialStateType, setAppErrorAC, setAppStatusAC} from "./app-reducer";

let initialState: initialStateType

beforeEach(() => {
    initialState = {
        status: "idle",
        error: null
    }
})

test('error message should be set', () => {
    const endState = appReducer(initialState, setAppErrorAC('some error'))

    expect(endState.error).toBe('some error')
})

test('correct status should be set', () => {
    const endState = appReducer(initialState, setAppStatusAC('failed'))

    expect(endState.status).toBe('failed')
})