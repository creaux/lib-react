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
import { Conditional } from "../../Conditional/component";

interface ShippingProps extends IShippingGroups, IShippingFields {
  onFieldChange: OnFieldChange<keyof IShippingFields>;
  onGroupChange: OnGroupChange<keyof IShippingGroups, keyof IAbode>;
  onValidGroupFieldChange: OnValidGroupFieldChange<
    keyof IShippingGroups,
    keyof IAbode
  >;
}

export interface ShippingTranslations {
  SHIPPING_COMPANY_DETAILS: string;
  SHIPPING_DELIVERY_ADDRESS: string;
  SHIPPING_IS_COMPANY: string;
  SHIPPING_TERMS: string;
  SHIPPING_DATA: string;
}

export const Shipping: FunctionComponent<ShippingProps> = ({
  invoicing,
  delivery,
  terms,
  data,
  company,
  onGroupChange: handleGroupChange,
  onFieldChange: handleFieldChange,
  onValidGroupFieldChange: handleValidGroupFieldChange
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
            <Checkbox
              title={translations.SHIPPING_IS_COMPANY}
              {...company}
              onChange={handleFieldChange("company")}
            />
          </div>
          <Conditional
            condition={!company.checked}
            when={() => (
              <Abode
                {...invoicing}
                onFieldChange={handleGroupChange("invoicing")}
                onValidFieldChange={handleValidGroupFieldChange("invoicing")}
              />
            )}
          />
          <div>
            <Checkbox
              title={translations.SHIPPING_TERMS}
              {...terms}
              onChange={handleFieldChange("terms")}
            />
            <Checkbox
              title={translations.SHIPPING_DATA}
              {...data}
              onChange={handleFieldChange("data")}
            />
          </div>
        </>
      )}
    </I18nConsumer>
  );
};
