import React, { FunctionComponent, useContext } from 'react';
import { PersonI18nProps } from './person.i18n';
import {
  FormTypeContext,
  isNormalFloatingForm,
  isNormalForm,
} from '../forms/Form';
import { Text } from '../forms/Field/Fields/Text';
import { Conditional } from './conditional.component';

export interface PersonProps extends PersonI18nProps {
  forenameLabel: string;
  forenamePlaceholder: string;
  forenameMessageValid: string;
  forenameMessageInvalid: string;
  forenameMessageDefault: string;
  surnameLabel: string;
  surnamePlaceholder: string;
  surnameMessageValid: string;
  surnameMessageInvalid: string;
  surnameMessageDefault: string;
}

export const Person: FunctionComponent<PersonProps> = ({
  forname,
  surname,
  onFieldChange: handleFieldChange,
  onFieldValidChange: handleFieldValidChange,
  forenameLabel,
  forenamePlaceholder,
  forenameMessageValid,
  forenameMessageInvalid,
  forenameMessageDefault,
  surnameLabel,
  surnamePlaceholder,
  surnameMessageValid,
  surnameMessageInvalid,
  surnameMessageDefault,
}) => {
  const type = useContext(FormTypeContext);

  return (
    <fieldset name="person">
      <div className={isNormalForm(type) ? 'form-row' : 'input-group'}>
        {/* eslint-disable-next-line react/jsx-no-undef */}
        <Conditional
          condition={isNormalForm(type)}
          when={(children) => <div className="col-6 mb-3">{children}</div>}
          otherwise={(children) => children}
        >
          <Text
            label={isNormalFloatingForm(type) ? forenameLabel : undefined}
            id={forname.id}
            value={forname.value}
            onChange={handleFieldChange('forname')}
            onValidChange={handleFieldValidChange('forname')}
            messages={[
              forenameMessageValid,
              forenameMessageInvalid,
              forenameMessageDefault,
            ]}
            placeholder={forenamePlaceholder}
          />
        </Conditional>
        <Conditional
          condition={isNormalForm(type)}
          when={(children) => <div className="col-6 mb-3">{children}</div>}
          otherwise={(children) => children}
        >
          <Text
            label={isNormalFloatingForm(type) ? surnameLabel : undefined}
            id={surname.id}
            value={surname.value}
            onChange={handleFieldChange('surname')}
            onValidChange={handleFieldValidChange('surname')}
            messages={[
              surnameMessageValid,
              surnameMessageInvalid,
              surnameMessageDefault,
            ]}
            placeholder={surnamePlaceholder}
          />
        </Conditional>
      </div>
    </fieldset>
  );
};
