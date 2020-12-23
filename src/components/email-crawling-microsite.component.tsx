import React, { FunctionComponent } from 'react';
import { EmailCrawler } from '../forms/EmailCrawler/index';
import { Messages } from '../forms/Field/hoc/validators/types';
import { ImageVariants } from './bits/visual/image/image.types';
import { Image, ImageElement } from './bits/visual/image/image.component';

export interface EmailCrawlingMicrositeProps {
  labels: {
    input: string;
    button: string;
  };
  onEmailSubmit: (email: string) => void;
  messages: Messages;
  background: ImageElement;
}

export const EmailCrawlingMicrosite: FunctionComponent<EmailCrawlingMicrositeProps> = ({
  labels,
  onEmailSubmit: handleEmailSubmit,
  messages,
  background,
}) => (
  <Image
    variant={ImageVariants.BACKGROUND}
    className="vh-100 vw-100 d-flex align-items-center justify-content-center"
    {...background}
  >
    <div style={{ width: '630px' }}>
      <EmailCrawler
        labels={labels}
        onSubmit={handleEmailSubmit}
        // messages={messages}
      />
    </div>
  </Image>
);
