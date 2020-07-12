import { compose } from 'recompose';
import { FieldContainer, FieldContainerProps } from '../../container';
import { FieldOuterProps, InputTypeEnum } from '../../types';
import { Validators } from '../../hoc/validators/validators';
import { validator } from '../../hoc/validators/validator';
import { provideInputType } from '../../hoc/provideInputType';

export const Alpha = compose<FieldContainerProps, FieldOuterProps>(
  provideInputType(InputTypeEnum.TEXT),
  validator(
    [Validators.isAlpha, 0],
    [Validators.isNotAlpha, 1],
    [Validators.empty, 2]
  )
)(FieldContainer);
