import React from "react";
import { storiesOf } from "@storybook/react";
import { Hero } from "../Hero";
import {
  PositionBuilder,
  Viewport,
  ViewportPropsBuilder
} from "../Viewport/component";
import { Navigation } from "../Navigation";
import { props as navigationProps } from "../Navigation/mocks";
import { NavigationClaim } from "../NavigationClaim";
import { NavigationButtons } from "../NavigationButtons";
import { props as buttonProps } from "../NavigationButtons/mock";
import { NavigationBrand } from "../NavigationBrand";
import { props as navigationBrandProps } from "../NavigationBrand/mock";
import { NavigationItems } from "../NavigationItems";
import { props as navigationItemProps } from "../NavigationItems/mock";
import { PadContainer } from "./container";

class ViewportProps {
  private static position = new PositionBuilder()
    .withPortrait("right")
    .withLandscape("center")
    .withDesktop("center")
    .build();

  private static props = new ViewportPropsBuilder().withXPosition(
    ViewportProps.position
  );

  static readonly first = ViewportProps.props
    .withBackground("https://picsum.photos/id/100/2500/1656")
    .build();

  static readonly second = ViewportProps.props
    .withBackground("https://picsum.photos/id/101/2500/1656")
    .build();

  static readonly third = ViewportProps.props
    .withBackground("https://picsum.photos/id/102/2500/1656")
    .build();
}

storiesOf("Organisms/Pad", module).add("default", () => {
  const heroProps = {
    position: {
      x: 24,
      y: 24
    }
  };

  return (
    <>
      <Navigation
        {...navigationProps}
        className="justify-content-between fixed-top"
      >
        <NavigationBrand {...navigationBrandProps} />
        <NavigationItems {...navigationItemProps} />
      </Navigation>
      <PadContainer>
        <Viewport {...ViewportProps.first}>
          <Hero {...heroProps} />
        </Viewport>
        <Viewport {...ViewportProps.second}>
          <Hero {...heroProps} />
        </Viewport>
        <Viewport {...ViewportProps.third}>
          <Hero {...heroProps} />
        </Viewport>
      </PadContainer>
      <Navigation
        {...navigationProps}
        className="justify-content-between fixed-bottom"
      >
        <NavigationClaim>This is button navigation</NavigationClaim>
        <NavigationButtons {...buttonProps} />
      </Navigation>
    </>
  );
});
