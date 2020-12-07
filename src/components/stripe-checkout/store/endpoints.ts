import { environment } from '../../../env';

export class Endpoints {
  private static RAW_BASE = environment.API_CHECKOUT;

  public static join(...args: string[]): URL {
    return new URL([...args].join("/"));
  }

  public static PAYMENT: URL = Endpoints.join(Endpoints.RAW_BASE, 'payment');
  public static PRODUCT: URL = Endpoints.join(Endpoints.RAW_BASE, 'product');
}
