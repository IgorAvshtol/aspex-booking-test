import {
  AddCurrentResPayload,
  AddNewOrderPayload,
  AddNewUserPayload,
  ModalInitialState,
  RemoveOrderPayload,
  SetCurrentUserPayload,
  SetIsLoggedPayload,
} from '@store/reducers/types';
import { AuthActions, UserActions } from '@store/actions/type.ts';

export const setModal = (payload: ModalInitialState) => ({
  type: UserActions.SET_MODAL,
  payload,
} as const);

export const setCurrentUser = (payload: SetCurrentUserPayload) => ({
  type: UserActions.SET_CURRENT_USER,
  payload,
} as const);

export const setIsLoggedUser = (payload: SetIsLoggedPayload) => ({
  type: AuthActions.IS_LOGGED,
  payload,
} as const);

export const addNewUser = (payload: AddNewUserPayload) => ({
  type: UserActions.ADD_NEW_USER,
  payload,
} as const);

export const addNewOrder = (payload: AddNewOrderPayload) => ({
  type: UserActions.ADD_NEW_ORDER,
  payload,
} as const);

export const addCurrentRestaurant = (payload: AddCurrentResPayload) => ({
  type: UserActions.ADD_CURRENT_RESTAURANT,
  payload,
} as const);

export const removeOrder = (payload: RemoveOrderPayload) => ({
  type: UserActions.REMOVE_ORDER,
  payload,
} as const);
