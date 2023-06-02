import { UserActions } from '@store/actions/type.ts';
import {
  ActionsType, AddCurrentResPayload, User, UserInitialState,
} from '@store/reducers/types';

const initialState: UserInitialState = {
  currentUser: {} as User,
  allUsers: [],
  orders: [],
  currentRestaurant: {} as AddCurrentResPayload,
};

// eslint-disable-next-line @typescript-eslint/default-param-last
export const userReducer = (state = initialState, action: ActionsType) => {
  switch (action.type) {
    case UserActions.SET_CURRENT_USER: {
      return { ...state, currentUser: action.payload.currentUser };
    }

    case UserActions.ADD_NEW_USER: {
      const {
        email, password, id, phone,
      } = action.payload;
      const newUser = {
        id,
        email,
        password,
        phone,
      };
      return { ...state, allUsers: [...state.allUsers, newUser] };
    }

    case UserActions.ADD_NEW_ORDER: {
      const {
        id, dateAndTime, quests, tableNumber,
      } = action.payload;
      const newOrder = {
        id,
        dateAndTime,
        quests,
        tableNumber,
      };
      return { ...state, orders: [...state.orders, newOrder] };
    }

    case UserActions.REMOVE_USER: {
      const { id } = action.payload;
      return { ...state, allUsers: state.allUsers.filter((user) => user.id !== id) };
    }

    case UserActions.ADD_CURRENT_RESTAURANT: {
      return { ...state, currentRestaurant: action.payload };
    }

    case UserActions.REMOVE_ORDER: {
      const { id } = action.payload;
      return { ...state, orders: state.orders.filter((order) => order.id !== id) };
    }

    default:
      return state;
  }
};
