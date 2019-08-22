import React, { FunctionComponent } from "react";
import { Text } from "../Input";
import { OnFieldChange, OnValidFieldChange } from "../../types/form";
import { IPerson } from "./types";

export interface PersonProps extends IPerson {
  onFieldChange: OnFieldChange<keyof IPerson>;
  onFieldValidChange: OnValidFieldChange<keyof IPerson>;
}

export const Person: FunctionComponent<PersonProps> = ({
  forname,
  surname,
  onFieldChange: handleFieldChange,
  onFieldValidChange: handleFieldValidChange
}) => (
  <fieldset name="name">
    <div className="form-row">
      <div className="col-6 mb-3">
        <Text
          label={forname.label}
          id={forname.id}
          value={forname.value}
          onChange={handleFieldChange('forname')}
          onValidChange={handleFieldValidChange('forname')}
          messages={forname.messages}
          placeholder={forname.placeholder}
        />
      </div>
      <div className="col-6 mb-3">
        <Text
          label={surname.label}
          id={surname.id}
          value={surname.value}
          onChange={handleFieldChange('surname')}
          onValidChange={handleFieldValidChange('surname')}
          messages={surname.messages}
          placeholder={surname.placeholder}
        />
      </div>
    </div>
  </fieldset>
);
