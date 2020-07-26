import React, { FunctionComponent } from 'react';
import { AddContainer as Add } from '../add.container';

interface SidescriptionProps {
  title: string;
  description: string;
  onAdd: (event: React.MouseEvent, count: number) => void;
  subtitle: string;
}

export const Sidescription: FunctionComponent<SidescriptionProps> = ({
  title,
  description,
  onAdd,
  subtitle
}) => (
  <div className="sidescription">
    <h1>{title}</h1>
    <strong className="subtitle">{subtitle}</strong>
    <p>{description}</p>
    <Add title="Add to cart" onAdd={onAdd} />
  </div>
);
