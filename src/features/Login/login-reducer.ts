import {SetAppErrorActionType, setAppStatusAC, SetAppStatusActionType} from "../../app/app-reducer";
import {Dispatch} from "redux";
import {authAPI, RequestPayloadType} from "../../api/todolist-api";
import {handleServerAppError, handleServerNetworkError} from "../../utils/error-utils";

const initialState: initialStateType = {}

export const loginReducer = (state: initialStateType = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {

        default:
            return state;
    }
}

// actions
/*export const removeTaskAC = (taskId: string, todolistId: string) =>
    ({type: 'REMOVE-TASK', todolistId, taskId} as const)*/

// thunks
export const loginTC = (payload: RequestPayloadType) => (dispatch: ThunkDispatchType) => {
    dispatch(setAppStatusAC('loading'))
    authAPI.login(payload)
        .then((res) => {
            if (res.data.resultCode === 0) {
                dispatch(setAppStatusAC('succeeded'))
                alert('yeah')
            } else {
                handleServerAppError(res.data, dispatch)
            }
        })
        .catch((e) => {
            handleServerNetworkError(e, dispatch)
        })
}

// types
type ActionsType = any
type initialStateType = {}

export type ThunkDispatchType = Dispatch<ActionsType | SetAppStatusActionType | SetAppErrorActionType>