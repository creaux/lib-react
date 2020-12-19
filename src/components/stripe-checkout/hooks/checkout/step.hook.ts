import { useSelector } from 'react-redux';
import { RootState } from '../../store';

export const useStep = () =>
  useSelector<RootState>((state) => state.process.step);
