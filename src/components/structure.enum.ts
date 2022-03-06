export enum FunctionalityDesignKind {
  BITS = 'Bits',
  COMPOSABLE = 'Composable',
  EXPLICIT = 'Explicit',
  UTILITY = 'Utility',
}

export function createFunctionalityDesign(
  kind: FunctionalityDesignKind,
  name: string
) {
  return `Functionality Design/${kind}/${name}`;
}

export enum DesignSystemKind {
  Field = 'Field',
  Navbar = 'Navbar',
}

export function createDesignSystemKind(kind: DesignSystemKind, name?: string) {
  const group = 'Design System';
  if (name) {
    return `${group}/${kind}/${name}`;
  }
  return `${group}/${kind}`;
}
