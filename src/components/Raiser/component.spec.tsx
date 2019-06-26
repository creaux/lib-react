import React from 'react';
import { Raiser } from '.';
import { Raiser as RaiserComponent } from './component';
import { shallow, mount } from 'enzyme';
import chai, { expect } from 'chai';
import chaiSinon from 'sinon-chai';
import chaiEnzyme from 'chai-enzyme';
import { InputGroup, FormControl } from 'react-bootstrap';
import { Button, Variants } from '../forms/Button';

describe('Raiser', () => {
  it('should have defined structure', () => {
    const component = shallow(<Raiser onCount={() => {}} />)
      .find(RaiserComponent)
      .shallow();
    expect(component.find(InputGroup)).to.be.present();
    expect(component.find(InputGroup))
      .to.have.exactly(1)
      .descendants(InputGroup.Prepend);
    expect(component.find(InputGroup.Prepend))
      .to.have.exactly(1)
      .descendants(Button);
    expect(component.find(InputGroup))
      .to.have.exactly(1)
      .descendants(FormControl);
    expect(component.find(InputGroup))
      .to.have.exactly(1)
      .descendants(InputGroup.Append);
    expect(component.find(InputGroup.Append))
      .to.have.exactly(1)
      .descendants(Button);
  });

  it('should render prepend button of type secondary', () => {
    const component = shallow(<Raiser onCount={() => {}} />)
      .find(RaiserComponent)
      .shallow();
    expect(component.find(InputGroup.Prepend).find(Button))
      .to.have.prop('variant')
      .to.be.equal(Variants.SECONDARY);
  });

  it('should not decrease amount under 0', () => {
    const component = mount(<Raiser onCount={() => {}} />).find(
      RaiserComponent
    );
    const prependButton = component.find(InputGroup.Prepend).find(Button);
    prependButton.simulate('click');
    expect(component.find(FormControl)).to.have.prop('value', '0');
  });

  it('should increase amount', () => {
    const component = mount(<Raiser onCount={() => {}} />).find(
      RaiserComponent
    );
    const appendButton = component.find(InputGroup.Append).find(Button);
    appendButton.simulate('click');
    expect(component.find(FormControl)).to.have.attr('value', '1');
  });

  it('should increase amount and decrease', () => {
    const component = mount(<Raiser onCount={() => {}} />).find(
      RaiserComponent
    );
    const appendButton = component.find(InputGroup.Append).find(Button);
    appendButton.simulate('click');
    appendButton.simulate('click');
    expect(component.find(FormControl)).to.have.attr('value', '2');
    const prependButton = component.find(InputGroup.Prepend).find(Button);
    prependButton.simulate('click');
    expect(component.find(FormControl)).to.have.attr('value', '1');
  });
});

chai.use(chaiSinon);
chai.use(chaiEnzyme());
