import { ThunkAction } from 'redux-thunk';
import { RootState } from './index';
import { Action } from 'redux';

export type ThunkType = ThunkAction<void, RootState, unknown, Action<string>>;
