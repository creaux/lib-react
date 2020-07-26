import React from 'react';
import { Raiser as Component } from './component';

export interface RaiserProps {
  onCount: (count: number) => void;
}

export interface RaiserState {
  count: number;
}

export class Raiser extends React.Component<RaiserProps, RaiserState> {
  constructor(props: RaiserProps) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    this.props.onCount(this.state.count);
  }

  reset() {
    this.setState({ count: 0 });
  }

  handleDecrease = () => {
    if (this.state.count === 0) return;
    const count = this.state.count - 1;
    this.setState({ count });
    this.props.onCount(count);
  };

  handleRaise = () => {
    const count = this.state.count + 1;
    this.setState({ count });
    this.props.onCount(count);
  };

  render(): any {
    return React.createElement(Component, {
      ...this.props,
      count: this.state.count,
      onDecrease: this.handleDecrease,
      onRaise: this.handleRaise,
    });
  }
}
