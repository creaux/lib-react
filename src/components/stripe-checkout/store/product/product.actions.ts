import { ProductState, SAVE_PRODUCT, SaveProductAction } from './product.types';

export const saveProduct = (product: ProductState): SaveProductAction => ({
  type: SAVE_PRODUCT,
  product,
});
