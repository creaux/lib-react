import { IInput, IInputData, ISelect } from '../Field/types';

export class AbodeBuilder {
  private company!: IInput;
  private vat!: IInput;
  private street!: IInputData;
  private streetNo!: IInputData;
  private postcode!: IInputData;
  private cities!: ISelect;
  private countries!: ISelect;

  withCompany(company: IInput) {
    this.company = company;
    return this;
  }

  withVat(vat: IInput) {
    this.vat = vat;
    return this;
  }

  withStreet(street: IInputData) {
    this.street = street;
    return this;
  }

  withStreetNo(streetNo: IInputData) {
    this.streetNo = streetNo;
    return this;
  }

  withPostcode(postcode: IInputData) {
    this.postcode = postcode;
    return this;
  }

  withCities(cities: ISelect) {
    this.cities = cities;
    return this;
  }

  withCountries(countries: ISelect) {
    this.countries = countries;
    return this;
  }

  build(): IAbode {
    return {
      company: this.company,
      vat: this.vat,
      street: this.street,
      streetNo: this.streetNo,
      postcode: this.postcode,
      cities: this.cities,
      countries: this.countries,
    };
  }
}

export interface IAbode {
  company?: IInput;
  vat?: IInput;
  street: IInputData;
  streetNo: IInputData;
  postcode: IInputData;
  cities: ISelect;
  countries: ISelect;
}

export interface IAbodeValidated extends IAbode {
  company?: IInput & { valid: boolean };
  vat?: IInput & { valid: boolean };
  street: IInputData & { valid: boolean };
  streetNo: IInputData & { valid: boolean };
  postcode: IInputData & { valid: boolean };
  cities: ISelect & { valid: boolean };
  countries: ISelect & { valid: boolean };
}
