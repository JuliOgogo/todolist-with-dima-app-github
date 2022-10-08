import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import {action} from "@storybook/addon-actions";
import {EditableSpan} from "./EditableSpan";

export default {
    title: 'TODOLIST/EditableSpan Component',
    component: EditableSpan,
    /*argTypes: {
        onClick: {
            description: 'Button inside form clicked'
        }
    }*/
} as ComponentMeta<typeof EditableSpan>;

const Template: ComponentStory<typeof EditableSpan> = (args) => <EditableSpan {...args} />;

export const EditableSpanExample = Template.bind({});
EditableSpanExample.args = {
    value: 'Start value',
    onChange: action('EditableSpan value changed')
};