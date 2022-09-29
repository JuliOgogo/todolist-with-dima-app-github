import React, {KeyboardEvent, useEffect, useState} from 'react'
import {todolistApi} from "../api/todolist-api";

export default {
    title: 'API'
}

export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistApi.getTodolists()
            .then((res) => {
                setState(res.data)
            })
    }, [])
    return <div>{JSON.stringify(state)}</div>
}

export const CreateTodolist = () => {

    const [state, setState] = useState<any>(null)
    const [todolistTitle, setTodolistTitle] = useState<any>('')

    /*useEffect(() => {
        todolistApi.createTodolist('New Todolist DAL')
            .then((res) => {
                setState(res.data)
            })
    }, [])*/

    const createTodolist = () => {
        todolistApi.createTodolist(todolistTitle)
            .then((res) => {
                setState(res.data)
            })
        setTodolistTitle('')
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            createTodolist()
        }
    }

    return <div>
        {JSON.stringify(state)}
        <div>
            <input placeholder={'todolistTitle'}
                   value={todolistTitle}
                   onChange={(e) => {
                       setTodolistTitle(e.currentTarget.value)
                   }}
                   onKeyPress={onKeyPressHandler}/>
            <button onClick={createTodolist}>create todolist</button>
        </div>
    </div>
}
export const DeleteTodolist = () => {

    const [state, setState] = useState<any>(null)
    const [todolistId, setTodolistId] = useState<any>('')

    /*useEffect(() => {
        const todolistId = '151ce4b9-c7db-4808-9b07-20353afc2d9b'
        todolistApi.deleteTodolist(todolistId)
            .then((res) => {
                setState(res.data)
            })
    }, [])*/

    const deleteTodolist = () => {
        todolistApi.deleteTodolist(todolistId)
            .then((res) => {
                setState(res.data)
            })
        setTodolistId('')
    }

    return <div>
        {JSON.stringify(state)}
        <input placeholder={'todolistId'}
               value={todolistId}
               onChange={(e) => {
                   setTodolistId(e.currentTarget.value)
               }}/>
        <button onClick={deleteTodolist}>delete todolist</button>
    </div>
}

export const UpdateTodolistTitle = () => {

    const [state, setState] = useState<any>(null)
    const [todolistId, setTodolistId] = useState<any>('')
    const [newTodolistTitle, setNewTodolistTitle] = useState<any>('')

    /*useEffect(() => {
        const todolistId = '3a7f6167-8acb-4de3-b739-6167445285c3'
        todolistApi.updateTodolist(todolistId, 'Updated Title DAL')
            .then((res) => {
                setState(res.data)
            })
    }, [])*/

    const updateTodolist = () => {
        todolistApi.updateTodolist(todolistId, newTodolistTitle)
            .then((res) => {
                setState(res.data)
            })
        setNewTodolistTitle('')
    }

    return <div>
        {JSON.stringify(state)}
        <input placeholder={'todolistId'}
               value={todolistId}
               onChange={(e) => {
                   setTodolistId(e.currentTarget.value)
               }}/>
        <input placeholder={'newTodolistTitle'}
               value={newTodolistTitle}
               onChange={(e) => {
                   setNewTodolistTitle(e.currentTarget.value)
               }}/>
        <button onClick={updateTodolist}>update todolist</button>
    </div>
}

//==========TASKS==========

