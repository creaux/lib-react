import React, { FunctionComponent, FormEvent } from "react";
import { Abode, IAbode } from "../Abode";
import {
  OnFieldChange,
  OnGroupChange,
  OnValidGroupFieldChange
} from "../../types/form";
import { IShippingFields, IShippingGroups } from "./types";
import { faFileInvoiceDollar, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { I18nConsumer } from "../../I18n/component";
import defaultTranslations from "./en.json";
import { Checkbox } from "../Checkbox/index";
import { Button } from "../Button/component";

interface ShippingProps extends IShippingGroups, IShippingFields {
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  onFieldChange: OnFieldChange<keyof IShippingFields>;
  onGroupChange: OnGroupChange<keyof IShippingGroups, keyof IAbode>;
  onValidGroupFieldChange: OnValidGroupFieldChange<
    keyof IShippingGroups,
    keyof IAbode
  >;
  valid: boolean;
}

export interface ShippingTranslations {
  SHIPPING_COMPANY_DETAILS: "Company details";
  SHIPPING_DELIVERY_ADDRESS: "Delivery address";
}

export const Shipping: FunctionComponent<ShippingProps> = ({
  distribution,
  invoicing,
  delivery,
  terms,
  data,
  onSubmit: handleSubmit,
  onGroupChange: handleGroupChange,
  onFieldChange: handleFieldChange,
  onValidGroupFieldChange: handleValidGroupFieldChange,
  valid
}) => {
  return (
    <I18nConsumer<ShippingTranslations>
      defaultTranslations={defaultTranslations}
    >
      {translations => (
        <>
          <div className="pb-4">
            <h6>
              <span className="shipping__icon">
                <FontAwesomeIcon icon={faHome} size="1x" />
              </span>
              &nbsp;&nbsp;
              <span>{translations.SHIPPING_DELIVERY_ADDRESS}</span>
            </h6>
            <Abode
              {...delivery}
              onFieldChange={handleGroupChange("delivery")}
              onValidFieldChange={handleValidGroupFieldChange("delivery")}
            />
          </div>
          <div>
            <h6>
              <div className="shipping__icon">
                <FontAwesomeIcon icon={faFileInvoiceDollar} size="1x" />
              </div>
              &nbsp;&nbsp;
              <span>{translations.SHIPPING_COMPANY_DETAILS}</span>
            </h6>
            <Abode
              {...invoicing}
              onFieldChange={handleGroupChange("invoicing")}
              onValidFieldChange={handleValidGroupFieldChange("invoicing")}
            />
          </div>
          <div>
            <Checkbox {...terms} onChange={handleFieldChange("terms")} />
            <Checkbox {...data} onChange={handleFieldChange("data")} />
          </div>
          <Button onClick={handleSubmit} disabled={!valid}>
            Next
          </Button>
        </>
      )}
    </I18nConsumer>
  );
};
