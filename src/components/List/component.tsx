import React, { FunctionComponent } from 'react';
import { Image } from '../Image';
import { OrderItem } from './types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

export interface ListProps {
  items: OrderItem[];
  onRemove?: () => void;
}

export const List: FunctionComponent<ListProps> = ({ items, onRemove }) => (
  <table className="table table-borderless">
    {items.map((item: OrderItem, i: number) => (
      <tr key={i}>
        <td className="align-middle">
          <Image src={item.image} alt={item.description} />
        </td>
        <td className="align-middle">{item.description}</td>
        <td className="align-middle">{item.price}</td>
        <td className="align-middle">
          <button className="btn btn-link" onClick={onRemove}>
            <FontAwesomeIcon icon={faTimes} size="2x" />
          </button>
        </td>
      </tr>
    ))}
  </table>
);
