import {
  ProductActionTypes,
  ProductState,
  SAVE_PRODUCT,
} from './product.types';

const initialState: ProductState = {
  id: '',
  name: '',
  price: '',
  images: [],
  currency: '',
};

export function productReducer(
  state: ProductState = initialState,
  action: ProductActionTypes
) {
  switch (action.type) {
    case SAVE_PRODUCT:
      return { ...state, ...action.product };
    default:
      return state;
  }
}
