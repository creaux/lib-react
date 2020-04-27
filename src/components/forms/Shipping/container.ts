import { Component, FormEvent, createElement, ReactNode } from "react";
import { Shipping as ShippingComponent } from "./component";
import { faTruck } from "@fortawesome/free-solid-svg-icons";
import { IAbode } from "../Abode";
import { ICheckbox } from "../Checkbox/types";
import { IRadioStack } from "../RadioStack/types";

const { assign } = Object;

type Group = "invoicing" | "delivery";
type Field = "distribution" | "terms" | "data";

interface IShipping {}

export interface ShippingProps extends IShipping {
  onFormSubmit: (data: ShippingState["data"]) => void;
}

export interface ShippingState {
  data: {
    distribution: IRadioStack;
    invoicing: IAbode;
    delivery: IAbode;
    terms: ICheckbox;
    data: ICheckbox;
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
        distribution: {
          id: "01",
          active: undefined,
          radios: [
            {
              title: i18n.home,
              icon: faTruck,
              id: "11"
            },
            {
              title: i18n.personal,
              icon: faTruck,
              id: "12"
            }
          ]
        },
        invoicing: {
          forname: {
            id: "forname1",
            value: "",
            messages: {
              valid: "",
              invalid: ""
            }
          },
          surname: {
            id: "surname1",
            value: "",
            messages: {
              valid: "",
              invalid: ""
            }
          },

          company: {
            id: "company",
            value: "",
            messages: {
              valid: "",
              invalid: ""
            }
          },
          vat: {
            id: "vat",
            value: "",
            messages: {
              valid: "",
              invalid: ""
            }
          },

          street: {
            id: "street1",
            value: "Street 1",
            messages: {
              valid: "",
              invalid: ""
            }
          },
          streetNo: {
            id: "streetNo1",
            value: "5",
            messages: {
              valid: "",
              invalid: ""
            }
          },
          postcode: {
            id: "postcode1",
            value: "123 45",
            messages: {
              valid: "",
              invalid: ""
            }
          },
          cities: {
            id: "city1",
            value: "",
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
            messages: {
              valid: "",
              invalid: ""
            }
          },
          surname: {
            id: "surname2",
            value: "",
            messages: {
              valid: "",
              invalid: ""
            }
          },

          street: {
            id: "street2",
            value: "Street 2",
            messages: {
              valid: "",
              invalid: ""
            }
          },
          streetNo: {
            id: "streetNo2",
            value: "5",
            messages: {
              valid: "",
              invalid: ""
            }
          },
          postcode: {
            id: "postcode2",
            value: "123 45",
            messages: {
              valid: "",
              invalid: ""
            }
          },
          cities: {
            id: "city2",
            value: "",
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
          id: "terms",
          title: i18n.terms
        },
        data: {
          checked: false,
          id: "data",
          title: i18n.data
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
    // TODO To know which field is valid which is not
    this.setState({ valid });
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
