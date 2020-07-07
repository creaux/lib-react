import chai, { expect } from "chai";
import chaiEnzyme from "chai-enzyme";
import { mount, ReactWrapper } from "enzyme";
import * as React from "react";
import { EmailContainer } from "./container";

describe("EmailCrawler", () => {
  let component: ReactWrapper;
  const props = {
    labels: {
      input: "Email",
      button: "Register"
    },
    onSubmit: () => {},
    messages: {
      invalid: "Please provide correct email address.",
      valid: "Is Valid"
    }
  };

  beforeEach(() => {
    component = mount(<EmailContainer {...props} />);
  });

  it("should show error message when email is not valid", () => {
    // @ts-ignore
    component.find("input").instance().value = "abc";
    component.find("input").simulate("change");
    expect(component.find(".invalid-feedback")).to.be.present();
    expect(component.find(".invalid-feedback").text()).to.be.equal(
      props.messages.invalid
    );
    expect(component.find("button")).to.be.disabled();
  });

  it("should not show error message when email is valid", () => {
    // @ts-ignore
    component.find("input").instance().value = "some@email.com";
    component.find("input").simulate("change");
    expect(component.find(".invalid-feedback")).to.not.be.present();
  });
});

chai.use(chaiEnzyme());
