import { Constructor } from './constructor.type';

export function Shipping<T extends Constructor>(Base: T) {
  return class Shipping extends Base {};
}
