import { Component, FormEvent, createElement, ReactNode } from 'react';
import { Shipping as ShippingComponent } from './component';
import { faTruck } from '@fortawesome/free-solid-svg-icons';
import { IAbode } from "../Abode";
import { ICheckbox } from "../Checkbox/types";
import { IRadioStack } from "../RadioStack/types";

const { assign } = Object;

type Group = 'invoicing' | 'delivery';
type Field = 'distribution' | 'terms' | 'data';

interface ShippingTitles {
  distribution: {
    home: string,
    personal: string
  },
  address: {
    forename: string,
    surname: string,
    company: string,
    vat: string,
    street: string,
    streetNo: string,
    postcode: string,
    city: string,
    country: string
  },
  terms: string,
  data: string
}

interface IShipping {}

export interface ShippingProps extends IShipping {
  titles: ShippingTitles,
  onFormSubmit: (data: ShippingState['data']) => void
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

export class Shipping extends Component<ShippingProps, ShippingState>
  implements IShipping {
  state: ShippingState;

  constructor(props: ShippingProps) {
    super(props);
    const { titles } = props;
    this.state = {
      data: {
        distribution: {
          id: '01',
          active: undefined,
          radios: [
            {
              title: titles.distribution.home,
              icon: faTruck,
              id: '11'
            },
            {
              title: titles.distribution.personal,
              icon: faTruck,
              id: '12'
            }
          ]
        },
        invoicing: {
          forname: {
            id: 'forname1',
            label: titles.address.forename,
            value: '',
            placeholder: 'Denisa',
            messages: {
              valid: '',
              invalid: ''
            }
          },
          surname: {
            id: 'surname1',
            label: titles.address.surname,
            value: '',
            placeholder: 'Juna',
            messages: {
              valid: '',
              invalid: ''
            }
          },

          company: {
            id: 'company',
            label: titles.address.company,
            value: '',
            placeholder: 'Somethings LTD',
            messages: {
              valid: '',
              invalid: ''
            }
          },
          vat: {
            id: 'vat',
            label: 'VAT',
            value: '',
            placeholder: '12345',
            messages: {
              valid: '',
              invalid: ''
            }
          },

          street: {
            id: 'street1',
            label: titles.address.street,
            value: 'Street 1',
            placeholder: 'Your Street',
            messages: {
              valid: '',
              invalid: ''
            }
          },
          streetNo: {
            id: 'streetNo1',
            label: titles.address.streetNo,
            value: '5',
            placeholder: 'Your Number Street',
            messages: {
              valid: '',
              invalid: ''
            }
          },
          postcode: {
            id: 'postcode1',
            label: titles.address.postcode,
            value: '123 45',
            placeholder: '111 11',
            messages: {
              valid: '',
              invalid: ''
            }
          },
          cities: {
            id: 'city1',
            label: titles.address.city,
            value: '',
            options: [
              {
                id: 'prague',
                title: 'Prague',
                value: 'PRG'
              }
            ]
          },
          countries: {
            id: 'country1',
            label: titles.address.country,
            value: '',
            options: [
              {
                id: 'czechRepublic',
                title: 'Czech Republic',
                value: 'CZ'
              }
            ]
          }
        },
        delivery: {
          forname: {
            id: 'forname2',
            label: titles.address.forename,
            value: '',
            placeholder: 'Denisa',
            messages: {
              valid: '',
              invalid: ''
            }
          },
          surname: {
            id: 'surname2',
            label: titles.address.surname,
            value: '',
            placeholder: 'Juna',
            messages: {
              valid: '',
              invalid: ''
            }
          },

          street: {
            id: 'street2',
            label: titles.address.street,
            value: 'Street 2',
            placeholder: 'Your Street',
            messages: {
              valid: '',
              invalid: ''
            }
          },
          streetNo: {
            id: 'streetNo2',
            label: titles.address.streetNo,
            value: '5',
            placeholder: 'Your Number Street',
            messages: {
              valid: '',
              invalid: ''
            }
          },
          postcode: {
            id: 'postcode2',
            label: titles.address.postcode,
            value: '123 45',
            placeholder: '111 11',
            messages: {
              valid: '',
              invalid: ''
            }
          },
          cities: {
            id: 'city2',
            label: titles.address.city,
            value: '',
            options: [
              {
                id: 'prague',
                title: 'Prague',
                value: 'PRG'
              }
            ]
          },
          countries: {
            id: 'country2',
            label: titles.address.country,
            value: '',
            options: [
              {
                id: 'czechRepublic',
                title: 'Czech Republic',
                value: 'CZ'
              }
            ]
          }
        },
        terms: {
          checked: false,
          id: 'terms',
          title: titles.terms
        },
        data: {
          checked: false,
          id: 'data',
          title: titles.data
        }
      },
      valid: false
    };
  }

  handleChange = (field: Field) => (
    event: FormEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    let data = assign({}, this.state.data);

    if (event.currentTarget.type === 'checkbox') {
      const { checked } = event.currentTarget as HTMLInputElement;
      (data[field] as ICheckbox).checked = checked;
    }

    if (event.currentTarget.type === 'radio') {
      (data[field] as IRadioStack).active = event.currentTarget.value;
    }

    this.setState({ data });
  };

  handleGroupChange = (group: Group) => (field: keyof IAbode) => (
    event: FormEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { value } = event.currentTarget;
    let data = assign({}, this.state.data);
    data[group][field]!['value'] = value;
    this.setState({ data });
  };

  handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    this.props.onFormSubmit(this.state.data);
  };

  handleValidGroupFieldChange = (group: Group) => (field: keyof IAbode) => (valid: boolean) => {
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
