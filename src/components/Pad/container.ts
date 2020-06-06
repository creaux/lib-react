import { Component, createElement, ReactNode } from "react";
import { Pad } from "./component";
import * as _ from "lodash";
import { FullGestureState, StateKey } from "react-use-gesture/dist/types";

export interface PadContainerProps {
  children: ReactNode[];
}

export interface PadContainerState {
  position: number;
}

class Throttler {
  private id: number;
  private readonly setId: (id: number) => void;

  constructor() {
    this.id = 0;

    this.setId = _.throttle((id: number) => {
      this.id = id;
    }, 500);
  }

  public execute() {
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
  private readonly throttler: Throttler;
  private readonly previousThrottler: Throttler;

  // TODO: Do it around offset or similar and track current position to do it accordingly to the wheel, virtual scroll
  // TODO: after window.innerHeight < offset when trackpad is untouchad it should stick with bottom or top scroll automatically
  private setSpring = (state: FullGestureState<StateKey<"wheel">>) => (
    i: number
  ) => {
    const nextPosition = this.state.position + 1;
    if (i === nextPosition) {
      return {
        container: window.innerHeight - state.offset[1],
        config: { duration: 100 }
      };
    }
  };

  private setSpringDown = (state: FullGestureState<StateKey<"wheel">>) => (
    i: number
  ) => {
    const nextPosition = this.state.position + 1;

    if (i === this.state.position && this.previousThrottler.isUnlocked) {
      return {
        container: -1 * (window.innerHeight / 6),
        config: { duration: 100 }
      };
    }

    if (i === nextPosition && this.throttler.isUnlocked) {
      this.setState({ position: nextPosition });
      return {
        container: 0,
        config: { duration: 100 }
      };
    }
  };

  private setSpringUp = () => (i: number) => {
    if (i === this.state.position - 1 && this.previousThrottler.isUnlocked) {
      return {
        container: 0,
        config: { duration: 100 }
      };
    }

    if (i === this.state.position && this.throttler.isUnlocked) {
      this.setState({ position: this.state.position - 1 });
      return {
        container: window.innerHeight,
        config: { duration: 100 }
      };
    }
  };

  constructor(props: PadContainerProps) {
    super(props);
    this.throttler = new Throttler();
    this.previousThrottler = new Throttler();

    this.state = {
      position: 0
    };
  }

  public render() {
    return createElement(Pad, {
      children: this.props.children,
      position: this.state.position,
      setSpringDown: this.setSpringDown,
      setSpringUp: this.setSpringUp,
      setSpring: this.setSpring
    });
  }
}
