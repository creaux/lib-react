export enum Kinds {
  BITS = 'Bits',
  COMPOSABLE = 'Composable',
  EXPLICIT = 'Explicit',
  UTILITY = 'Utility',
}

export function createKind(kind: Kinds, name: string) {
  return `Functionality Design/${kind}/${name}`;
}
