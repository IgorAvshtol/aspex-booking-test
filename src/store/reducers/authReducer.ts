import { AuthActions } from '@store/actions/type.ts';
import { ActionsType } from '@store/reducers/types';

export interface IAuthInitState {
  isLogged: boolean;
}

const initialState: IAuthInitState = {
  isLogged: false,
};

// eslint-disable-next-line @typescript-eslint/default-param-last
export const authReducer = (state = initialState, action: ActionsType) => {
  switch (action.type) {
    case AuthActions.IS_LOGGED: {
      return { ...state, isLogged: action.payload.isLogged };
    }

    default:
      return state;
  }
};
