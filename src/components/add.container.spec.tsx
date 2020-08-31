import React, { FunctionComponent } from 'react';
import { AddContainer, AddContainerProps } from './add.container';
import { AddComponent, AddComponentProps } from './add.component';
import { shallow, ShallowWrapper } from 'enzyme';
import chai, { expect } from 'chai';
import { Raiser, RaiserProps } from './raiser.container';
import { Button, Variants } from './forms/Button';
import { spy, SinonSpy } from 'sinon';
import chaiSinon from 'sinon-chai';
import chaiEnzyme from 'chai-enzyme';

describe('Add', () => {
  describe('Component', () => {
    let component: ShallowWrapper<FunctionComponent<AddComponentProps>>;
    let onAddSpy: SinonSpy;
    let onCountSpy: SinonSpy;

    beforeEach(() => {
      onAddSpy = spy();
      onCountSpy = spy();
      component = shallow<FunctionComponent<AddComponentProps>>(
        <AddComponent
          title="Lorem ipsum"
          onCount={onCountSpy}
          onAdd={onAddSpy}
        />
      );
    });

    it('should render Add component', () => {
      expect(component).to.be.present();
    });

    it('should contain Raiser', () => {
      expect(component.find<RaiserProps>(Raiser)).to.have.prop(
        'onCount',
        onCountSpy
      );
    });

    it('should contain Button', () => {
      expect(component.find(Button)).to.have.prop('variant', Variants.PRIMARY);
      expect(component.find(Button)).to.have.prop('onClick', onAddSpy);
    });
  });

  describe('Container', () => {
    let container: ShallowWrapper<AddContainerProps, {}, AddContainer>;
    let onAddSpy: SinonSpy;

    beforeEach(() => {
      onAddSpy = spy();
      container = shallow<AddContainer>(
        <AddContainer title="Lorem ipsum" onAdd={onAddSpy} />
      );
    });

    it('should render Add container', () => {
      expect(container).to.be.present();
    });

    it('should call onAdd on handleAdd', () => {
      const event = {} as React.MouseEvent<HTMLButtonElement>;
      container.instance().handleAdd(event);
      // eslint-disable-next-line no-unused-expressions
      expect(onAddSpy).to.have.been.called;
    });

    it('should assign count on handleCount', () => {
      const count = 33;
      container.instance().handleCount(count);
      expect(container.instance().count).to.be.equal(33);
    });

    it('should pass handleAdd on AddComponent', () => {
      expect(container.instance().handleAdd).to.deep.equal(
        container.find<AddComponentProps>(AddComponent).props().onAdd
      );
    });
  });
});

chai.use(chaiSinon);
chai.use(chaiEnzyme());
