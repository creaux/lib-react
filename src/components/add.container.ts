import React from 'react';
import { AddComponent } from './add.component';

export interface AddContainerProps {
  title: string;
  onAdd: (event: React.MouseEvent, count: number) => void;
}
export class AddContainer extends React.Component<AddContainerProps> {
  count!: number;

  handleCount = (count: number) => {
    this.count = count;
  };

  handleAdd = (e: React.MouseEvent) => {
    this.props.onAdd(e, this.count);
  };

  render() {
    return React.createElement(AddComponent, {
      title: this.props.title,
      onAdd: this.handleAdd,
      onCount: this.handleCount,
    });
  }
}
