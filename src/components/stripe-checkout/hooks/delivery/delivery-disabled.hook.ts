import { useSelector } from 'react-redux';
import { RootState } from '../../store';

export function useDeliveryDisabled() {
  return useSelector<RootState, boolean>((state) => state.delivery.disabled);
}
