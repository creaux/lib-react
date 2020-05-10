import { Component, FormEvent, createElement, ReactNode } from "react";
import { Shipping as ShippingComponent } from "./component";
import { faTruck } from "@fortawesome/free-solid-svg-icons";
import { IAbode, IAbodeValidated } from "../Abode";
import { ICheckbox } from "../Checkbox/types";
import { IRadioStack } from "../Field/RadioStack/types";
import { merge } from "lodash";

const { assign } = Object;

type Group = "invoicing" | "delivery";
type Field = "distribution" | "terms" | "data";

interface IShipping {}

export interface ShippingProps extends IShipping {
  onFormSubmit: (data: ShippingState["data"]) => void;
}

export interface ShippingState {
  data: {
    invoicing: IAbodeValidated;
    delivery: IAbodeValidated;
    terms: ICheckbox;
    data: ICheckbox;
    company: ICheckbox;
  };
  valid: boolean;
}

const i18n = {
  home: "Home",
  personal: "Personal",
  terms: "Terms",
  data: "Personal data"
};

export class Shipping extends Component<ShippingProps, ShippingState>
  implements IShipping {
  state: ShippingState;

  constructor(props: ShippingProps) {
    super(props);
    this.state = {
      data: {
        company: {
          id: "invoicing",
          checked: true
        },
        invoicing: {
          forname: {
            id: "forname1",
            value: "",
            valid: false
          },
          surname: {
            id: "surname1",
            value: "",
            valid: false
          },

          company: {
            id: "company",
            value: "",
            valid: false
          },
          vat: {
            id: "vat",
            value: "",
            valid: false
          },

          street: {
            id: "street1",
            value: "Street 1",
            valid: false
          },
          streetNo: {
            id: "streetNo1",
            value: "5",
            valid: false
          },
          postcode: {
            id: "postcode1",
            value: "123 45",
            valid: false
          },
          cities: {
            id: "city1",
            value: "",
            valid: false,
            options: [
              {
                id: "prague",
                title: "Prague",
                value: "PRG"
              }
            ]
          },
          countries: {
            id: "country1",
            value: "",
            valid: false,
            options: [
              {
                id: "czechRepublic",
                title: "Czech Republic",
                value: "CZ"
              }
            ]
          }
        },
        delivery: {
          forname: {
            id: "forname2",
            value: "",
            valid: false
          },
          surname: {
            id: "surname2",
            value: "",
            valid: false
          },

          street: {
            id: "street2",
            value: "Street 2",
            valid: false
          },
          streetNo: {
            id: "streetNo2",
            value: "5",
            valid: false
          },
          postcode: {
            id: "postcode2",
            value: "123 45",
            valid: false
          },
          cities: {
            id: "city2",
            value: "",
            valid: false,
            options: [
              {
                id: "prague",
                title: "Prague",
                value: "PRG"
              }
            ]
          },
          countries: {
            id: "country2",
            value: "",
            valid: false,
            options: [
              {
                id: "czechRepublic",
                title: "Czech Republic",
                value: "CZ"
              }
            ]
          }
        },
        terms: {
          checked: false,
          id: "terms"
        },
        data: {
          checked: false,
          id: "data"
        }
      },
      valid: false
    };
  }

  handleChange = (field: Field) => (
    event: FormEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    let data = assign({}, this.state.data);

    if (event.currentTarget.type === "checkbox") {
      const { checked } = event.currentTarget as HTMLInputElement;
      (data[field] as ICheckbox).checked = checked;
    }

    if (event.currentTarget.type === "radio") {
      (data[field] as IRadioStack).active = event.currentTarget.value;
    }

    this.setState({ data });
  };

  handleGroupChange = (group: Group) => (field: keyof IAbode) => (
    event: FormEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { value } = event.currentTarget;
    let data = assign({}, this.state.data);
    data[group][field]!["value"] = value;
    this.setState({ data });
  };

  handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    this.props.onFormSubmit(this.state.data);
  };

  handleValidGroupFieldChange = (group: Group) => (field: keyof IAbode) => (
    valid: boolean
  ) => {
    console.log("valid", group, field);
    const newState = merge(this.state, {
      [group]: {
        [field]: { valid }
      }
    });

    // TODO invoicing
    // TODO deliver
    // TODO terms
    // TODO data
    // TODO company

    this.setState(newState);
  };

  render(): ReactNode {
    const props = {
      ...this.state.data,
      onGroupChange: this.handleGroupChange,
      onFieldChange: this.handleChange,
      onSubmit: this.handleSubmit,
      onValidGroupFieldChange: this.handleValidGroupFieldChange,
      valid: this.state.valid
    };
    return createElement(ShippingComponent, props);
  }
}
