import { ModalActions } from '@store/actions/type.ts';
import { ActionsType, ModalInitialState } from '@store/reducers/types';

const initialState: ModalInitialState = {
  modal: null,
};

// eslint-disable-next-line @typescript-eslint/default-param-last
export const modalReducer = (state = initialState, action: ActionsType) => {
  switch (action.type) {
    case ModalActions.SET_MODAL: {
      return { ...state, modal: action.payload.modal };
    }

    default:
      return state;
  }
};
