import { IInput, IInputData, ISelect } from "../Field/types";
import { BuilderInterface } from "@pyxismedia/lib-model";

export class AbodeBuilder implements BuilderInterface<IAbode> {
  private forname!: IInput;
  private surname!: IInput;
  private company!: IInput;
  private vat!: IInput;
  private street!: IInputData;
  private streetNo!: IInputData;
  private postcode!: IInputData;
  private cities!: ISelect;
  private countries!: ISelect;

  withForname(forename: IInput) {
    this.forname = forename;
  }

  withSurname(surname: IInput) {
    this.surname = surname;
  }

  withCompany(company: IInput) {
    this.company = company;
  }

  withVat(vat: IInput) {
    this.vat = vat;
  }

  withStreet(street: IInputData) {
    this.street = street;
  }

  withStreetNo(streetNo: IInputData) {
    this.streetNo = streetNo;
  }

  withPostcode(postcode: IInputData) {
    this.postcode = postcode;
  }

  withCities(cities: ISelect) {
    this.cities = cities;
  }

  withCountries(countries: ISelect) {
    this.countries = countries;
  }

  build(): IAbode {
    return {
      forname: this.forname,
      surname: this.surname,
      company: this.company,
      vat: this.vat,
      street: this.street,
      streetNo: this.streetNo,
      postcode: this.postcode,
      cities: this.cities,
      countries: this.countries
    };
  }
}

export interface IAbode {
  forname: IInput;
  surname: IInput;
  company?: IInput;
  vat?: IInput;
  street: IInputData;
  streetNo: IInputData;
  postcode: IInputData;
  cities: ISelect;
  countries: ISelect;
}

export interface IAbodeValidated extends IAbode {
  forname: IInput & { valid: boolean };
  surname: IInput & { valid: boolean };
  company?: IInput & { valid: boolean };
  vat?: IInput & { valid: boolean };
  street: IInputData & { valid: boolean };
  streetNo: IInputData & { valid: boolean };
  postcode: IInputData & { valid: boolean };
  cities: ISelect & { valid: boolean };
  countries: ISelect & { valid: boolean };
}
