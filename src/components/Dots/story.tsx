import React from "react";
import { storiesOf } from "@storybook/react";
import { Dots } from "./component";

const story = storiesOf("Atoms/Dots", module);

story.add("default", () => <Dots count={3} active={1} onDot={console.log} />);
