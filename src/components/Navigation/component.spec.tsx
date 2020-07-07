import React from "react";
import { shallow } from "enzyme";
import { Navigation } from "./component";
import chai, { expect } from "chai";
import chaiSinon from "sinon-chai";
import chaiEnzyme from "chai-enzyme";
import { props } from "./mocks";
import { ReactComponent as SvgComponent } from "../Svg/svg.svg";
import { NavigationBrand } from "../NavigationBrand";

describe("Navigation", () => {
  it("should be present", () => {
    const component = shallow(<Navigation {...props} />);
    expect(component).to.be.present();
  });

  it("should contain Navbar", () => {
    const component = shallow(<Navigation {...props} />);
    const navbar = component.find(".navbar");
    expect(navbar).to.be.present();
  });

  it("should contain Nav", () => {
    const component = shallow(<Navigation {...props} />);
    const navbar = component.find(".navbar");
    const nav = navbar.find(".navbar-nav");
    expect(navbar)
      .to.have.exactly(1)
      .descendants(".navbar-nav");
    expect(nav).to.have.prop("className", "navbar-nav mr-auto");
  });

  it("should contain Nav.Link", () => {
    const component = shallow(<Navigation {...props} />);
    const navbar = component.find(".navbar");
    const nav = navbar.find(".navbar-nav");
    const navLink = nav.find(".nav-link");
    expect(nav)
      .to.have.exactly(2)
      .descendants(".nav-item");
    // Doesn't make sense on {}
    // expect(navLink.first()).to.have.prop('href', props.items[0].link);
    // expect(navLink.at(1)).to.have.prop('href', props.items[1].link);
  });

  it("should contain Brand", () => {
    const component = shallow(
      <Navigation {...props}>
        <NavigationBrand brand={SvgComponent} link="" />
      </Navigation>
    );
    const navbar = component.find(NavigationBrand);
    expect(navbar).to.be.present();
  });
});

chai.use(chaiSinon);
chai.use(chaiEnzyme());
