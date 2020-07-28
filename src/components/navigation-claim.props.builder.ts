import { NavigationClaimProps } from './navigation-claim.component';

export class NavigationClaimPropsBuilder {
  private children!: string;

  withChildren(children: string): NavigationClaimPropsBuilder {
    this.children = children;
    return this;
  }

  build(): NavigationClaimProps {
    return {
      children: this.children,
    };
  }
}
