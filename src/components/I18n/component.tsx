import { createContext, ReactNode, Component } from "react";

const { keys } = Object;

export interface Translations {
  [key: string]: string;
}

export const I18nContext = createContext({});

export interface I18nConsumerProps<T> {
  defaultTranslations: Translations;
  children: (translations: T | Translations) => ReactNode;
}

export class I18nConsumer<T> extends Component<I18nConsumerProps<T>> {
  static contextType = I18nContext;

  render() {
    return this.props.children(
      keys(this.context).length > 0
        ? this.context
        : this.props.defaultTranslations
    );
  }
}
