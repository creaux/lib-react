import {
  Component,
  createElement,
  createRef,
  ReactNode,
  Ref,
  RefObject
} from "react";
import { Pad } from "./component";
import { throttle } from "lodash";

export interface PadContainerProps {
  children: ReactNode[];
}

export interface PadContainerState {
  position: number;
}

export class PadContainer extends Component<
  PadContainerProps,
  PadContainerState
> {
  public containerRef: RefObject<HTMLDivElement>;
  public throttledScrollDown: () => void;
  public throttledScrollUp: () => void;

  private scroll(indent: number): void {
    if (this.containerRef && this.containerRef.current) {
      this.containerRef.current.scroll(0, indent);
    }
  }

  private scrollDown = () => {
    const position = this.state.position + 1;
    this.scroll(window.innerHeight * position);
    this.setState({ position });
  };

  private scrollUp = () => {
    const position = this.state.position - 1;
    this.scroll(window.innerHeight * position);
    this.setState({ position: position });
  };

  constructor(props: PadContainerProps) {
    super(props);
    this.containerRef = createRef<HTMLDivElement>();
    this.throttledScrollDown = throttle(this.scrollDown, 500, {
      trailing: false
    });
    this.throttledScrollUp = throttle(this.scrollUp, 500, { trailing: false });
    this.state = {
      position: 0
    };
  }

  public componentDidMount() {
    if (this.containerRef && this.containerRef.current) {
      this.containerRef.current.addEventListener(
        "wheel",
        event => {
          event.preventDefault();
        },
        { passive: false }
      );
    }
  }

  public render() {
    return createElement(Pad, {
      children: this.props.children,
      position: this.state.position,
      scrollDown: this.throttledScrollDown,
      scrollUp: this.throttledScrollUp,
      ref: this.containerRef
    });
  }
}
