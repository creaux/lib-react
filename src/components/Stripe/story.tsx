import React from "react";
import { storiesOf } from "@storybook/react";
import { Stripe } from "./component";

const story = storiesOf("Organisms/Stripe", module);

story.add("default", () => <Stripe />);
