import React from 'react';
import { Button, Variants } from '.';
import { mount } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';

describe('Button', () => {
  it('should have class btn by default', () => {
    const component = mount(
      <Button variant={Variants.PRIMARY} onClick={() => {}}>
        Click me!
      </Button>
    );
    expect(component).to.have.className('btn');
  });

  it('should render button according its type', () => {
    expect(
      mount(
        <Button variant={Variants.PRIMARY} onClick={() => {}}>
          Click me!
        </Button>
      )
    ).to.have.className('btn-primary');
    expect(
      mount(
        <Button variant={Variants.SECONDARY} onClick={() => {}}>
          Click me!
        </Button>
      )
    ).to.have.className('btn-secondary');
    expect(
      mount(
        <Button variant={Variants.SUCCESS} onClick={() => {}}>
          Click me!
        </Button>
      )
    ).to.have.className('btn-success');
    expect(
      mount(
        <Button variant={Variants.INFO} onClick={() => {}}>
          Click me!
        </Button>
      )
    ).to.have.className('btn-info');
    expect(
      mount(
        <Button variant={Variants.WARNING} onClick={() => {}}>
          Click me!
        </Button>
      )
    ).to.have.className('btn-warning');
    expect(
      mount(
        <Button variant={Variants.DANGER} onClick={() => {}}>
          Click me!
        </Button>
      )
    ).to.have.className('btn-danger');
    expect(
      mount(
        <Button variant={Variants.DARK} onClick={() => {}}>
          Click me!
        </Button>
      )
    ).to.have.className('btn-dark');
    expect(
      mount(
        <Button variant={Variants.LIGHT} onClick={() => {}}>
          Click me!
        </Button>
      )
    ).to.have.className('btn-light');
    expect(
      mount(
        <Button variant={Variants.OUTLINE_PRIMARY} onClick={() => {}}>
          Click me!
        </Button>
      )
    ).to.have.className('btn-outline-primary');
    expect(
      mount(
        <Button variant={Variants.OUTLINE_SECONDARY} onClick={() => {}}>
          Click me!
        </Button>
      )
    ).to.have.className('btn-outline-secondary');
    expect(
      mount(
        <Button variant={Variants.OUTLINE_SUCCESS} onClick={() => {}}>
          Click me!
        </Button>
      )
    ).to.have.className('btn-outline-success');
    expect(
      mount(
        <Button variant={Variants.OUTLINE_DANGER} onClick={() => {}}>
          Click me!
        </Button>
      )
    ).to.have.className('btn-outline-danger');
    expect(
      mount(
        <Button variant={Variants.OUTLINE_WARNING} onClick={() => {}}>
          Click me!
        </Button>
      )
    ).to.have.className('btn-outline-warning');
    expect(
      mount(
        <Button variant={Variants.OUTLINE_INFO} onClick={() => {}}>
          Click me!
        </Button>
      )
    ).to.have.className('btn-outline-info');
    expect(
      mount(
        <Button variant={Variants.OUTLINE_DARK} onClick={() => {}}>
          Click me!
        </Button>
      )
    ).to.have.className('btn-outline-dark');
    expect(
      mount(
        <Button variant={Variants.OUTLINE_LIGHT} onClick={() => {}}>
          Click me!
        </Button>
      )
    ).to.have.className('btn-outline-light');
  });
});

chai.use(chaiEnzyme());
