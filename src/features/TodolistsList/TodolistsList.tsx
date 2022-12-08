import React, {useCallback, useEffect} from "react";
import {AppRootStateType, useAppDispatch} from "../../app/store";
import {useSelector} from "react-redux";
import {
    addTodolistTC,
    changeTodolistFilterAC,
    changeTodolistTitleTC,
    fetchTodolistsTC,
    FilterValuesType,
    removeTodolistTC,
    TodolistDomainType
} from "./todolists-reducer";
import {addTaskTC, removeTaskTC, TasksStateType, updateTaskТС} from "./tasks-reducer";
import {TaskStatuses} from "../../api/todolist-api";
import {Grid, Paper} from "@material-ui/core";
import {AddItemForm} from "../../components/AddItemForm/AddItemForm";
import {Todolist} from "./Todolist/Todolist";
import {Navigate} from "react-router-dom";

type PropsType = {
    demo?: boolean
}

export const TodolistsList: React.FC<PropsType> = ({demo = false}) => {
    const dispatch = useAppDispatch();
    const todolists = useSelector<AppRootStateType, Array<TodolistDomainType>>(store => store.todolists)
    const tasks = useSelector<AppRootStateType, TasksStateType>(store => store.tasks)
    const isLoggedIn = useSelector<AppRootStateType, boolean>(store => store.auth.isLoggedIn)

    useEffect(() => {
        if (demo || !isLoggedIn) {
            return;
        }
        dispatch(fetchTodolistsTC());
    }, [])

    const removeTask = useCallback((id: string, todolistId: string) => {
        const thunk = removeTaskTC(id, todolistId)
        dispatch(thunk)
    }, [dispatch])

    const addTask = useCallback((title: string, todolistId: string) => {
        const thunk = addTaskTC(title, todolistId)
        dispatch(thunk)
    }, [dispatch])

    const changeStatus = useCallback((id: string, status: TaskStatuses, todolistId: string) => {
        const thunk = updateTaskТС(id, {status}, todolistId)
        dispatch(thunk)
    }, [dispatch])

    const changeTaskTitle = useCallback((id: string, newTitle: string, todolistId: string) => {
        const thunk = updateTaskТС(id, {title: newTitle}, todolistId)
        dispatch(thunk)
    }, [dispatch])

    const changeFilter = useCallback((value: FilterValuesType, todolistId: string) => {
        const action = changeTodolistFilterAC(value, todolistId)
        dispatch(action)
    }, [dispatch])

    const removeTodolist = useCallback((id: string) => {
        const thunk = removeTodolistTC(id)
        dispatch(thunk)
    }, [dispatch])

    const changeTodolistTitle = useCallback((id: string, title: string) => {
        const thunk = changeTodolistTitleTC(id, title)
        dispatch(thunk)
    }, [dispatch])

    const addTodolist = useCallback((title: string) => {
        const thunk = addTodolistTC(title)
        dispatch(thunk)
    }, [dispatch])

    if (!isLoggedIn) {
        return <Navigate to={'/login'}/>
    }

    return <div>
        <Grid container style={{padding: "20px"}}>
            <AddItemForm addItem={addTodolist}/>
        </Grid>
        <Grid container spacing={3}>
            {
                todolists.map(tl => {
                    let tasksForTodolist = tasks[tl.id];

                    return <Grid item>
                        <Paper style={{padding: "10px"}}>
                            <Todolist
                                key={tl.id}
                                todolist={tl}
                                tasks={tasksForTodolist}
                                removeTask={removeTask}
                                changeFilter={changeFilter}
                                addTask={addTask}
                                changeTaskStatus={changeStatus}
                                removeTodolist={removeTodolist}
                                changeTaskTitle={changeTaskTitle}
                                changeTodolistTitle={changeTodolistTitle}
                                demo={demo}
                            />
                        </Paper>
                    </Grid>
                })
            }
        </Grid>
    </div>
}