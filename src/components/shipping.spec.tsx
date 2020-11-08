import React from 'react';
import {
  ShippingAbstract,
  ShippingAbstractProps,
  ShippingState,
} from './shipping.abstract.container';
import { mount, ReactWrapper } from 'enzyme';
import chai, { expect } from 'chai';
import { SinonSpy, spy } from 'sinon';
import chaiEnzyme from 'chai-enzyme';
import sinonChai from 'sinon-chai';
import { Builder } from '../../builder';
import { ShippingTitles } from './shipping.component';
import { ShippingFields } from './shipping.fields';
import { shippingState } from './shipping.props-mock';

describe('Shipping', () => {
  let component: ReactWrapper<ShippingAbstract>;
  let props: ShippingAbstractProps;
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

  beforeEach(() => {
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

    handleFormChangeSpy = spy();
    handleFormChangeValidSpy = spy();

    shippingPropsTest = Object.assign({}, shippingState);

    props = Builder<ShippingAbstractProps>()
      .titles(
        Builder<ShippingTitles>()
          .delivery('Delivery')
          .company('Billing')
          .terms('Agree with Terms and Conditions')
          .data('Agree with Personal data processing')
          .isCompany('Are billing details same as delivery details')
          .build()
      )
      .onFormValidChange(handleFormChangeValidSpy)
      .onFormChange(handleFormChangeSpy)
      .build();
    component = mount(<ShippingAbstract {...props} />);
  });

  it('should propagate forename change', () => {
    const field = component.find(`input#${ShippingFields.DELIVERY_FORENAME}`);
    // @ts-ignore
    field.instance().value = forename;
    field.simulate('change');
    shippingPropsTest.delivery.forname.value = forename;
    shippingPropsTest.delivery.forname.valid = true;
    expect(handleFormChangeSpy).to.have.been.always.calledWithMatch(
      shippingPropsTest
    );
    expect(handleFormChangeValidSpy).to.have.been.always.calledWithMatch(false);
  });

  it('should propagate surname change', () => {
    const field = component.find(`input#${ShippingFields.DELIVERY_SURNAME}`);
    // @ts-ignore
    field.instance().value = surname;
    field.simulate('change');
    shippingPropsTest.delivery.surname.value = surname;
    shippingPropsTest.delivery.surname.valid = true;
    expect(handleFormChangeSpy).to.have.been.always.calledWithMatch(
      shippingPropsTest
    );
    expect(handleFormChangeValidSpy).to.have.been.always.calledWithMatch(false);
  });

  it('should propagate street change', () => {
    const field = component.find(`input#${ShippingFields.DELIVERY_STREET}`);
    // @ts-ignore
    field.instance().value = street;
    field.simulate('change');
    shippingPropsTest.delivery.street.value = street;
    shippingPropsTest.delivery.street.valid = true;
    expect(handleFormChangeSpy).to.have.been.always.calledWithMatch(
      shippingPropsTest
    );
    expect(handleFormChangeValidSpy).to.have.been.always.calledWithMatch(false);
  });

  it('should propagate street change', () => {
    const field = component.find(`input#${ShippingFields.DELIVERY_STREET_NO}`);
    // @ts-ignore
    field.instance().value = streetNo;
    field.simulate('change');
    shippingPropsTest.delivery.streetNo.value = streetNo;
    shippingPropsTest.delivery.streetNo.valid = true;
    expect(handleFormChangeSpy).to.have.been.always.calledWithMatch(
      shippingPropsTest
    );
    expect(handleFormChangeValidSpy).to.have.been.always.calledWithMatch(false);
  });

  it('should propagate city change', () => {
    const field = component.find(`select#${ShippingFields.DELIVERY_CITY}`);
    // @ts-ignore
    field.instance().value = city;
    field.simulate('change');
    shippingPropsTest.delivery.cities.value = city;
    shippingPropsTest.delivery.cities.valid = true;
    expect(handleFormChangeSpy).to.have.been.always.calledWithMatch(
      shippingPropsTest
    );
    expect(handleFormChangeValidSpy).to.have.been.always.calledWithMatch(false);
  });

  it('should propagate country change', () => {
    const field = component.find(`select#${ShippingFields.DELIVERY_COUNTRY}`);
    // @ts-ignore
    field.instance().value = country;
    field.simulate('change');
    shippingPropsTest.delivery.countries.value = country;
    shippingPropsTest.delivery.countries.valid = true;
    expect(handleFormChangeSpy).to.have.been.always.calledWithMatch(
      shippingPropsTest
    );
    expect(handleFormChangeValidSpy).to.have.been.always.calledWithMatch(false);
  });

  it('should propagate postcode change', () => {
    const field = component.find(`input#${ShippingFields.DELIVERY_POSTCODE}`);
    // @ts-ignore
    field.instance().value = postcode;
    field.simulate('change');
    shippingPropsTest.delivery.postcode.value = postcode;
    shippingPropsTest.delivery.postcode.valid = true;
    expect(handleFormChangeSpy).to.have.been.always.calledWithMatch(
      shippingPropsTest
    );
    expect(handleFormChangeValidSpy).to.have.been.always.calledWithMatch(false);
  });

  it('should propagate billing forename change', () => {
    const field = component.find(`input#${ShippingFields.BILLING_FORENAME}`);
    // @ts-ignore
    field.instance().value = forename;
    field.simulate('change');
    shippingPropsTest.invoicing.forname.value = forename;
    shippingPropsTest.invoicing.forname.valid = true;
    expect(handleFormChangeSpy).to.have.been.always.calledWithMatch(
      shippingPropsTest
    );
    expect(handleFormChangeValidSpy).to.have.been.always.calledWithMatch(false);
  });

  it('should propagate billing surname change', () => {
    const field = component.find(`input#${ShippingFields.BILLING_SURNAME}`);
    // @ts-ignore
    field.instance().value = surname;
    field.simulate('change');
    shippingPropsTest.invoicing.surname.value = surname;
    shippingPropsTest.invoicing.surname.valid = true;
    expect(handleFormChangeSpy).to.have.been.always.calledWithMatch(
      shippingPropsTest
    );
    expect(handleFormChangeValidSpy).to.have.been.always.calledWithMatch(false);
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
});

chai.use(sinonChai);
chai.use(chaiEnzyme());
