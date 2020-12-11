import thunk from 'redux-thunk';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { productReducer } from './product/product.reducer';
import { contactReducer } from './contact/contact.reducer';
import { billingReducer } from './billing/billing.reducer';
import { deliveryReducer } from './delivery/delivery.reducer';
import { paymentIntentReducer } from './payment-intent/payment-intent.reducer';
import { conditionsReducer } from './conditions/conditions.reducer';
import { processReducer } from './process/process.reducer';

export const rootReducer = combineReducers({
  product: productReducer,
  contact: contactReducer,
  billing: billingReducer,
  delivery: deliveryReducer,
  conditions: conditionsReducer,
  paymentIntent: paymentIntentReducer,
  process: processReducer,
});

const composeEnhancers =
  (typeof window !== 'undefined' &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export type RootState = ReturnType<typeof rootReducer>;
