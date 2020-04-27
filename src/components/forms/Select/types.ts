export interface IOption {
  id: string;
  title: string;
  value: string;
}

export interface ISelect {
  id: string;
  value: string | number | undefined;
  options: IOption[];
  valid: boolean;
}
