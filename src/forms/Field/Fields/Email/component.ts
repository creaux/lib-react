import { FieldOuterProps, InputTypeEnum, TypeProps } from '../../types';
import { Validators } from '../../hoc/validators';
import { compose } from 'recompose';
import { validator } from '../../hoc/validators/validator';
import { FieldContainer, FieldContainerProps } from '../../container';
import { provideInputType } from '../../hoc/provideInputType';
import { ComponentClass } from 'react';

export const Email: ComponentClass<FieldOuterProps> = compose<
  FieldContainerProps,
  FieldOuterProps
>(
  provideInputType<TypeProps>(InputTypeEnum.EMAIL),
  validator(
    [Validators.isEmail, 0],
    [Validators.isNotEmail, 1],
    [Validators.empty, 2]
  )
)(FieldContainer);
