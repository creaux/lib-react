import { Component, createElement, ReactNode } from "react";
import { Pad } from "./component";
import { throttle } from "lodash";

export interface PadContainerProps {
  children: ReactNode[];
}

export interface PadContainerState {
  position: number;
}

class Throttler {
  private id: number;
  private readonly setId: (id: number) => void;

  constructor(timer: number = 500) {
    this.id = 0;

    this.setId = throttle((id: number) => {
      this.id = id;
    }, timer);
  }

  public execute(): number {
    const id = this.id + 1;
    this.setId(id);
    return id;
  }

  public get isUnlocked(): boolean {
    const executor = this.execute();
    return this.id === executor;
  }
}

export class PadContainer extends Component<
  PadContainerProps,
  PadContainerState
> {
  private static readonly VELOCITY = 0.6333;
  private static readonly TIMER = 500;
  private static readonly DURATION = 100;
  private static readonly AXIS = "y";
  private static readonly DIRECTION = {
    down: 1,
    up: -1
  };

  private readonly throttler: Throttler;
  private readonly previousThrottler: Throttler;

  private readonly slideDown = (i: number) => {
    const nextPosition = this.state.position + 1;

    if (i === this.state.position && this.previousThrottler.isUnlocked) {
      return {
        container: -1 * (window.innerHeight / 6),
        config: { duration: PadContainer.DURATION }
      };
    }

    if (i === nextPosition && this.throttler.isUnlocked) {
      this.setState({ position: nextPosition });
      return {
        container: 0,
        config: { duration: PadContainer.DURATION }
      };
    }
  };

  private readonly slideUp = (i: number) => {
    if (i === this.state.position - 1 && this.previousThrottler.isUnlocked) {
      return {
        container: 0,
        config: { duration: PadContainer.DURATION }
      };
    }

    if (i === this.state.position && this.throttler.isUnlocked) {
      this.setState({ position: this.state.position - 1 });
      return {
        container: window.innerHeight,
        config: { duration: PadContainer.DURATION }
      };
    }
  };

  constructor(props: PadContainerProps) {
    super(props);
    this.throttler = new Throttler(PadContainer.TIMER);
    this.previousThrottler = new Throttler(PadContainer.TIMER);

    this.state = {
      position: 0
    };
  }

  public render() {
    return createElement(Pad, {
      children: this.props.children,
      position: this.state.position,
      setSpringDown: this.slideDown,
      setSpringUp: this.slideUp,
      velocity: PadContainer.VELOCITY,
      axis: PadContainer.AXIS,
      direction: PadContainer.DIRECTION
    });
  }
}
