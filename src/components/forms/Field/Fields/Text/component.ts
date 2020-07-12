import { FieldContainer, FieldContainerProps } from '../../container';
import { FieldOuterProps, InputTypeEnum, TypeProps } from '../../types';
import { Validators } from '../../hoc/validators/index';
import { compose } from 'recompose';
import {
  MessagesProps,
  ValidatorProps
} from '../../hoc/validators/validator/index';
import { validator } from '../../hoc/validators/validator';
import { provideInputType } from '../../hoc/provideInputType';

export const Text = compose<FieldContainerProps, FieldOuterProps>(
  provideInputType<TypeProps>(InputTypeEnum.TEXT),
  validator<ValidatorProps & MessagesProps>(
    [Validators.isText, 0],
    [Validators.isNotText, 1],
    [Validators.empty, 2]
  )
)(FieldContainer);
