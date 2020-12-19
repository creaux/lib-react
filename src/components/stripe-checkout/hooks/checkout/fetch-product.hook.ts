import { useDispatch } from 'react-redux';
import { fetchProduct } from '../../store/product/product.thunks';
import { EffectCallback, useEffect } from 'react';

export function useFetchProduct(productId: string) {
  const dispatch = useDispatch();

  const dispatchFetchProduct: EffectCallback = () => {
    dispatch(fetchProduct(productId));
  };

  useEffect(dispatchFetchProduct, []);
}