export const GetTasks = () => {

    const [state, setState] = useState<any>(null)
    const [todolistId, setTodolistId] = useState<any>('')

    /*useEffect(() => {
        const todolistId = '3a7f6167-8acb-4de3-b739-6167445285c3'
        todolistApi.getTasks(todolistId)
            .then((res) => {
                setState(res.data)
            })
    }, [])*/

    const getTasks = () => {
        todolistApi.getTasks(todolistId)
            .then((res) => {
                setState(res.data)
            })
        setTodolistId('')
    }

    return <div>
        {JSON.stringify(state)}
        <input placeholder={'todolistId'}
               value={todolistId}
               onChange={(e) => {
                   setTodolistId(e.currentTarget.value)
               }}/>
        <button onClick={getTasks}>get tasks</button>
    </div>
}
export const DeleteTask = () => {

    const [state, setState] = useState<any>(null)
    const [todolistId, setTodolistId] = useState<any>('')
    const [taskId, setTaskId] = useState<any>('')

    /*useEffect(() => {
        const todolistId = '3a7f6167-8acb-4de3-b739-6167445285c3'
        const taskId = 'ae8bfd0a-b6f8-4514-b2be-08623111c44e'
        todolistApi.deleteTask(todolistId, taskId)
            .then((res) => {
                setState(res.data)
            })
    }, [])*/

    const deleteTask = () => {
        todolistApi.deleteTask(todolistId, taskId)
            .then((res) => {
                setState(res.data)
            })
        setTaskId('')
    }

    return <div>
        {JSON.stringify(state)}
        <div>
            <input placeholder={'todolistId'}
                   value={todolistId}
                   onChange={(e) => {
                       setTodolistId(e.currentTarget.value)
                   }}/>
            <input placeholder={'taskId'}
                   value={taskId}
                   onChange={(e) => {
                       setTaskId(e.currentTarget.value)
                   }}/>
            <button onClick={deleteTask}>delete task</button>
        </div>
    </div>
}
export const CreateTask = () => {

    const [state, setState] = useState<any>(null)
    const [todolistId, setTodolistId] = useState<any>('')
    const [taskTitle, setTaskTitle] = useState<any>('')

    /*useEffect(() => {
        const todolistId = '3a7f6167-8acb-4de3-b739-6167445285c3'
        const title = 'New Task'
        todolistApi.createTask(todolistId, title)
            .then((res) => {
                setState(res.data)
            })
    }, [])*/

    const createTask = () => {
        todolistApi.createTask(todolistId, taskTitle)
            .then((res) => {
                setState(res.data)
            })
        setTaskTitle('')
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            createTask()
        }
    }

    return <div>
        {JSON.stringify(state)}
        <div>
            <input placeholder={'todolistId'}
                   value={todolistId}
                   onChange={(e) => {
                       setTodolistId(e.currentTarget.value)
                   }}/>
            <input placeholder={'taskTitle'}
                   value={taskTitle}
                   onChange={(e) => {
                       setTaskTitle(e.currentTarget.value)
                   }}
                   onKeyPress={onKeyPressHandler}/>
            <button onClick={createTask}>create task</button>
        </div>
    </div>
}
export const UpdateTask = () => {

    const [state, setState] = useState<any>(null)
    const [todolistId, setTodolistId] = useState<any>('')
    const [taskId, setTaskId] = useState<any>('')
    const [newTaskTitle, setNewTaskTitle] = useState<any>('')

    /*useEffect(() => {
        const todolistId = '3a7f6167-8acb-4de3-b739-6167445285c3'
        const taskId = '939386ef-ed41-4bd3-ae7a-41af65617f1d'
        const title = 'Updated Task'
        todolistApi.updateTask(todolistId, taskId, title)
            .then((res) => {
                setState(res.data)
            })
    }, [])*/

    const updateTask = () => {
        todolistApi.updateTask(todolistId, taskId, newTaskTitle)
            .then((res) => {
                setState(res.data)
            })
        setNewTaskTitle('')
    }

    return <div>
        {JSON.stringify(state)}
        <div>
            <input placeholder={'todolistId'}
                   value={todolistId}
                   onChange={(e) => {
                       setTodolistId(e.currentTarget.value)
                   }}/>
            <input placeholder={'taskId'}
                   value={taskId}
                   onChange={(e) => {
                       setTaskId(e.currentTarget.value)
                   }}/>
            <input placeholder={'newTaskTitle'}
                   value={newTaskTitle}
                   onChange={(e) => {
                       setNewTaskTitle(e.currentTarget.value)
                   }}/>
            <button onClick={updateTask}>update task</button>
        </div>
    </div>
}