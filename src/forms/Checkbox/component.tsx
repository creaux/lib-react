import React, {
  ChangeEvent,
  FunctionComponent,
  useEffect,
  useState,
} from 'react';
import { OnChange } from '../../components/form.types';
import { Builder } from '../../builder';

export interface CheckboxProps {
  onChange: OnChange<HTMLInputElement>;
  id: string;
  title: string;
  checked?: boolean;
  disabled: boolean;
}

export const Checkbox: FunctionComponent<CheckboxProps> = ({
  checked = false,
  id,
  title,
  onChange,
  disabled,
}) => {
  const [state, setState] = useState<ChangeEvent<HTMLInputElement>>(
    Builder<ChangeEvent<HTMLInputElement>>()
      .currentTarget(
        Builder<HTMLInputElement>().title(title).id(id).checked(checked).build()
      )
      .build()
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    // Due to event pooling in react each synthetic eventy is nullified
    // So it has to be cached in the variable
    const changeEvent = Builder<ChangeEvent<HTMLInputElement>>()
      .currentTarget(e.currentTarget)
      .build();
    setState(changeEvent);
  };

  useEffect(() => {
    onChange(state);
  }, [state, onChange]);

  return (
    <div className="custom-control custom-checkbox">
      <input
        className="custom-control-input"
        type="checkbox"
        checked={state.currentTarget.checked}
        id={state.currentTarget.id}
        onChange={handleChange}
        name={state.currentTarget.id}
        disabled={disabled}
      />
      <label className="custom-control-label" htmlFor={id}>
        {title}
      </label>
    </div>
  );
};
