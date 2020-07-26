import React, { FunctionComponent } from 'react';
import { Raiser } from './Raiser';
import { Button, Variants } from './forms/Button';
import setDisplayName from 'recompose/setDisplayName';
import { Container, Row, Col } from 'react-bootstrap';

export interface AddComponentProps {
  title: string;
  onAdd: (event: React.MouseEvent) => void;
  onCount: (count: number) => void;
}
export const AddComponent: FunctionComponent<AddComponentProps> = setDisplayName(
  'AddComponent'
)(({ title, onAdd, onCount }) => (
  <Container>
    <Row>
      <Col>
        <Raiser onCount={onCount} />
      </Col>
      <Col>
        <Button variant={Variants.PRIMARY} onClick={onAdd}>
          {title}
        </Button>
      </Col>
    </Row>
  </Container>
));
