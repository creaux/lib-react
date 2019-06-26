import React, { FunctionComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import cx from 'classnames';

export interface CyclerProps {
  items: {
    title: string;
    id: string;
  }[];
  position: number;
  up: () => void;
  down: () => void;
  isActive: (index: number) => boolean;
  handleItemClick: (url: string) => () => void;
}

const HEIGHT = 25;

export const Cycler: FunctionComponent<CyclerProps> = ({
  items,
  position,
  up,
  down,
  isActive,
  handleItemClick
}) => (
  <div className="cycler">
    <button
      onClick={up}
      className="btn btn-link link"
    >
      <FontAwesomeIcon icon={faChevronUp} size="2x" className="up" />
    </button>
    <div className="wrapper">
      <ul className="items" style={{ top: `${position * HEIGHT}px` }}>
        {items.map((item, index) => (
          <li
            key={item.id}
            className={cx("item", {
              active: isActive(index)
            })}
          >
            <button
              className="btn btn-link link"
              onClick={handleItemClick(item.id)}
            >
              {item.title}
            </button>
          </li>
        ))}
      </ul>
    </div>
    <button className="btn btn-link down" onClick={down}>
      <FontAwesomeIcon icon={faChevronDown} size="2x" className="down" />
    </button>
  </div>
);
