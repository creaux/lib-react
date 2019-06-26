export interface IOption {
  id: string;
  title: string;
  value: string;
}

export interface ISelect {
  id: string;
  label: string;
  value: string | number;
  options: IOption[];
}
