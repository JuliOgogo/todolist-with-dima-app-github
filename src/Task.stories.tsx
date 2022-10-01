import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import {action} from "@storybook/addon-actions";
import {Task} from "./Task";
import {TaskPriorities, TaskStatuses} from "./api/todolist-api";

export default {
    title: 'TODOLIST/Task Component',
    component: Task,
} as ComponentMeta<typeof Task>;

const changeTaskTitle = action('Change task title')
const changeTaskStatus = action('Change task status')
const removeTask = action('Remove task')

const baseArgs = {
    changeTaskTitle: changeTaskTitle,
    changeTaskStatus: changeTaskStatus,
    removeTask: removeTask,
}

const Template: ComponentStory<typeof Task> = (args) => <Task {...args} />;

export const TaskIsDone = Template.bind({});
TaskIsDone.args = {
    ...baseArgs,
    task: {id: '1', title: 'HTML', status: TaskStatuses.Completed,
        description: '', priority: TaskPriorities.Low, startDate: '', deadline: '',
        todoListId: 'todolistId1', order: 0, addedDate: ''},
    todolistId: 'todolistId1'
};

export const TaskIsNotDone = Template.bind({});
TaskIsNotDone.args = {
    ...baseArgs,
    task: {id: '2', title: 'JS', status: TaskStatuses.New,
        description: '', priority: TaskPriorities.Low, startDate: '', deadline: '',
        todoListId: 'todolistId2', order: 0, addedDate: ''},
    todolistId: 'todolistId2'
};