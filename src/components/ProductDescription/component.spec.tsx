import React from 'react';
import { ProductDescription } from './component';
import { shallow, ShallowWrapper } from 'enzyme';
import chai, { expect } from 'chai';
import chaiSinon from 'sinon-chai';
import chaiEnzyme from 'chai-enzyme';
import { Button } from '../forms/Button';
import { Variants } from '../forms/Button';
import { Sizes } from '../types/sizes';
import { spy } from 'sinon';

describe('ProductDescription', () => {
  let component: ShallowWrapper;
  const props = {
    title: 'Lorem',
    category: 'Dolor',
    description:
      'Etiam porta sem malesuada magna mollis euismod. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed posuere consectetur est at lobortis. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.',
    price: '$300',
    action: 'Add to basket',
    onAdd: spy()
  };

  beforeEach(() => {
    component = shallow(<ProductDescription {...props} />);
  });

  it('should be possible to click on button', () => {
    const button = component.find(Button);
    button.simulate('click');
    expect(props.onAdd).to.have.been.calledOnce;
  });
});

chai.use(chaiSinon);
chai.use(chaiEnzyme());
