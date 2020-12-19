import { ICheckbox } from '../../../../forms/Checkbox/types';
import { Builder } from '../../../../builder';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

export function useTermsMapper(label: string): ICheckbox {
  return Builder<ICheckbox>()
    .checked(
      useSelector<RootState>((state) => state.conditions.terms) as boolean
    )
    .title(label)
    .id('terms')
    .build();
}
