import { DotsProps } from './dots.component';

export class DotsPropsBuilder {
  private count!: number;
  private onDot!: (position: number) => void;
  private active!: number;

  withCount(count: number): DotsPropsBuilder {
    this.count = count;
    return this;
  }

  withOnDot(onDot: (position: number) => void): DotsPropsBuilder {
    this.onDot = onDot;
    return this;
  }

  withActive(active: number): DotsPropsBuilder {
    this.active = active;
    return this;
  }

  build(): DotsProps {
    return {
      count: this.count,
      onDot: this.onDot,
      active: this.active,
    };
  }
}
