import React, { FunctionComponent } from "react";
import { Address } from "../Address";
import { Company } from "../Company";
import { Person } from "../Person";
import { OnFieldChange, OnValidFieldChange } from "../../types/form";
import { AbodeBuilder, IAbode } from "./types";
import { Conditional } from "../../Conditional/component";
import { BuilderInterface } from "@pyxismedia/lib-model";

export class AbodePropsBuilder extends AbodeBuilder
  implements BuilderInterface<AbodeProps> {
  onFieldChange!: OnFieldChange<keyof IAbode>;
  onValidFieldChange!: OnValidFieldChange<keyof IAbode>;

  withOnFieldChange(onFieldChange: OnFieldChange<keyof IAbode>) {
    this.onFieldChange = onFieldChange;
  }

  withValidFieldChange(onValidFieldChange: OnValidFieldChange<keyof IAbode>) {
    this.onValidFieldChange = onValidFieldChange;
  }

  build(): AbodeProps {
    return {
      ...super.build(),
      onFieldChange: this.onFieldChange,
      onValidFieldChange: this.onValidFieldChange
    };
  }
}

export interface AbodeProps extends IAbode {
  onFieldChange: OnFieldChange<keyof IAbode>;
  onValidFieldChange: OnValidFieldChange<keyof IAbode>;
}

export const Abode: FunctionComponent<AbodeProps> = ({
  forname,
  surname,
  company,
  vat,
  street,
  streetNo,
  postcode,
  cities,
  countries,
  onFieldChange: handleFieldChange,
  onValidFieldChange: handleValidFieldChange
}) => (
  <>
    <div className="mb-1">
      <Person
        forname={forname}
        surname={surname}
        onFieldChange={handleFieldChange}
        onFieldValidChange={handleValidFieldChange}
      />
    </div>
    <Conditional
      condition={!!(vat && company)}
      when={() => (
        <div className="mb-1">
          <Company
            company={company}
            vat={vat}
            onFieldChange={handleFieldChange}
            onValidFieldChange={handleValidFieldChange}
          />
        </div>
      )}
    />
    <Address
      street={street}
      streetNo={streetNo}
      postcode={postcode}
      cities={cities}
      countries={countries}
      onFieldChange={handleFieldChange}
      onValidFieldChange={handleValidFieldChange}
    />
  </>
);
