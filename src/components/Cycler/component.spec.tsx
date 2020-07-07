import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import chai, { expect } from "chai";
import { Cycler, CyclerProps } from "./component";
import { spy, stub } from "sinon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import chaiEnzyme from "chai-enzyme";
import chaiSinon from "sinon-chai";

const { assign } = Object;
const itemClickSpy = spy();
const itemWrapperSpy = stub();
itemWrapperSpy.returns(itemClickSpy);

const props = {
  items: [
    {
      id: "0",
      title: "Title"
    }
  ],
  position: 0,
  up: spy(),
  down: spy(),
  isActive: stub(),
  handleItemClick: itemWrapperSpy
};

describe("Cycler component", () => {
  let component: ShallowWrapper<CyclerProps>;

  beforeEach(() => {
    component = shallow(<Cycler {...props} />);
  });

  it("should render component", () => {
    expect(component).to.be.present();
  });

  it("should have particular structure", () => {
    expect(component)
      .to.have.exactly(1)
      .descendants(".cycler");
  });

  describe("link up", () => {
    let link: ShallowWrapper;

    beforeEach(() => {
      link = component
        .find(".cycler")
        .children("button")
        .first();
    });

    it("should have link with possibility to handle click event", () => {
      link.simulate("click");
      // eslint-disable-next-line no-unused-expressions
      expect(props.up).to.have.been.calledOnce;
    });

    it("should contain font-awesome icon", () => {
      expect(link)
        .to.have.exactly(1)
        .descendants(FontAwesomeIcon);
    });

    it("should contain font-awesome icon with props", () => {
      expect(link.find(FontAwesomeIcon)).with.props({
        icon: faChevronUp,
        size: "2x",
        className: "up"
      });
    });
  });

  describe("link down", () => {
    let link: ShallowWrapper;

    beforeEach(() => {
      link = component
        .find(".cycler")
        .children("button")
        .last();
    });

    it("should have link with possibility to handle click event", () => {
      link.simulate("click");
      // eslint-disable-next-line no-unused-expressions
      expect(props.down).to.have.been.calledOnce;
    });

    it("should contain font-awesome icon", () => {
      expect(link)
        .to.have.exactly(1)
        .descendants(FontAwesomeIcon);
    });

    it("should contain font-awesome icon with props", () => {
      expect(link.find(FontAwesomeIcon)).with.props({
        icon: faChevronDown,
        size: "2x",
        className: "down"
      });
    });
  });

  describe("lister", () => {
    let cycler: ShallowWrapper;
    let wrapper: ShallowWrapper;

    beforeEach(() => {
      cycler = component.find(".cycler");
      wrapper = cycler.children(".wrapper");
    });

    it("should contain lister", () => {
      expect(wrapper).to.be.present();
    });

    it("should contain list", () => {
      expect(wrapper)
        .to.have.exactly(1)
        .descendants("ul");
    });

    it("should container list with props", () => {
      expect(wrapper.children("ul")).to.have.props({
        className: "items"
        // style: { top: '0px' },
      });
    });

    it("should have list with exactly one child", () => {
      expect(wrapper.children("ul"))
        .to.have.exactly(1)
        .descendants("li");
    });

    it("should have list with one descendant of props", () => {
      expect(wrapper.find("li")).to.have.className("item");
    });

    it("should have active class when active item", () => {
      const newProps = assign({}, props);
      newProps.isActive.returns(true);
      const fixture = shallow(<Cycler {...props} />);
      expect(fixture.find("li")).to.have.className("active");
    });

    it("should contain one list item with link", () => {
      expect(wrapper.find("li"))
        .to.have.exactly(1)
        .descendants("button");
      expect(wrapper.find("li").children("button")).to.have.props({
        className: "btn btn-link link"
      });
    });

    it("should be possible to click on item link", () => {
      // expect(itemWrapperSpy).to.have.been.calledWith(props.items[0].id);
      wrapper
        .find("li")
        .children("button")
        .simulate("click");
      // eslint-disable-next-line no-unused-expressions
      expect(itemClickSpy).to.have.been.calledOnce;
    });
  });
});

chai.use(chaiEnzyme());
chai.use(chaiSinon);
