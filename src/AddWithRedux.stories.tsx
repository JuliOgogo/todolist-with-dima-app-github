import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import AppWithRedux from "./AppWithRedux";
import {reduxStoreProviderDecorator} from "./stories/decorators/ReduxStoreProviderDecorator";

export default {
    title: 'TODOLIST/AppWithRedux Component',
    component: AppWithRedux,
    decorators: [reduxStoreProviderDecorator]
} as ComponentMeta<typeof AppWithRedux>;

const Template: ComponentStory<typeof AppWithRedux> = (args) => <AppWithRedux/>;

export const AppWithReduxExample = Template.bind({});
AppWithReduxExample.args = {};