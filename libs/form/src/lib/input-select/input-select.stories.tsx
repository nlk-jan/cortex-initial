// Button.stories.ts|tsx

import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { InputSelect, InputSelectProps } from './input-select';

export default {
  title: 'InputSelect',
  component: InputSelect,
} as ComponentMeta<typeof InputSelect>;

const Template: ComponentStory<typeof InputSelect> = (args) => <InputSelect {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
