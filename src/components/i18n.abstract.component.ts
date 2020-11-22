import { Component, ComponentType, createElement } from 'react';
import { I18n, Translations } from './i18n.component';

export interface TranslateProps {}

export abstract class Translate<I, O, T extends Translations> extends Component<
  I,
  {},
  T
> {
  static contextType = I18n.Context;

  protected abstract readonly defaultTranslations: T;
  protected abstract readonly Component: ComponentType<O>;
  protected abstract getProps(): O;

  protected get i18n() {
    const output = new Map<keyof T, T[keyof T]>();
    for (const key in this.defaultTranslations) {
      if (this.defaultTranslations.hasOwnProperty(key)) {
        output.set(key, this.context[key] || this.defaultTranslations[key]);
      }
    }
    return output;
  }

  public render() {
    return createElement(this.Component, this.getProps());
  }
}
