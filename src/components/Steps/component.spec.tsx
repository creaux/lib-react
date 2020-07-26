/* eslint no-unused-expressions: 0 */
import React from 'react';
import { Steps } from './component';
import { shallow, ShallowWrapper } from 'enzyme';
import chai, { expect } from 'chai';
import { stub, SinonStub, SinonSpy, spy } from 'sinon';
import chaiSinon from 'sinon-chai';
import chaiEnzyme from 'chai-enzyme';
import { props } from './story';

describe('Steps', () => {
  let component: ShallowWrapper;
  let handleStepStub: SinonStub;
  let handleStepSpy: SinonSpy;

  beforeEach(() => {
    handleStepSpy = spy();
    handleStepStub = stub().returns(handleStepSpy);
    component = shallow(<Steps {...props} onStep={handleStepStub} />);
  });

  it('should exist', () => {
    expect(component).to.be.present();
  });

  it('should initialize onStep functions', () => {
    expect(handleStepStub).to.have.been.calledWith(0);
    expect(handleStepStub).to.have.been.calledWith(1);
    expect(handleStepStub).to.have.been.calledWith(2);
    expect(handleStepStub).to.not.have.been.calledWith(3);
  });

  it('should get number of step on click', () => {
    component.find('button').first().simulate('click');
    expect(handleStepSpy).to.have.been.called;
  });
});

chai.use(chaiSinon);
chai.use(chaiEnzyme());
