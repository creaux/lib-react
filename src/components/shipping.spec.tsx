import React from 'react';
import { ShippingAbstractContainer } from './shipping.abstract.container';
import { mount, ReactWrapper } from 'enzyme';
import chai, { expect } from 'chai';
import { SinonSpy, spy } from 'sinon';
import chaiEnzyme from 'chai-enzyme';
import sinonChai from 'sinon-chai';
import { ShippingFields } from './shipping.fields';
import { ShippingProps } from './shipping.props';
import { ShippingState } from './shipping.state';
import { Builder } from '../builder';
import { Shipping } from './shipping';
import { IAbode } from '../forms/Abode';
import { IInput, IOption, ISelect } from '../forms/Field/types';
import { ICheckbox } from '../forms/Checkbox/types';
import { EMPTY } from './empty';

describe('Shipping', () => {
  let component: ReactWrapper<ShippingAbstractContainer>;
  let props: ShippingProps;
  let handleFormChangeSpy: SinonSpy;
  let handleFormChangeValidSpy: SinonSpy;
  let shippingPropsTest: ShippingState;
  let forename: string;
  let surname: string;
  let street: string;
  let streetNo: string;
  let city: string;
  let country: string;
  let postcode: string;
  let company: boolean;
  let data: boolean;
  let terms: boolean;
  let vat: string;

  beforeAll(() => {
    forename = 'James';
    surname = 'Brown';
    street = 'Strasse';
    streetNo = '5';
    city = 'Prague';
    country = 'Czechia';
    postcode = '120 00';
    company = true;
    data = false;
    terms = false;
    vat = 'abcde';

    handleFormChangeSpy = spy();
    handleFormChangeValidSpy = spy();

    props = Builder<ShippingProps>()
      .onFormValidChange(handleFormChangeValidSpy)
      .onFormChange(handleFormChangeSpy)
      .build();
  });

  beforeEach(() => {
    shippingPropsTest = Builder<ShippingState>()
      .delivery(
        Builder<IAbode>()
          .forname(
            Builder<IInput>()
              .id(ShippingFields.DELIVERY_FORENAME)
              .value('')
              .valid(false)
              .build()
          )
          .surname(
            Builder<IInput>()
              .id(ShippingFields.DELIVERY_SURNAME)
              .value('')
              .valid(false)
              .build()
          )
          .street(
            Builder<IInput>()
              .id(ShippingFields.DELIVERY_STREET)
              .value('')
              .valid(false)
              .build()
          )
          .streetNo(
            Builder<IInput>()
              .id(ShippingFields.DELIVERY_STREET_NO)
              .value('')
              .valid(false)
              .build()
          )
          .postcode(
            Builder<IInput>()
              .id(ShippingFields.DELIVERY_POSTCODE)
              .value('')
              .valid(false)
              .build()
          )
          .cities(
            Builder<ISelect>()
              .id(ShippingFields.DELIVERY_CITY)
              .value('')
              .options([
                Builder<IOption>()
                  .id('prague')
                  .value('Prague')
                  .title('Prague')
                  .build(),
              ])
              .build()
          )
          .countries(
            Builder<ISelect>()
              .id(ShippingFields.DELIVERY_COUNTRY)
              .value('')
              .options([
                Builder<IOption>()
                  .id('czechia')
                  .value('Czechia')
                  .title('Czechia')
                  .build(),
              ])
              .build()
          )
          .build()
      )
      .invoicing(
        Builder<IAbode>()
          .forname(
            Builder<IInput>()
              .id(ShippingFields.BILLING_FORENAME)
              .value('')
              .valid(false)
              .build()
          )
          .surname(
            Builder<IInput>()
              .id(ShippingFields.BILLING_SURNAME)
              .value('')
              .valid(false)
              .build()
          )
          .company(
            Builder<IInput>()
              .id(ShippingFields.BILLING_COMPANY)
              .value('')
              .valid(false)
              .build()
          )
          .vat(
            Builder<IInput>()
              .id(ShippingFields.BILLING_VAT)
              .value('')
              .valid(false)
              .build()
          )
          .street(
            Builder<IInput>()
              .id(ShippingFields.BILLING_STREET)
              .value('')
              .valid(false)
              .build()
          )
          .streetNo(
            Builder<IInput>()
              .id(ShippingFields.BILLING_STREET_NO)
              .value('')
              .valid(false)
              .build()
          )
          .postcode(
            Builder<IInput>()
              .id(ShippingFields.BILLING_POSTCODE)
              .value('')
              .valid(false)
              .build()
          )
          .cities(
            Builder<ISelect>()
              .id(ShippingFields.BILLING_CITY)
              .value('')
              .options([
                Builder<IOption>()
                  .id('prague')
                  .title('Prague')
                  .value('Prague')
                  .build(),
              ])
              .build()
          )
          .countries(
            Builder<ISelect>()
              .id(ShippingFields.BILLING_COUNTRY)
              .value('')
              .options([
                Builder<IOption>()
                  .id('czechia')
                  .title('Czechia')
                  .value('Czechia')
                  .build(),
              ])
              .build()
          )
          .build()
      )
      .company(
        Builder<ICheckbox>()
          .id(ShippingFields.COMPANY)
          .checked(true)
          .title(EMPTY)
          .build()
      )
      .data(
        Builder<ICheckbox>()
          .id(ShippingFields.DATA)
          .checked(false)
          .title(EMPTY)
          .build()
      )
      .terms(
        Builder<ICheckbox>()
          .id(ShippingFields.TERMS)
          .checked(false)
          .title(EMPTY)
          .build()
      )
      .build();
  });

  beforeEach(() => {
    handleFormChangeSpy.resetHistory();
    handleFormChangeValidSpy.resetHistory();
  });

  beforeEach(() => {
    component = mount(<Shipping {...props} />);
  });

  describe('delivery', () => {
    it('forename', () => {
      const field = component.find(`input#${ShippingFields.DELIVERY_FORENAME}`);
      // @ts-ignore
      field.instance().value = forename;
      field.simulate('change');
      const expected = { ...shippingPropsTest, p: 'a' };
      expected.delivery.forname.value = forename;
      expected.delivery.forname.valid = true;
      expect(handleFormChangeSpy).to.have.been.always.calledWith(
        shippingPropsTest
      );
      expect(handleFormChangeValidSpy).to.have.been.always.calledWith(false);
    });

    it('surname', () => {
      const field = component.find(`input#${ShippingFields.DELIVERY_SURNAME}`);
      // @ts-ignore
      field.instance().value = surname;
      field.simulate('change');
      const expected = { ...shippingPropsTest };
      expected.delivery.surname.value = surname;
      expected.delivery.surname.valid = true;
      expect(handleFormChangeSpy).to.have.been.always.calledWith(
        shippingPropsTest
      );
      expect(handleFormChangeValidSpy).to.have.been.always.calledWith(false);
    });

    it('street', () => {
      const field = component.find(`input#${ShippingFields.DELIVERY_STREET}`);
      // @ts-ignore
      field.instance().value = street;
      field.simulate('change');
      const expected = { ...shippingPropsTest };
      expected.delivery.street.value = street;
      expected.delivery.street.valid = true;
      expect(handleFormChangeSpy).to.have.been.always.calledWith(
        shippingPropsTest
      );
      expect(handleFormChangeValidSpy).to.have.been.always.calledWith(false);
    });

    it('street number', () => {
      const field = component.find(
        `input#${ShippingFields.DELIVERY_STREET_NO}`
      );
      // @ts-ignore
      field.instance().value = streetNo;
      field.simulate('change');
      shippingPropsTest.delivery.streetNo.value = streetNo;
      shippingPropsTest.delivery.streetNo.valid = true;
      expect(handleFormChangeSpy).to.have.been.always.calledWithMatch(
        shippingPropsTest
      );
      expect(handleFormChangeValidSpy).to.have.been.always.calledWithMatch(
        false
      );
    });

    it('city', () => {
      const field = component.find(`select#${ShippingFields.DELIVERY_CITY}`);
      // @ts-ignore
      field.instance().value = city;
      field.simulate('change');
      shippingPropsTest.delivery.cities.value = city;
      shippingPropsTest.delivery.cities.valid = true;
      expect(handleFormChangeSpy).to.have.been.always.calledWithMatch(
        shippingPropsTest
      );
      expect(handleFormChangeValidSpy).to.have.been.always.calledWithMatch(
        false
      );
    });

    it('country', () => {
      const field = component.find(`select#${ShippingFields.DELIVERY_COUNTRY}`);
      // @ts-ignore
      field.instance().value = country;
      field.simulate('change');
      shippingPropsTest.delivery.countries.value = country;
      shippingPropsTest.delivery.countries.valid = true;
      expect(handleFormChangeSpy).to.have.been.always.calledWithMatch(
        shippingPropsTest
      );
      expect(handleFormChangeValidSpy).to.have.been.always.calledWithMatch(
        false
      );
    });

    it('postcode', () => {
      const field = component.find(`input#${ShippingFields.DELIVERY_POSTCODE}`);
      // @ts-ignore
      field.instance().value = postcode;
      field.simulate('change');
      shippingPropsTest.delivery.postcode.value = postcode;
      shippingPropsTest.delivery.postcode.valid = true;
      expect(handleFormChangeSpy).to.have.been.always.calledWithMatch(
        shippingPropsTest
      );
      expect(handleFormChangeValidSpy).to.have.been.always.calledWithMatch(
        false
      );
    });
  });

  describe('billing', () => {
    let shippingPropsBillingTest: ShippingState;
    // TODO
    beforeEach(() => {
      shippingPropsBillingTest = Builder<ShippingState>()
        .delivery(
          Builder<IAbode>()
            .forname(
              Builder<IInput>()
                .id(ShippingFields.DELIVERY_FORENAME)
                .value('')
                .valid(false)
                .build()
            )
            .surname(
              Builder<IInput>()
                .id(ShippingFields.DELIVERY_SURNAME)
                .value('')
                .valid(false)
                .build()
            )
            .street(
              Builder<IInput>()
                .id(ShippingFields.DELIVERY_STREET)
                .value('')
                .valid(false)
                .build()
            )
            .streetNo(
              Builder<IInput>()
                .id(ShippingFields.DELIVERY_STREET_NO)
                .value('')
                .valid(false)
                .build()
            )
            .postcode(
              Builder<IInput>()
                .id(ShippingFields.DELIVERY_POSTCODE)
                .value('')
                .valid(false)
                .build()
            )
            .cities(
              Builder<ISelect>()
                .id(ShippingFields.DELIVERY_CITY)
                .value('')
                .options([
                  Builder<IOption>()
                    .id('prague')
                    .value('Prague')
                    .title('Prague')
                    .build(),
                ])
                .build()
            )
            .countries(
              Builder<ISelect>()
                .id(ShippingFields.DELIVERY_COUNTRY)
                .value('')
                .options([
                  Builder<IOption>()
                    .id('czechia')
                    .value('Czechia')
                    .title('Czechia')
                    .build(),
                ])
                .build()
            )
            .build()
        )
        .invoicing(
          Builder<IAbode>()
            .forname(
              Builder<IInput>()
                .id(ShippingFields.BILLING_FORENAME)
                .value('')
                .valid(false)
                .build()
            )
            .surname(
              Builder<IInput>()
                .id(ShippingFields.BILLING_SURNAME)
                .value('')
                .valid(false)
                .build()
            )
            .company(
              Builder<IInput>()
                .id(ShippingFields.BILLING_COMPANY)
                .value('')
                .valid(false)
                .build()
            )
            .vat(
              Builder<IInput>()
                .id(ShippingFields.BILLING_VAT)
                .value('')
                .valid(false)
                .build()
            )
            .street(
              Builder<IInput>()
                .id(ShippingFields.BILLING_STREET)
                .value('')
                .valid(false)
                .build()
            )
            .streetNo(
              Builder<IInput>()
                .id(ShippingFields.BILLING_STREET_NO)
                .value('')
                .valid(false)
                .build()
            )
            .postcode(
              Builder<IInput>()
                .id(ShippingFields.BILLING_POSTCODE)
                .value('')
                .valid(false)
                .build()
            )
            .cities(
              Builder<ISelect>()
                .id(ShippingFields.BILLING_CITY)
                .value('')
                .options([
                  Builder<IOption>()
                    .id('prague')
                    .title('Prague')
                    .value('Prague')
                    .build(),
                ])
                .build()
            )
            .countries(
              Builder<ISelect>()
                .id(ShippingFields.BILLING_COUNTRY)
                .value('')
                .options([
                  Builder<IOption>()
                    .id('czechia')
                    .title('Czechia')
                    .value('Czechia')
                    .build(),
                ])
                .build()
            )
            .build()
        )
        .company(
          Builder<ICheckbox>()
            .id(ShippingFields.COMPANY)
            .checked(false)
            .title(EMPTY)
            .build()
        )
        .data(
          Builder<ICheckbox>()
            .id(ShippingFields.DATA)
            .checked(false)
            .title(EMPTY)
            .build()
        )
        .terms(
          Builder<ICheckbox>()
            .id(ShippingFields.TERMS)
            .checked(false)
            .title(EMPTY)
            .build()
        )
        .build();
      const checkbox = component.find(`input#${ShippingFields.COMPANY}`);
      // @ts-ignore
      checkbox.instance().checked = false;
      checkbox.simulate('change');
    });

    it('forename', () => {
      const field = component.find(`input#${ShippingFields.BILLING_FORENAME}`);
      // @ts-ignore
      field.instance().value = forename;
      field.simulate('change');
      shippingPropsBillingTest.invoicing.forname.value = forename;
      shippingPropsBillingTest.invoicing.forname.valid = true;
      expect(handleFormChangeSpy).to.have.been.always.calledWithMatch(
        shippingPropsBillingTest
      );
      expect(handleFormChangeValidSpy).to.have.been.always.calledWithMatch(
        false
      );
    });

    it('surname', () => {
      const field = component.find(`input#${ShippingFields.BILLING_SURNAME}`);
      // @ts-ignore
      field.instance().value = surname;
      field.simulate('change');
      shippingPropsBillingTest.invoicing.surname.value = surname;
      shippingPropsBillingTest.invoicing.surname.valid = true;
      expect(handleFormChangeSpy).to.have.been.always.calledWithMatch(
        shippingPropsBillingTest
      );
      expect(handleFormChangeValidSpy).to.have.been.always.calledWithMatch(
        false
      );
    });

    it('postcode', () => {
      const field = component.find(`input#${ShippingFields.BILLING_POSTCODE}`);
      // @ts-ignore
      field.instance().value = postcode;
      field.simulate('change');
      shippingPropsBillingTest.invoicing.postcode.value = postcode;
      shippingPropsBillingTest.invoicing.postcode.valid = true;
      expect(handleFormChangeSpy).to.have.been.always.calledWithMatch(
        shippingPropsBillingTest
      );
      expect(handleFormChangeValidSpy).to.have.been.always.calledWithMatch(
        false
      );
    });

    describe('vat', () => {
      describe('valid', () => {
        it('text', () => {
          const field = component.find(`input#${ShippingFields.BILLING_VAT}`);
          // @ts-ignore
          field.instance().value = vat;
          field.simulate('change');
          (shippingPropsBillingTest.invoicing.vat as IInput).value = vat;
          (shippingPropsBillingTest.invoicing.vat as IInput).valid = true;
          expect(handleFormChangeSpy).to.have.been.always.calledWithMatch(
            shippingPropsBillingTest
          );
          expect(handleFormChangeValidSpy).to.have.been.always.calledWithMatch(
            false
          );
        });

        it('alpha', () => {
          const field = component.find(`input#${ShippingFields.BILLING_VAT}`);
          const vat = 'a1b2c3';
          // @ts-ignore
          field.instance().value = vat;
          field.simulate('change');
          (shippingPropsBillingTest.invoicing.vat as IInput).value = vat;
          (shippingPropsBillingTest.invoicing.vat as IInput).valid = true;
          expect(handleFormChangeSpy).to.have.been.always.calledWithMatch(
            shippingPropsBillingTest
          );
          expect(handleFormChangeValidSpy).to.have.been.always.calledWithMatch(
            false
          );
        });

        it('number', () => {
          const field = component.find(`input#${ShippingFields.BILLING_VAT}`);
          const vat = '123456';
          // @ts-ignore
          field.instance().value = vat;
          field.simulate('change');
          (shippingPropsBillingTest.invoicing.vat as IInput).value = vat;
          (shippingPropsBillingTest.invoicing.vat as IInput).valid = true;
          expect(handleFormChangeSpy).to.have.been.always.calledWithMatch(
            shippingPropsBillingTest
          );
          expect(handleFormChangeValidSpy).to.have.been.always.calledWithMatch(
            false
          );
        });
      });

      describe('invalid', () => {
        it('empty', () => {
          const field = component.find(`input#${ShippingFields.BILLING_VAT}`);
          const vat = EMPTY;
          // @ts-ignore
          field.instance().value = vat;
          field.simulate('change');
          (shippingPropsBillingTest.invoicing.vat as IInput).value = vat;
          (shippingPropsBillingTest.invoicing.vat as IInput).valid = false;
          expect(handleFormChangeSpy).to.have.been.always.calledWithMatch(
            shippingPropsBillingTest
          );
          expect(handleFormChangeValidSpy).to.have.been.always.calledWithMatch(
            false
          );
        });
      });
    });

    it('street', () => {
      const field = component.find(`input#${ShippingFields.BILLING_STREET}`);
      // @ts-ignore
      field.instance().value = street;
      field.simulate('change');
      shippingPropsBillingTest.invoicing.street.value = street;
      shippingPropsBillingTest.invoicing.street.valid = true;
      expect(handleFormChangeSpy).to.have.been.always.calledWithMatch(
        shippingPropsBillingTest
      );
      expect(handleFormChangeValidSpy).to.have.been.always.calledWithMatch(
        false
      );
    });

    it('street number', () => {
      const field = component.find(`input#${ShippingFields.BILLING_STREET_NO}`);
      // @ts-ignore
      field.instance().value = streetNo;
      field.simulate('change');
      shippingPropsBillingTest.invoicing.streetNo.value = streetNo;
      shippingPropsBillingTest.invoicing.streetNo.valid = true;
      expect(handleFormChangeSpy).to.have.been.always.calledWithMatch(
        shippingPropsBillingTest
      );
      expect(handleFormChangeValidSpy).to.have.been.always.calledWithMatch(
        false
      );
    });

    it('city', () => {
      const field = component.find(`select#${ShippingFields.BILLING_CITY}`);
      // @ts-ignore
      field.instance().value = city;
      field.simulate('change');
      shippingPropsBillingTest.invoicing.cities.value = city;
      shippingPropsBillingTest.invoicing.cities.valid = true;
      expect(handleFormChangeSpy).to.have.been.always.calledWithMatch(
        shippingPropsBillingTest
      );
      expect(handleFormChangeValidSpy).to.have.been.always.calledWithMatch(
        false
      );
    });

    it('country', () => {
      const field = component.find(`select#${ShippingFields.BILLING_COUNTRY}`);
      // @ts-ignore
      field.instance().value = country;
      field.simulate('change');
      shippingPropsBillingTest.invoicing.countries.value = country;
      shippingPropsBillingTest.invoicing.countries.valid = true;
      expect(handleFormChangeSpy).to.have.been.always.calledWithMatch(
        shippingPropsBillingTest
      );
      expect(handleFormChangeValidSpy).to.have.been.always.calledWithMatch(
        false
      );
    });
  });

  it('should propagate company change', () => {
    const field = component.find(`input#${ShippingFields.COMPANY}`);
    company = false;
    // @ts-ignore
    field.instance().checked = company;
    field.simulate('change');
    shippingPropsTest.company.checked = company;
    expect(handleFormChangeSpy).to.have.been.always.calledWithMatch(
      shippingPropsTest
    );
    expect(handleFormChangeValidSpy).to.have.been.always.calledWithMatch(false);
  });

  it('should propagate data change', () => {
    const field = component.find(`input#${ShippingFields.DATA}`);
    data = false;
    // @ts-ignore
    field.instance().checked = data;
    field.simulate('change');
    shippingPropsTest.data.checked = data;
    expect(handleFormChangeSpy).to.have.been.always.calledWithMatch(
      shippingPropsTest
    );
    expect(handleFormChangeValidSpy).to.have.been.always.calledWithMatch(false);
  });

  it('should propagate terms change', () => {
    const field = component.find(`input#${ShippingFields.TERMS}`);
    terms = false;
    // @ts-ignore
    field.instance().checked = terms;
    field.simulate('change');
    shippingPropsTest.data.checked = terms;
    expect(handleFormChangeSpy).to.have.been.always.calledWithMatch(
      shippingPropsTest
    );
    expect(handleFormChangeValidSpy).to.have.been.always.calledWithMatch(false);
  });

  it('should mark form valid when all fields are valid', () => {
    const deliveryForename = component.find(
      `input#${ShippingFields.DELIVERY_FORENAME}`
    );
    const deliverySurname = component.find(
      `input#${ShippingFields.DELIVERY_SURNAME}`
    );
    const deliveryPostcode = component.find(
      `input#${ShippingFields.DELIVERY_POSTCODE}`
    );
    const deliveryStreet = component.find(
      `input#${ShippingFields.DELIVERY_STREET}`
    );
    const deliveryStreetNo = component.find(
      `input#${ShippingFields.DELIVERY_STREET_NO}`
    );
    const deliveryCity = component.find(
      `select#${ShippingFields.DELIVERY_CITY}`
    );
    const deliveryCountry = component.find(
      `select#${ShippingFields.DELIVERY_COUNTRY}`
    );
    const companyCheckbox = component.find(`input#${ShippingFields.COMPANY}`);
    // @ts-ignore
    companyCheckbox.instance().checked = false;
    companyCheckbox.simulate('change');

    const billingForename = component.find(
      `input#${ShippingFields.BILLING_FORENAME}`
    );
    const billingSurname = component.find(
      `input#${ShippingFields.BILLING_SURNAME}`
    );
    const billingCompany = component.find(
      `input#${ShippingFields.BILLING_COMPANY}`
    );
    const billingVat = component.find(`input#${ShippingFields.BILLING_VAT}`);
    const billingPostcode = component.find(
      `input#${ShippingFields.BILLING_POSTCODE}`
    );
    const billingStreet = component.find(
      `input#${ShippingFields.BILLING_STREET}`
    );
    const billingStreetNo = component.find(
      `input#${ShippingFields.BILLING_STREET_NO}`
    );
    const billingCity = component.find(`select#${ShippingFields.BILLING_CITY}`);
    const billingCountry = component.find(
      `select#${ShippingFields.BILLING_COUNTRY}`
    );
    const dataCheckbox = component.find(`input#${ShippingFields.DATA}`);
    const termsCheckbox = component.find(`input#${ShippingFields.TERMS}`);
    // @ts-ignore
    deliveryForename.instance().value = forename;
    deliveryForename.simulate('change');
    // @ts-ignore
    deliverySurname.instance().value = surname;
    deliverySurname.simulate('change');
    // @ts-ignore
    deliveryStreet.instance().value = street;
    deliveryStreet.simulate('change');
    // @ts-ignore
    deliveryStreetNo.instance().value = streetNo;
    deliveryStreetNo.simulate('change');
    // @ts-ignore
    deliveryCity.instance().value = city;
    deliveryCity.simulate('change');
    // @ts-ignore
    deliveryCountry.instance().value = country;
    deliveryCountry.simulate('change');
    // @ts-ignore
    deliveryPostcode.instance().value = postcode;
    deliveryPostcode.simulate('change');

    // @ts-ignore
    billingForename.instance().value = forename;
    billingForename.simulate('change');
    // @ts-ignore
    billingSurname.instance().value = surname;
    billingSurname.simulate('change');
    // @ts-ignore
    billingCompany.instance().value = company;
    billingCompany.simulate('change');
    // @ts-ignore
    billingVat.instance().value = vat;
    billingVat.simulate('change');
    // @ts-ignore
    billingPostcode.instance().value = postcode;
    billingPostcode.simulate('change');
    // @ts-ignore
    billingCity.instance().value = city;
    billingCity.simulate('change');
    // @ts-ignore
    billingCountry.instance().value = country;
    billingCountry.simulate('change');
    // @ts-ignore
    billingStreet.instance().value = street;
    billingStreet.simulate('change');
    // @ts-ignore
    billingStreetNo.instance().value = streetNo;
    billingStreetNo.simulate('change');
    // @ts-ignore
    dataCheckbox.instance().checked = true;
    dataCheckbox.simulate('change');
    // @ts-ignore
    termsCheckbox.instance().checked = true;
    termsCheckbox.simulate('change');

    expect(handleFormChangeValidSpy).to.have.been.calledWith(true);
  });
});

chai.use(sinonChai);
chai.use(chaiEnzyme());
