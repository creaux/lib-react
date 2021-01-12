import React, { FunctionComponent, useContext } from 'react';
// @ts-ignore
import AccordionContext from 'react-bootstrap/AccordionContext';
import { Accordion, Card } from 'react-bootstrap';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';

export interface CollapsableElement {
  title: string;
  description: string;
}

export interface CollapsableProps {
  elements: CollapsableElement[];
}

export const Collapsable: FunctionComponent<CollapsableProps> = ({
  elements,
}) => {
  return (
    <Accordion>
      {elements.map(({ title, description }: CollapsableElement, i: number) => (
        <Card>
          <Card.Header className="d-flex justify-content-between align-items-center">
            <Accordion.Toggle as="a" eventKey={i.toString()}>
              <strong>{title}</strong>
            </Accordion.Toggle>
            <Accordion.Toggle as="div" eventKey={i.toString()}>
              <CollapsableChevron eventKey={i.toString()} />
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey={i.toString()}>
            <Card.Body>{description}</Card.Body>
          </Accordion.Collapse>
        </Card>
      ))}
    </Accordion>
  );
};

interface CollapsableChevronProps {
  eventKey: string;
}

const CollapsableChevron: FunctionComponent<CollapsableChevronProps> = ({
  eventKey,
}) => {
  const currentEventKey = useContext(AccordionContext);
  return currentEventKey === eventKey ? <BsChevronDown /> : <BsChevronUp />;
};
