import React from 'react';
import { storiesOf } from '@storybook/react';
import { Svg } from './component';
import { withDocs } from 'storybook-readme';
import README from './README.md';
import { ReactComponent as SvgComponent } from './svg.svg';
import { text } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

storiesOf('Atoms/Svg', module)
  .addDecorator(withInfo({ header: false }))
  .addDecorator(withDocs([README]))
  .add('default', () => {
    const props = {
      Svg: SvgComponent,
      link: text('Link', '#'),
      aria: {
        label: text('Label', 'pyxis media')
      },
      fill: 'black'
    };
    return <Svg {...props} />;
  });
