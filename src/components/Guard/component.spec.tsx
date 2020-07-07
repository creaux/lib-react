import React, { FunctionComponent } from "react";
import { Guard } from "./component";
import { shallow, ShallowWrapper } from "enzyme";
import chai, { expect } from "chai";
import sinonChai from "sinon-chai";
import chaiEnzyme from "chai-enzyme";

abstract class Abstract extends React.Component {}

class Container extends Abstract {}

interface ComponentProps {
  condition?: boolean;
}

const Component: FunctionComponent<ComponentProps> = () => null;

const Another = () => <div />;

describe("Guard", () => {
  let component: ShallowWrapper;

  it("should not render anything when children is not present", () => {
    component = shallow(<Guard Component={Component} />);
    console.log(component.debug());
    expect(component).to.be.blank();
  });

  it("should render only filtered component", () => {
    component = shallow(
      <Guard Component={Component}>
        <Component />
        <Another />
      </Guard>
    );
    expect(component.find(Component)).to.be.present();
    expect(component.find(Another)).not.to.be.present();
  });

  it("should render only filtered container", () => {
    component = shallow(
      <Guard Component={Abstract}>
        <Container />
        <Another />
      </Guard>
    );
    expect(component.find(Container)).to.be.present();
    expect(component.find(Another)).not.to.be.present();
  });

  it("should render component if when is truthy", () => {
    component = shallow(
      // @ts-ignore
      <Guard Component={Component} when={["condition"]}>
        <Component condition={true} />
        <Another />
      </Guard>
    );
    expect(component.find(Component)).to.be.present();
    expect(component.find(Another)).not.to.be.present();
  });

  it("should not render component if when is falsy", () => {
    component = shallow(
      // @ts-ignore
      <Guard Component={Component} when={["condition"]}>
        <Component condition={false} />
      </Guard>
    );
    expect(component.find(Component)).not.to.be.present();
  });

  // Doesn't work perhaps as otherwise is called as a function so it is not child of Guard
  // it("should render Otherwise component if when is falsy", () => {
  //   component = shallow(
  //     <Guard Component={Component} when={['condition']} otherwise={() => <Another />}>
  //       <Component condition={false} />
  //     </Guard>
  //   );
  //   expect(component.find(Component)).not.to.be.present();
  //   expect(component.find(Another)).to.be.present();
  // });
});

chai.use(chaiEnzyme());
chai.use(sinonChai);
