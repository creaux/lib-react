import * as React from "react";
import { storiesOf } from "@storybook/react";
import { Email } from "./component";
import { Form, FormType } from "../../../Form/component";

const story = storiesOf("Atoms/forms/Email", module);

story.add("normal", () => (
  <Form type={FormType.NORMAL} onSubmit={() => {}}>
    <Email
      placeholder="Please fill email."
      id="email"
      label="Email"
      onChange={() => {}}
      value=""
      onValidChange={() => {}}
      messages={["Valid", "Invalid", "Default"]}
    />
  </Form>
));

story.add("onplace", () => (
  <Form type={FormType.ONPLACE} onSubmit={() => {}}>
    <Email
      placeholder="Please fill email."
      id="email"
      label="Email"
      onChange={() => {}}
      value=""
      onValidChange={() => {}}
      messages={["Valid", "Invalid", "Default"]}
    />
  </Form>
));

story.add("inline", () => (
  <Form type={FormType.INLINE} onSubmit={() => {}}>
    <Email
      placeholder="Please fill email."
      id="email"
      label="Email"
      onChange={() => {}}
      value=""
      onValidChange={() => {}}
      messages={["Valid", "Invalid", "Default"]}
    />
  </Form>
));
