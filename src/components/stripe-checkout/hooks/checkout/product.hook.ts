import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { ProductState } from '../../store/product/product.types';

export function useStripeProduct(): ProductState {
  return useSelector<RootState, ProductState>((state) => state.product);
}
