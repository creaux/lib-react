import React from "react";
import { storiesOf } from "@storybook/react";
import { Svg } from "./component";
import { ReactComponent as SvgComponent } from "./svg.svg";
import { text } from "@storybook/addon-knobs";

storiesOf("Atoms/Svg", module).add("default", () => {
  const props = {
    Svg: SvgComponent,
    link: text("Link", "#"),
    aria: {
      label: text("Label", "pyxis media")
    },
    fill: "black"
  };
  return <Svg {...props} />;
});
