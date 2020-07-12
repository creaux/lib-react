import {
  ProductDescriptionProps,
  ProductDescriptionPropsBuilder
} from './component';

export const props: ProductDescriptionProps = new ProductDescriptionPropsBuilder()
  .withPrice('300')
  .withTitle('Some title')
  .build();
