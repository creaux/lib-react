import { SET_SECRET, SetSecretAction } from './payment-intent.types';

export const setSecret = (secret: string): SetSecretAction => ({
  type: SET_SECRET,
  secret,
});
