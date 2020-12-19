import { ThunkAction } from 'redux-thunk';
import { RootState } from './index';
import { Action, AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

export type ThunkType = ThunkAction<void, RootState, unknown, Action<string>>;

export type ThunkDispatchType = ThunkDispatch<RootState, any, AnyAction>;
