export interface ProductState {
  id: string;
  name: string;
  images: string[];
  price: string;
  currency: string;
}

export interface ProductResponse {
  productId: string;
  name: string;
  images: string[];
  price: string;
  currency: string;
}

export const SAVE_PRODUCT = 'SAVE_PRODUCT';

export interface SaveProductAction {
  type: typeof SAVE_PRODUCT;
  product: ProductState;
}

export type ProductActionTypes = SaveProductAction;
