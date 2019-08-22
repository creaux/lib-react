import React from 'react';
import { Carousel, CarouselProps } from './component';
import { shallow, ShallowWrapper } from 'enzyme';
import chai, { expect } from 'chai';
import chaiSinon from 'sinon-chai';
import chaiEnzyme from 'chai-enzyme';
import { mocks } from './mocks';
import { Carousel as BsCarousel } from 'react-bootstrap';
import { CarouselSlide } from './types';

describe('Carousel', () => {
  it('should contain Carousel container', () => {
    const component = shallow(<Carousel {...mocks.simple} />);
    expect(component.find(BsCarousel)).to.be.present();
  });

  describe('simple variant', () => {
    let shallowed: ShallowWrapper;
    let props: CarouselProps;

    beforeEach(() => {
      props = mocks.simple;
      shallowed = shallow(<Carousel {...props} />);
    });

    it('should render Item', () => {
      const component = shallowed.shallow();
      expect(component.find(BsCarousel.Item)).to.be.present();
    });

    it('should render Item three times', () => {
      const component = shallowed.shallow().find('Item');
      expect(component).to.have.exactly(3);
    });

    it('should render img one time', () => {
      const component = shallowed.shallow().find('Item');
      expect(component).to.have.exactly(3);
    });

    it('should render img', () => {
      const component = shallowed
        .shallow()
        .find('Item')
        .first()
        .shallow()
        .shallow();
      expect(component.find('img')).to.be.present();
      expect(component.find('img')).to.have.className('d-block');
      expect(component.find('img')).to.have.className('w-100');
      expect(component.find('img')).to.have.prop(
        'src',
        (props.slides[0] as CarouselSlide).src
      );
      expect(component.find('img')).to.have.prop(
        'alt',
        (props.slides[0] as CarouselSlide).alt
      );
    });
  });

  describe('multi variant', () => {
    let shallowed: ShallowWrapper;
    let props: CarouselProps;

    beforeEach(() => {
      props = mocks.multi;
      shallowed = shallow(<Carousel {...props} />);
    });

    it('should render Item', () => {
      const component = shallowed.shallow();
      expect(component.find(BsCarousel.Item)).to.be.present();
    });

    it('should render Items two times', () => {
      const component = shallowed.shallow().find('Items');
      expect(component).to.have.exactly(2);
    });

    it('should render img four times', () => {
      const component = shallowed
        .shallow()
        .find('Items')
        .first()
        .shallow();
      expect(component.find('Item')).to.have.exactly(4);
    });

    it('should render img', () => {
      const component = shallowed
        .shallow()
        .find('Items')
        .first()
        .shallow()
        .find('Item')
        .first()
        .shallow()
        .shallow();
      expect(component.find('img')).to.be.present();
      expect(component.find('img')).to.not.have.className('d-block');
      expect(component.find('img')).to.have.className('w-25');
      expect(component.find('img')).to.have.prop(
        'src',
        mocks.multi.slides[0][0].src
      );
      expect(component.find('img')).to.have.prop(
        'alt',
        mocks.multi.slides[0][0].alt
      );
    });
  });
});

chai.use(chaiSinon);
chai.use(chaiEnzyme());
