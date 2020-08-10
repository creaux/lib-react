import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '.';
import { Variants } from './types';
import { action } from '@storybook/addon-actions';

const { keys } = Object;

const story = storiesOf('Atoms/forms/Button', module);

keys(Variants).forEach((key: string) => {
  story.add((Variants as any)[key], () => {
    const props = {
      children: 'Click me!',
      variant: (Variants as any)[key],
    };
    return (
      <Button
        {...props}
        onClick={action(`Clicked ${(Variants as any)[key]}`)}
      />
    );
  });
});
