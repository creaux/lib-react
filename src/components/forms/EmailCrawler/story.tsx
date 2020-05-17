import React from "react";
import { storiesOf } from "@storybook/react";
import { EmailContainer as Email, EmailProps } from "./container";

const stories = storiesOf("Organisms/forms/EmailCrawler", module);

const name = "default";

stories.add(name, () => {
  const props: EmailProps = {
    labels: { input: "Email", button: "Send" },
    onSubmit: (email: string) => console.log(email)
  };
  return <Email {...props} />;
});
