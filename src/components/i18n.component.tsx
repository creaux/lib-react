import React, {
  createContext,
  ReactNode,
  Component,
  useContext,
  ComponentType,
} from 'react';
import { Builder } from '../builder';

const { keys } = Object;

export interface Translations {}

export enum Languages {
  CS = 'cs',
  DE = 'de',
  EN = 'en',
}

export interface I18nProviderProps<T extends Translations> {
  cs: T;
  de: T;
  en: T;
}

export interface I18nMapperProps<K, V> {
  value: Map<keyof K, keyof V>;
}

export interface I18nConsumerProps<T extends Translations> {
  defaultTranslations: T;
  children: (translations: T) => ReactNode;
}

export class I18n {
  public static readonly Context = createContext<Translations>({});

  public static readonly useTranslations = <T extends Translations>(
    defaultTranslations: T
  ): Map<keyof T, T[keyof T]> => {
    const output = new Map<keyof T, T[keyof T]>();
    // @ts-ignore
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const translations = useContext<T>(I18n.Context);
    for (const key in defaultTranslations) {
      if (defaultTranslations.hasOwnProperty(key)) {
        output.set(key, translations[key] || defaultTranslations[key]);
      }
    }
    return output;
  };

  private static readonly initialState: Translations = {};

  public static readonly TranslationsMap = class TranslationsMap<
    K,
    V
  > extends Map<keyof K, keyof V> {};

  public static readonly mapTranslations = <K, V, P = {}>(
    map: Map<keyof K, keyof V>
  ) => (Component: ComponentType<P>) => (staticProps: P = {} as P) => () => {
    const mapperProps = Builder<I18nMapperProps<K, V>>().value(map).build();
    return (
      <I18n.Mapper<K, V> {...mapperProps}>
        <Component {...staticProps} />
      </I18n.Mapper>
    );
  };

  // public static readonly consumeTranslations = <M, P, T extends Translations>(map: M, defaultTranslations: T) => (Component: ComponentType<P>) => (props: P) => (
  //   <I18n.Consumer<T> defaultTranslations={defaultTranslations}>
  //     {(translations) => {
  //       const mappedTranslations = map
  //       return <Component {...props} {...translations} />
  //     }}
  //   </I18n.Consumer>
  // )

  public static readonly Provider = class Provider<
    K extends Translations
  > extends Component<I18nProviderProps<K>> {
    constructor(props: I18nProviderProps<K>) {
      super(props);
      this.state = this.props[Languages.EN]; //I18n.initialState;
    }

    public render() {
      return (
        <I18n.Context.Provider value={this.state}>
          {this.props.children}
        </I18n.Context.Provider>
      );
    }
  };

  public static readonly Mapper = class Mapper<
    L extends Translations,
    G extends Translations,
    K = keyof L,
    V = keyof G
  > extends Component<I18nMapperProps<L, G>> {
    static contextType = I18n.Context;
    public context!: G;

    public render() {
      const entries: Map<keyof L, keyof G> = this.props.value;
      const translations = new Map();
      for (const property of entries.keys()) {
        translations.set(
          property,
          // @ts-ignore V cannot be used to index G Why???
          this.context[entries.get(property as K) as V]
        );
      }

      const value = Array.from(translations).reduce(
        (obj, [key, value]) => Object.assign(obj, { [key]: value }),
        {}
      );

      return (
        <I18n.Context.Provider value={value}>
          {this.props.children}
        </I18n.Context.Provider>
      );
    }
  };

  public static readonly Consumer = class<
    T extends Translations
  > extends Component<I18nConsumerProps<T>> {
    static contextType = I18n.Context;
    public context!: T;

    public render() {
      return this.props.children(
        keys(this.context).length > 0
          ? this.context
          : this.props.defaultTranslations
      );
    }
  };
}
