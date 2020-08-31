import {
  ProductDescriptionProps,
  ProductDescriptionPropsBuilder,
} from './product-description.component';

export const props: ProductDescriptionProps = new ProductDescriptionPropsBuilder()
  .withPrice('300')
  .withTitle('Some title')
  .build();
