import React, { FunctionComponent } from 'react';
import chai, { expect } from 'chai';
import { I18n, Translations, I18nProviderProps } from './i18n.component';
import { mount } from 'enzyme';
import { Builder } from '../builder';
import chaiEnzyme from 'chai-enzyme';

const defaultTranslations = {
  MOCK_TITLE: 'Mock Title',
  MOCK_SUBTITLE: 'Mock Subtitle',
};

interface GlobalTranslations extends Translations {
  TITLE: string;
  SUBTITLE: string;
  NOT_MAPPED: string;
}

interface MockTranslations extends Translations {
  MOCK_TITLE: string;
  MOCK_SUBTITLE: string;
}

const Mock: FunctionComponent = () => (
  <I18n.Consumer<MockTranslations> defaultTranslations={defaultTranslations}>
    {(translations: MockTranslations) => (
      <div>
        <h1>{translations.MOCK_TITLE}</h1>
        <h2>{translations.MOCK_SUBTITLE}</h2>
      </div>
    )}
  </I18n.Consumer>
);

describe('I18n', function I18nSpec() {
  describe('Provider', () => {
    it('should map global translations to local translations', () => {
      const provider = Builder<I18nProviderProps<GlobalTranslations>>()
        .en({
          TITLE: 'Provider translation mock title',
          SUBTITLE: 'Provider translation mock subtitle',
          NOT_MAPPED: '',
        })
        .cs({
          TITLE: 'Provider translation mock title',
          SUBTITLE: 'Provider translation mock subtitle',
          NOT_MAPPED: '',
        })
        .de({
          TITLE: 'Provider translation mock title',
          SUBTITLE: 'Provider translation mock subtitle',
          NOT_MAPPED: '',
        })
        .build();

      const map = new I18n.TranslationsMap<
        MockTranslations,
        GlobalTranslations
      >([
        ['MOCK_TITLE', 'TITLE'],
        ['MOCK_SUBTITLE', 'SUBTITLE'],
      ]);

      const component = mount(
        <I18n.Provider<GlobalTranslations> {...provider}>
          <div>Lorem ipsum</div>
          <div>
            <I18n.Mapper<MockTranslations, GlobalTranslations> value={map}>
              <Mock />
            </I18n.Mapper>
          </div>
        </I18n.Provider>
      );

      const mock = component.find(Mock);

      expect(mock.find('h1')).with.text('Provider translation mock title');
      expect(mock.find('h2')).with.text('Provider translation mock subtitle');
    });
  });
});

chai.use(chaiEnzyme());
