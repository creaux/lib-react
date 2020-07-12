import { FieldContainer, FieldContainerProps } from '../../container';
import { FieldOuterProps, FieldType } from '../../types';
import { Validators } from '../../hoc/validators/index';
import { compose } from 'recompose';
import {
  MessagesProps,
  ValidatorProps
} from '../../hoc/validators/validator/index';
import { provideFieldType } from '../../hoc/provideFieldType';
import { validator } from '../../hoc/validators/validator';

export const Select = compose<FieldContainerProps, FieldOuterProps>(
  provideFieldType(FieldType.SELECT),
  validator<ValidatorProps & MessagesProps>(
    [Validators.isText, 0],
    [Validators.isNotText, 1],
    [Validators.empty, 2]
  )
)(FieldContainer);
