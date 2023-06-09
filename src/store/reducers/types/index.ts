import { AuthActions, ModalActions, UserActions } from '@store/actions/type.ts';

export interface User {
  id: string;
  email: string;
  password: string;
  phone: string;
}

export interface Order {
  id: string;
  dateAndTime: string;
  quests: number;
  tableNumber: string[];
}

export interface UserInitialState {
  currentUser: User;
  allUsers: User[];
  orders: Order[];
  currentRestaurant: AddCurrentResPayload;
}

export interface ModalInitialState {
  modal: 'login' | 'logout' | 'register' | 'profile' | null;
}

export type SetModal = {
  type: ModalActions.SET_MODAL;
  payload: ModalInitialState;
};

export interface SetCurrentUserPayload {
  currentUser: User;
}

export type SetCurrentUser = {
  type: typeof UserActions.SET_CURRENT_USER;
  payload: SetCurrentUserPayload;
};

export interface SetIsLoggedPayload {
  isLogged: boolean;
}

export type SetIsLoggedUser = {
  type: typeof AuthActions.IS_LOGGED;
  payload: SetIsLoggedPayload;
};

export interface AddNewUserPayload {
  id: string;
  phone: string;
  email: string;
  password: string;
}

export type AddNewUser = {
  type: typeof UserActions.ADD_NEW_USER;
  payload: AddNewUserPayload;
};

export interface RemoveUserPayload {
  id: string;
}

export type RemoveUser = {
  type: typeof UserActions.REMOVE_USER;
  payload: RemoveUserPayload;
};

export interface AddNewOrderPayload {
  id: string;
  quests: number;
  dateAndTime: string | undefined;
  tableNumber: string[];
}

export type AddNewOrder = {
  type: typeof UserActions.ADD_NEW_ORDER;
  payload: AddNewOrderPayload;
};

export interface AddCurrentResPayload {
  currentRestaurant: string;
  image: string;
}

export type AddCurrentRes = {
  type: typeof UserActions.ADD_CURRENT_RESTAURANT;
  payload: AddCurrentResPayload;
};

export interface RemoveOrderPayload {
  id: string;
}

export type RemoveOrder = {
  type: typeof UserActions.REMOVE_ORDER;
  payload: RemoveOrderPayload;
};

export type ActionsType =
    | SetModal
    | SetCurrentUser
    | SetIsLoggedUser
    | AddNewUser
    | RemoveUser
    | AddNewOrder
    | AddCurrentRes
    | RemoveOrder;
