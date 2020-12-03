export interface ProductState {
  id: string;
  name: string;
  images: string[];
  price: string;
  currency: string;
}

export const SAVE_PRODUCT = 'SAVE_PRODUCT';
export const SAVE_PRODUCT_ID = 'SAVE_PRODUCT_ID';

export interface SaveProductIDAction {
  type: typeof SAVE_PRODUCT_ID;
  id: string;
}

export interface SaveProductAction {
  type: typeof SAVE_PRODUCT;
  product: ProductState;
}

export type ProductActionTypes = SaveProductAction | SaveProductIDAction;
