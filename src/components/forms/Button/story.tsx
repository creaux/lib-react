import React from "react";
import { storiesOf } from "@storybook/react";
import { Button } from ".";
import { Variants } from "./types";
import Marked from "storybook-readme/components/Marked";
import HEADER from "./markdown/HEADER.md";
import VARIANTS_HEADER from "./markdown/VARIANTS_HEADER.md";
import { action } from "@storybook/addon-actions";

const { keys } = Object;

const story = storiesOf("Atoms/forms/Button", module);

story.add("Documentation", () => (
  <div style={{ padding: "20px" }}>
    <Marked md={HEADER} />
    <Marked md={"<br />"} />
    <Marked md={VARIANTS_HEADER} />
    <Marked md={"<br />"} />
    <Marked md={"### Primary"} />
    <Marked md={"<br />"} />
    <Button variant={Variants.PRIMARY} onClick={action("Clicked PRIMARY")}>
      Primary
    </Button>
    <Marked md={"<br />"} />
    <Marked md={"### Secondary"} />
    <Marked md={"<br />"} />
    <Button variant={Variants.SECONDARY} onClick={action("Clicked SECONDARY")}>
      Secondary
    </Button>
    <Marked md={"<br />"} />
    <Marked md={"### Success"} />
    <Marked md={"<br />"} />
    <Button variant={Variants.SUCCESS} onClick={action("Clicked SUCCESS")}>
      Success
    </Button>
    <Marked md={"<br />"} />
    <Marked md={"### Info"} />
    <Marked md={"<br />"} />
    <Button variant={Variants.INFO} onClick={action("Clicked INFO")}>
      Info
    </Button>
    <Marked md={"<br />"} />
    <Marked md={"### Warning"} />
    <Marked md={"<br />"} />
    <Button variant={Variants.WARNING} onClick={action("Clicked WARNING")}>
      Warning
    </Button>
    <Marked md={"<br />"} />
    <Marked md={"### Danger"} />
    <Marked md={"<br />"} />
    <Button variant={Variants.DANGER} onClick={action("Clicked DANGER")}>
      Danger
    </Button>
    <Marked md={"<br />"} />
    <Marked md={"### Link"} />
    <Marked md={"<br />"} />
    <Button variant={Variants.LINK} onClick={action("Clicked LINK")}>
      Link
    </Button>
    <Marked md={"<br />"} />
  </div>
));

keys(Variants).forEach((key: string) => {
  story.add((Variants as any)[key], () => {
    const props = {
      children: "Click me!",
      variant: (Variants as any)[key]
    };
    return (
      <Button
        {...props}
        onClick={action(`Clicked ${(Variants as any)[key]}`)}
      />
    );
  });
});
