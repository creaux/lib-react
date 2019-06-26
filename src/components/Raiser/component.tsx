import React, { FunctionComponent } from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';
import { Button, Variants } from '../forms/Button';

interface RaiserProps {
  onRaise: (event: MouseEvent) => void;
  onDecrease: (event: MouseEvent) => void;
  count: number;
}

export const Raiser: FunctionComponent<RaiserProps> = ({
  onRaise,
  onDecrease,
  count
}) => (
  <InputGroup className="mb-3">
    <InputGroup.Prepend>
      <Button variant={Variants.SECONDARY} onClick={onDecrease}>
        -
      </Button>
    </InputGroup.Prepend>
    <FormControl type="number" className="m" value={count.toString()} />
    <InputGroup.Append>
      <Button variant={Variants.SECONDARY} onClick={onRaise}>
        +
      </Button>
    </InputGroup.Append>
  </InputGroup>
);
