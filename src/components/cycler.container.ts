import React from 'react';
import { Cycler as Component } from './cycler.component';

interface CyclerState {
  position: number;
}

interface CyclerProps {
  items: {
    id: string;
    title: string;
  }[];
}

export class CyclerContainer extends React.Component<CyclerProps, CyclerState> {
  private static visible = 3;
  public state: CyclerState;

  constructor(props: CyclerProps) {
    super(props);
    this.state = {
      position: 0,
    };
  }

  componentDidMount() {
    const { visible } = CyclerContainer;
    this.setState({ position: this.count / 2 - visible });
  }

  private get isSlidableUp() {
    return 0 > this.state.position;
  }

  private get count(): number {
    return this.props.items.length;
  }

  private get isSlidableDown() {
    const { visible } = CyclerContainer;
    return this.count - visible > -this.state.position;
  }

  private up = () => {
    if (this.isSlidableUp) {
      this.setState({ position: this.state.position + 1 });
    }
  };

  private down = () => {
    if (this.isSlidableDown) {
      this.setState({ position: this.state.position - 1 });
    }
  };

  private isActive = (index: number) => {
    return Math.abs(this.state.position) + 1 === index;
  };

  private handleItemClick = (id: string) => () => {
    console.log(`Item ${id} clicked.`);
  };

  render() {
    const { position } = this.state;
    const { items } = this.props;
    return React.createElement(Component, {
      position,
      items,
      up: this.up,
      down: this.down,
      isActive: this.isActive,
      handleItemClick: this.handleItemClick,
    });
  }
}
