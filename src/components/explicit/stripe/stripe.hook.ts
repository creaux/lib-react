import { useStripe as useReactStripe } from '@stripe/react-stripe-js';

export function useStripe() {
  return useReactStripe();
}
