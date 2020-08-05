import React, { FunctionComponent } from 'react';

export interface NavigationTogglerProps {
  onToggle?: () => void;
}

export const NavigationToggler: FunctionComponent<NavigationTogglerProps> = ({
  onToggle: handleToggle,
}) => (
  <button
    className="navbar-toggler d-block"
    type="button"
    aria-expanded="false"
    aria-label="Toggle navigation"
    onClick={handleToggle}
  >
    <span className="navbar-toggler-icon" />
  </button>
);
