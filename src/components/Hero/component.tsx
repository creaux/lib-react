import React, { FunctionComponent } from 'react';

export interface HeroProps {
  position: {
    x: number;
    y: number;
  };
}

export const Hero: FunctionComponent<HeroProps> = ({ position }) => {
  const style = {
    '--hero__x-position': position.x,
    '--hero__y-position': position.y
  };

  return (
    // @ts-ignore
    <div className="hero" style={style}>
      <h1>Title</h1>
      <p>Lorem ipsum</p>
    </div>
  );
};
