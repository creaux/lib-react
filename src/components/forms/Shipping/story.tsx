import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import { Shipping } from "./container";
import { Form, FormType } from "../Form/component";
import { Button, Type } from "../Button";

const story = storiesOf("Organisms/forms/Shipping", module);

story.add("normal", () => {
  const [disabled, setDisabled] = useState(true);
  const handleFormChange = () => {};
  const handleFormValidChange = (valid: boolean) => {
    setDisabled(!valid);
  };
  return (
    <Form type={FormType.NORMAL} onSubmit={() => {}}>
      <Shipping
        onFormValidChange={handleFormValidChange}
        onFormChange={handleFormChange}
      />
      <Button type={Type.SUBMIT} disabled={disabled}>
        Submit
      </Button>
    </Form>
  );
});

story.add("onplace", () => {
  const [disabled, setDisabled] = useState(true);
  const handleFormChange = () => {};
  const handleFormValidChange = (valid: boolean) => {
    setDisabled(!valid);
  };
  return (
    <Form type={FormType.ONPLACE} onSubmit={() => {}}>
      <Shipping
        onFormValidChange={handleFormValidChange}
        onFormChange={handleFormChange}
      />
      <Button type={Type.SUBMIT} disabled={disabled}>
        Submit
      </Button>
    </Form>
  );
});

story.add("inline", () => {
  const [disabled, setDisabled] = useState(true);
  const handleFormChange = () => {};
  const handleFormValidChange = (valid: boolean) => {
    setDisabled(!valid);
  };
  return (
    <Form type={FormType.INLINE} onSubmit={() => {}}>
      <Shipping
        onFormValidChange={handleFormValidChange}
        onFormChange={handleFormChange}
      />
      <Button type={Type.SUBMIT} disabled={disabled}>
        Submit
      </Button>
    </Form>
  );
});
