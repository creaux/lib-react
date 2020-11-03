import React, { FunctionComponent, ReactElement, ReactNode } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BreakpointNumber } from './breakpoint-number.type';
import cx from 'classnames';
import { Padding } from '../schema/padding.enum';

export interface CascadeProps {
  children: (ReactNode | ReactElement)[];
  layout?: BreakpointNumber;
  center?: boolean;
  padding?: Padding;
}

export const Cascade: FunctionComponent<CascadeProps> = ({
  children,
  layout = {},
  center = false,
  padding,
}) => {
  return (
    <Container>
      <Row>
        {children.map((child, i) => (
          <Col
            key={i}
            {...layout}
            className={cx({ 'd-flex justify-content-center': center })}
          >
            <div className={cx(padding)}>{child}</div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
