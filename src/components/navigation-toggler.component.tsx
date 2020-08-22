import React, { FunctionComponent } from 'react';
import cx from 'classnames';

export interface NavigationTogglerProps {
  onToggle?: () => void;
  isExpanded?: boolean;
}

export const NavigationToggler: FunctionComponent<NavigationTogglerProps> = ({
  onToggle: handleToggle,
  isExpanded = false,
}) => (
  <button
    className={cx('navbar-toggler', 'd-block', {
      expanded: isExpanded,
    })}
    type="button"
    aria-expanded="false"
    aria-label="Toggle navigation"
    onClick={handleToggle}
  >
    <span className="navbar-bar navbar-bar-top" />
    <span className="navbar-bar navbar-bar-middle" />
    <span className="navbar-bar navbar-bar-bottom" />
  </button>
);
