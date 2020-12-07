import { Builder } from '../../../../builder';
import { saveProduct } from './product.actions';
import { ProductState } from './product.types';
import { headers } from '../headers';
import { ThunkType } from '../thunk.type';
import { Endpoints } from '../endpoints';

export const fetchProduct = (id: string): ThunkType => async (dispatch) => {
  try {
    const response: Response = await fetch(
      Endpoints.join(Endpoints.PRODUCT.toString(), id).toString(),
      Builder<RequestInit>().method('GET').headers(headers).build()
    );

    switch (response.status) {
      case 200:
        const data: ProductState = await response.json();
        const product = Builder<ProductState>()
          .id(data.id)
          .images(data.images)
          .name(data.name)
          .price(data.price)
          .currency(data.currency)
          .build();
        dispatch(saveProduct(product));
        break;
      case 400:
        // TODO
        break;
      default:
        console.error(
          'Missing error handling for fetchProduct thunk:',
          response.status,
          response.statusText
        );
    }
  } catch (e) {
    console.error(e);
  }
};
