import { BackgroundColor } from './background-color.enum';
import { BorderColor } from './border-color.enum';
import { TextColor } from './text-color.enum';
import { Navbar } from './navbar.enum';

export enum Color {
  LIGHT,
  DARK,
}

export const backgroundColorMapper = {
  [Color.LIGHT]: BackgroundColor.LIGHT,
  [Color.DARK]: BackgroundColor.DARK,
};

export const borderColorMapper = {
  [Color.LIGHT]: BorderColor.LIGHT,
  [Color.DARK]: BorderColor.DARK,
};

export const textColorMapper = {
  [Color.LIGHT]: TextColor.LIGHT,
  [Color.DARK]: TextColor.DARK,
};

export const navbarColorMapper = {
  [Color.LIGHT]: Navbar.LIGHT,
  [Color.DARK]: Navbar.DARK,
};
