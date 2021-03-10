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
}

export function createDesignSystemKind(kind: DesignSystemKind, name: string) {
  return `Design System/${kind}/${name}`;
}
