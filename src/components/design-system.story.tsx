import React from 'react';
import { storiesOf } from '@storybook/react';

const stories = storiesOf('Design System/Typography', module);

stories.add('Display', () => (
  <>
    <h1 className="display-1">Display 1</h1>
    <h2 className="display-2">Display 2</h2>
    <h3 className="display-3">Display 3</h3>
    <h4 className="display-4">Display 4</h4>
  </>
));

stories.add('Headline', () => (
  <>
    <h1>Headline h1</h1>
    <h2>Headline h2</h2>
    <h3>Headline h3</h3>
    <h4>Headline h4</h4>
    <h5>Headline h5</h5>
    <h6>Headline h6</h6>
  </>
));

stories.add('Paragraph', () => (
  <>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec
      dapibus arcu. Donec eget eleifend augue. Nullam eget vestibulum turpis.
      Vivamus in elit lectus. Nam risus est, bibendum non mi eget, porta
      fermentum urna. In in mi a dui malesuada dictum. Quisque rhoncus cursus
      nisl, sit amet sagittis urna imperdiet et. Mauris volutpat vel est in
      pretium. Nam porta arcu vel ante lobortis, ut finibus felis congue.
      Praesent lobortis, nisi nec accumsan tincidunt, est justo fermentum sem,
      semper imperdiet libero est in nisl. Sed et rhoncus nunc. Nullam egestas
      enim nibh. Aliquam erat volutpat. Nullam vel sem tortor.
    </p>
    <p>
      Nunc imperdiet lobortis orci nec vehicula. Sed et lacus eu nibh dapibus
      semper tincidunt ut ligula. Donec lacinia interdum ex, et eleifend sapien
      hendrerit id.&nbsp;
      <strong>Etiam vitae est sit amet ipsum mattis convallis.</strong> Sed
      felis leo, pretium pulvinar lectus nec, dictum condimentum odio. Aenean
      commodo tempor sapien, a aliquet nisi efficitur a. Morbi commodo sem
      massa, vel dapibus justo convallis a.
      <i>
        In hac habitasse platea dictumst. Morbi fringilla mollis ligula, eu
        laoreet risus suscipit sed.
      </i>
      &nbsp;Donec fermentum euismod neque non sollicitudin. Nam viverra bibendum
      vestibulum. Vestibulum dui ante, lobortis nec elementum id, consectetur
      vitae purus. Nunc in auctor mauris.
    </p>
    <p>
      Vestibulum efficitur justo a nisi iaculis pharetra. Nulla facilisi.
      Praesent fringilla, nunc in ultrices luctus, eros mauris pulvinar lacus,
      non blandit enim ex sit amet mauris. Proin nec consequat leo. Praesent
      commodo libero vitae eros tincidunt malesuada. Phasellus a elit vel quam
      laoreet molestie quis a lacus. Nunc lectus tortor, vulputate vulputate
      feugiat euismod, aliquam id arcu. Vivamus a dolor lacinia, tempus purus
      nec, pulvinar massa. Integer sed varius tortor. Cras nulla est, luctus nec
      porta eu, auctor quis lectus. Praesent accumsan erat magna. Duis luctus
      ultricies sodales.
    </p>
  </>
));

stories.add('Example', () => (
  <>
    <h1>Headline h1</h1>
    <h2>Headline h2</h2>
    <p>
      Lorem ipsum dolor sit amet, <a href="">consectetur</a> adipiscing elit.
      Vestibulum nec dapibus arcu. Donec eget eleifend augue. Nullam eget
      vestibulum turpis. Vivamus in elit lectus. Nam risus est, bibendum non mi
      eget, porta fermentum urna. In in mi a dui malesuada dictum. Quisque
      rhoncus cursus nisl, sit amet sagittis urna imperdiet et. Mauris volutpat
      vel est in pretium. Nam porta arcu vel ante lobortis, ut finibus felis
      congue. Praesent lobortis, nisi nec accumsan tincidunt, est justo
      fermentum sem, semper imperdiet libero est in nisl. Sed et rhoncus nunc.
      Nullam egestas enim nibh. Aliquam erat volutpat. Nullam vel sem tortor.
    </p>
    <h2>Headline h2</h2>
    <h3>Headline h3</h3>
    <p>
      Nunc imperdiet lobortis orci nec vehicula. Sed et lacus eu nibh dapibus
      semper tincidunt ut ligula. Donec lacinia interdum ex, et eleifend sapien
      hendrerit id.&nbsp;
      <strong>Etiam vitae est sit amet ipsum mattis convallis.</strong> Sed
      felis leo, pretium pulvinar lectus nec, dictum condimentum odio. Aenean
      commodo tempor sapien, a aliquet nisi efficitur a. Morbi commodo sem
      massa, vel dapibus justo convallis a.
      <i>
        In hac habitasse platea dictumst. Morbi fringilla mollis ligula, eu
        laoreet risus suscipit sed.
      </i>
      &nbsp;Donec fermentum euismod neque non sollicitudin. Nam viverra bibendum
      vestibulum. Vestibulum dui ante, lobortis nec elementum id, consectetur
      vitae purus. Nunc in auctor mauris.
    </p>
    <h3>Headline h3</h3>
    <p>
      Vestibulum efficitur justo a nisi iaculis pharetra. Nulla facilisi.
      Praesent fringilla, nunc in ultrices luctus, eros mauris pulvinar lacus,
      non blandit enim ex sit amet mauris. Proin nec consequat leo. Praesent
      commodo libero vitae eros tincidunt malesuada. Phasellus a elit vel quam
      laoreet molestie quis a lacus. Nunc lectus tortor, vulputate vulputate
      feugiat euismod, aliquam id arcu. Vivamus a dolor lacinia, tempus purus
      nec, pulvinar massa. Integer sed varius tortor. Cras nulla est, luctus nec
      porta eu, auctor quis lectus. Praesent accumsan erat magna. Duis luctus
      ultricies sodales.
    </p>
  </>
));
