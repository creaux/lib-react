import React from 'react';
import { Abode } from '../Abode/component';

export const Delivery = ({ onGroupChange: handleGroupChange,
                           onValidFieldChange: handleValidGroupFieldChange,
                           delivery,
}) => (
  <>
    <Abode
      {...delivery}
      onFieldChange={handleGroupChange('delivery')}
      onValidFieldChange={handleValidGroupFieldChange('delivery')}
    />
  </>
);
