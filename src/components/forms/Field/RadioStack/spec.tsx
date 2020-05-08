import React from 'react';
import { RadioStack } from './component';
import { shallow, ShallowWrapper } from 'enzyme';
import chai, { expect } from 'chai';
import sinonChai from 'sinon-chai';
import chaiEnzyme from 'chai-enzyme';
import { props } from './story';

describe('Guard', () => {
  let component: ShallowWrapper;

  beforeEach(() => {
    component = shallow(<RadioStack {...props} />);
  });

  it('should set active class when active', () => {
    expect(component.find('label').first()).to.have.className('active');
  });

  it('should set checked to active input', () => {
    expect(component.find('input').at(1)).to.have.attr('checked', 'true');
  });
});

chai.use(chaiEnzyme());
chai.use(sinonChai);
