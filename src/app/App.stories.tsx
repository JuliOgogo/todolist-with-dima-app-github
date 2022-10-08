import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import App from "./App";
import {reduxStoreProviderDecorator} from "../stories/decorators/ReduxStoreProviderDecorator";

export default {
    title: 'TODOLIST/App Component',
    component: App,
    decorators: [reduxStoreProviderDecorator]
} as ComponentMeta<typeof App>;

const Template: ComponentStory<typeof App> = (args) => <App/>;

export const AppExample = Template.bind({});
AppExample.args = {};