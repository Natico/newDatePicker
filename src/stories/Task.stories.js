// src/components/Task.stories.js

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, object } from '@storybook/addon-knobs/react';

import Task from '../components/Old/Task';

export const task = {
  id: '1',
  title: 'Test Task',
  state: 'TASK_INBOX',
  updatedAt: new Date(2018, 0, 1, 9, 0),
};

export const actions = {
  onPinTask: action('onPinTask'),
  onArchiveTask: action('onArchiveTask'),
};

storiesOf('Task', module)
  .addDecorator(withKnobs)
  .add('default', () => {
    return <Task task={object('task', { ...task })} {...actions} />;
  })
  .add('pinned', () => {
    return <Task task={object('task', { ...task, state: 'TASK_PINNED' })} {...actions} />
  })
  .add('archived', () => {
    return <Task task={object('task', { ...task, state: 'TASK_ARCHIVED' })} {...actions} />
  });