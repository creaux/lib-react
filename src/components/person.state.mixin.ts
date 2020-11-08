import { Constructor } from './constructor.type';

export function Person<T extends Constructor>(Base: T) {
  return class Person extends Base {};
}
